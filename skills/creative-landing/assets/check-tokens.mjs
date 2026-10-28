// Fails the build when styles stop coming from the tokens file.
// Copy to the project's scripts/ folder, set the constants below, then run it as
// "prebuild": "node scripts/check-tokens.mjs".
// A line that must break a rule carries `tokens-ok: <reason>`; keep that list short.
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'src'
const TOKENS = 'src/styles/tokens.css' // the only file allowed to hold raw values
const BREAKPOINTS = ['40rem', '52rem', '64rem', '80rem'] // the only widths @media may use
const CODE = /\.(css|tsx?|jsx?|astro|vue|svelte|html)$/

const files = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? files(p) : CODE.test(e.name) ? [p] : []
  })

const all = files(SRC).map((file) => ({ file, text: fs.readFileSync(file, 'utf8') }))
if (!all.some((f) => f.file === path.normalize(TOKENS))) throw new Error(`tokens file not found: ${TOKENS}`)
const sources = all.filter((f) => f.file !== path.normalize(TOKENS))
const problems = []

const rules = [
  ['colour literal (use a token)', /#[0-9a-f]{3,8}\b(?![-\w])|\b(?:rgba?|hsla?|oklch|oklab|lab|lch|color-mix)\(/i],
  ['font-size in px (use the type scale)', /font-size\s*:\s*[\d.]+px/i],
  ['Tailwind arbitrary value (add a token)', /\b[a-z][\w-]*-\[(?!var\(|--)[^\]]+\]/],
  ['raw z-index (use a --z-* token)', /z-index\s*:\s*-?\d+/i],
  ['raw timing (use a --duration-* or --ease-* token)', /(?:transition|animation)[\w-]*\s*:[^;]*\b\d+m?s\b|cubic-bezier\(/i],
]

for (const { file, text } of sources) {
  text.split('\n').forEach((line, i) => {
    if (line.includes('tokens-ok:')) return
    const code = line.replace(/\/\*.*?\*\/|\/\/.*$/g, '')
    for (const [name, re] of rules) if (re.test(code)) problems.push(`${file}:${i + 1} ${name}: ${line.trim()}`)
    for (const m of code.matchAll(/@media[^{]*?(?:min|max)-width\s*:\s*([\d.]+\w+)/g))
      if (!BREAKPOINTS.includes(m[1])) problems.push(`${file}:${i + 1} breakpoint ${m[1]} not in ${BREAKPOINTS.join(', ')}`)
  })
}

// Every var(--x) used is declared somewhere (a typo otherwise renders as nothing).
const declared = new Set(all.flatMap(({ text }) => [...text.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1])))
for (const { file, text } of sources)
  for (const m of text.matchAll(/var\((--[\w-]+)/g))
    if (!declared.has(m[1])) problems.push(`${file} uses undeclared ${m[1]}`)

// Every class defined in a stylesheet is used somewhere else (no dead CSS).
const markup = sources.filter((f) => !f.file.endsWith('.css')).map((f) => f.text).join('\n')
for (const { file, text } of sources.filter((f) => f.file.endsWith('.css')))
  for (const cls of new Set([...text.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/\.(-?[a-z_][\w-]*)(?=[^{}]*\{)/gi)].map((m) => m[1])))
    if (!new RegExp(`(?<![\\w-])${cls}(?![\\w-])`).test(markup)) problems.push(`${file} class .${cls} is never used`)

if (problems.length) {
  console.error(`check-tokens: ${problems.length} problem(s)\n` + problems.join('\n'))
  process.exit(1)
}
console.log(`check-tokens: ${sources.length} files clean`)
