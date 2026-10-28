# Selling on the site (only when the client wants it)

Read when interview question 10 is «yes, now», or the client asks for a cart or payment.
Build the real thing; ask for what you don't know (prices, delivery, payment provider,
who sells) and put clearly marked placeholders in the meantime.

- **Basket:** kept in browser storage so it survives moving between pages; a drawer from
  every page with quantities, remove, subtotal and «go to checkout».
- **Checkout:** a few short steps (contact, delivery, payment) beside an order summary that
  folds to one line on a phone. One validation schema shared by the form and the server.
- **Prices come from the server's catalogue, never from the browser.** While a price or a
  delivery tariff is unknown, the server refuses payment and the page says so in plain words.
- **Payment:** ask which provider and which local methods the buyers expect. Hosted
  checkout pages keep card data off the site. Fulfil from the provider's webhook (signature
  checked, safe to run twice); the thank-you page only shows the result; a cancelled
  payment returns to checkout with the basket intact.
- **Delivery:** the methods the client names (pickup, own delivery, couriers, parcel
  lockers) as placeholders with prices to fill in; an address or locker field only when
  the method needs it.
- **E-mail:** order confirmation to the buyer and a copy to the shop.
- **Legal:** distance-selling terms for the client's country (ask it — `launch.md` question 5),
  including any exceptions that apply to their goods (e.g. perishable food in the EU),
  checked by a lawyer before launch.
- **Stack:** this needs server code — Next.js unless the client chose otherwise.
