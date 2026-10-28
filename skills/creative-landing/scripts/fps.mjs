// Usage: node fps.mjs <url> [cpuThrottle=1] [desktop|phone]
// Scrolls top → bottom → top at ~1400 px/s and prints the lowest and median
// one-second frame rate. Headless GPU numbers are indicative; real devices differ.
import { launch, VIEWPORTS, sleep } from './browser.mjs'

const [url, throttle = '1', device = 'desktop'] = process.argv.slice(2)
if (!url) throw new Error('usage: node fps.mjs <url> [cpuThrottle] [desktop|phone]')

const browser = await launch()
try {
  const page = await browser.newPage()
  await page.setViewport(VIEWPORTS[device])
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 })
  await sleep(3000)
  const cdp = await page.createCDPSession()
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: Number(throttle) })
  const buckets = await page.evaluate(async () => {
    const frames = []
    let running = true
    const tick = (t) => { frames.push(t); if (running) requestAnimationFrame(tick) }
    requestAnimationFrame(tick)
    const H = document.documentElement.scrollHeight - innerHeight
    const t0 = performance.now()
    const dur = (H / 1400) * 1000
    const scrollAt = (p) => scrollTo(0, H * p)
    await new Promise((done) => {
      const step = () => {
        const p = (performance.now() - t0) / dur
        if (p >= 2) return done()
        scrollAt(p <= 1 ? p : 2 - p)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
    running = false
    const out = []
    for (let s = frames[0]; s < frames[frames.length - 1] - 1000; s += 1000) {
      out.push(frames.filter((f) => f >= s && f < s + 1000).length)
    }
    return out
  })
  const sorted = [...buckets].sort((a, b) => a - b)
  console.log(`${device} cpu x${throttle}: lowest ${sorted[0]} fps, median ${sorted[Math.floor(sorted.length / 2)]} fps over ${buckets.length} s`)
} finally {
  await browser.close()
}
