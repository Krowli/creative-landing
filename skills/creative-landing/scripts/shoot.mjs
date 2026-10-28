// Usage: node shoot.mjs <url> <outDir>
// Walks the page at desktop and phone size, one screenshot per viewport height,
// scrolling in small steps so scroll-driven scenes play as a user would see them.
import fs from 'node:fs'
import { launch, VIEWPORTS, sleep } from './browser.mjs'

const [url, outDir = 'qa/shots'] = process.argv.slice(2)
if (!url) throw new Error('usage: node shoot.mjs <url> <outDir>')
fs.mkdirSync(outDir, { recursive: true })

const browser = await launch()
try {
  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    const page = await browser.newPage()
    await page.setViewport(viewport)
    const errors = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 })
    await sleep(3000)
    const height = await page.evaluate(() => document.documentElement.scrollHeight)
    let i = 0
    for (let y = 0; y < height; y += viewport.height) {
      await page.evaluate(async (target) => {
        for (let n = 0; n < 80 && Math.abs(scrollY - target) > 2; n++) {
          scrollTo(0, scrollY + Math.sign(target - scrollY) * Math.min(120, Math.abs(target - scrollY)))
          await new Promise((r) => setTimeout(r, 30))
        }
      }, y)
      await sleep(2000)
      await page.screenshot({ path: `${outDir}/${name}-${String(i++).padStart(2, '0')}.png` })
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    console.log(`${name}: ${i} shots, height ${height}px, horizontal overflow ${overflow}px, errors ${JSON.stringify(errors)}`)
    await page.close()
  }
} finally {
  await browser.close()
}
