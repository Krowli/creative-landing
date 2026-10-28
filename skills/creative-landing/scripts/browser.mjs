// Shared headless Chrome launcher. Never opens a visible window.
import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const CANDIDATES = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
]

export async function launch() {
  const executablePath = CANDIDATES.find((p) => p && fs.existsSync(p))
  if (!executablePath) throw new Error('Chrome not found; set CHROME=/path/to/chrome')
  return puppeteer.launch({
    executablePath,
    headless: 'new',
    protocolTimeout: 120000,
    args: ['--enable-gpu', '--ignore-gpu-blocklist', process.platform === 'darwin' ? '--use-angle=metal' : ''].filter(Boolean),
  })
}

export const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  phone: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
