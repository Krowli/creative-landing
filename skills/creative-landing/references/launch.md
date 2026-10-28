# Phase 8 — Launch

When the client wants the page live. Not before: the first builds are for deciding
what the site should be.

## Ask, don't assume
One message, plain words, suggested answers as in `interview.md`:
1. Where should the site live (Vercel, Netlify, their own hosting, "you decide")?
   Domain — do they have one, and does a website run on it now? (Open it yourself too.)
2. Should visitors be able to send a request from the site? If yes, where should it
   arrive (email, messenger, CRM)?
3. Analytics — which, if any?
4. Who runs the site legally (company, sole trader, private person) and which e-mail
   answers questions about personal data?
5. In which country is the business registered, and in which language(s) should the
   legal pages be? Never assume either from the city or the site's language.
Build for their answers. No form if they don't want one; their hosting if they have it.

## Every site gets these
Tell the client they are needed, even if they didn't ask.
- **Legal pages:** privacy policy, cookie policy, terms. Consent checkbox (unticked)
  on any form that collects personal data. Cookie banner only when non-essential
  cookies or analytics exist; analytics loads only after consent. Names, addresses,
  terms the client hasn't given go in clearly marked placeholders, listed in the report.
- **Search files:** already there from phase 3 (`build-with-subagents.md` → Search files). Check them on
  the live address; add hreflang when there is more than one language.
- **Security headers:** Content-Security-Policy (ship as Report-Only, walk the live site,
  enforce once there are 0 violations), `X-Content-Type-Options: nosniff`,
  `Referrer-Policy`. Anything new added to the page later must be added to the CSP.
- **If there is a form:** validate on the server with length caps; plain-text emails;
  strip line breaks from anything that goes into a mail header; honeypot; captcha;
  rate limit on the endpoint; secrets only in server-side env vars, never in the repo.

## Replacing a site that is live now
When the domain already serves a site (the client's old one, or an earlier version of
ours), its addresses are in search results, bookmarks and other people's links.
- Before the switch, list every address the old site answers: its `sitemap.xml`, the old
  code's routes, pages in Search Console, links on the client's profiles.
- Map each one to the closest new page with a permanent redirect (301/308) in the host
  config. Never a rewrite to the home page: that hides the 404 without helping anyone.
- Change only the web DNS records; leave mail records (MX, SPF, DKIM, DMARC) as they are.

## Placeholders
List every placeholder in the report: links (messengers, socials), emails, prices,
legal details. A button with no real target stays hidden until it has one, and the
client is told it exists.

## Handover
End with a table per site: repository and branch, root directory, framework, every
environment variable (name, which environments, where its value comes from), and per
domain or subdomain the DNS record to add (type, name, value from the host's domain
card, without the provider's proxy: in Cloudflare «DNS only», the grey cloud). Secrets the client sends go only into a local file readable by them
alone (`chmod 600`), never into a repository; if a secret was pasted into the chat,
suggest replacing it.

## Verify on the real deployment
- The server code must run the way the host runs it: build it with the host's own
  build (e.g. `vercel build`) and call the built function before saying it works.
- After deploy: every page and file above returns the right status; submit the form
  end to end and confirm the message arrives; check the browser console for CSP
  violations; open a few old addresses and see each redirect to the right page.
- For the first month, weekly: read the 404s that got real visits (host logs, analytics
  or Search Console) and redirect each to the nearest page. Addresses that never existed
  get visits too (old links, guessed paths such as `/company/about`); tell the client
  this check exists.
