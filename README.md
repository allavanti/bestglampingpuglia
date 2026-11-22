# Best Glamping Puglia

Mini-sito editoriale bilingue sul glamping in Puglia.
Online su **https://bestglampingpuglia.com** (Cloudflare Pages, repo `allavanti/bestglampingpuglia`, branch `main`: ogni push ripubblica il sito).

- Inglese alla radice: `/` e `/pages/…`
- Italiano sotto `/it/`: `/it/` e `/it/pages/…`
- `www.bestglampingpuglia.com` rimanda al dominio principale (regola Redirect Rules su Cloudflare, 301).
- Il vecchio sito `glamping-puglia.pages.dev` (repo `allavanti/glamping-puglia`) fa solo redirect 301 verso questo dominio: tenerlo attivo almeno 6 mesi dal 22/11/2026.

---

## STRUTTURA

```
/
├── index.html                      Home EN
├── pages/                          Pagine EN
│   ├── best-glamping-in-puglia.html
│   ├── glamping-by-the-sea-puglia.html
│   ├── romantic-glamping-puglia.html
│   ├── family-glamping-puglia.html
│   ├── wishne-glamping-bisceglie.html
│   ├── le-lenze-don-mimi-gargano.html
│   ├── hmo-glamping-vignanotica-gargano.html
│   ├── tenuta-donnanna-galatone-salento.html
│   └── macaria-camp-alliste-salento.html
├── it/
│   ├── index.html                  Home IT
│   └── pages/                      Pagine IT (guida-generale, glamping-mare,
│                                   glamping-romantici, glamping-famiglie,
│                                   wishne-bisceglie, le-lenze-don-mimi,
│                                   hmo-glamping-vignanotica,
│                                   tenuta-donnanna-galatone, macaria-camp-alliste)
├── css/  js/  images/              Asset condivisi (link root-assoluti: /css/…, /images/…)
├── sitemap.xml                     20 URL (10 pagine × 2 lingue), con hreflang
├── robots.txt
├── _headers                        Cache e security headers
├── _redirects                      Redirect interni
├── FOTO_DA_SCARICARE.md            Inventario e crediti delle immagini
└── README.md
```

Link interni sempre root-assoluti e senza `.html` (clean URL di Cloudflare Pages), per esempio `/it/pages/wishne-bisceglie`.

## SEO E LINGUE

- Ogni pagina ha `canonical`, `og:url` e JSON-LD sul dominio `https://bestglampingpuglia.com`.
- hreflang: `it`, `en`, `x-default` (= inglese, la radice).
- Per aggiungere una pagina: crearla in entrambe le lingue, aggiungerla alla sitemap con le due alternate hreflang, aggiungere link in nav/footer/home.
- Dopo ogni modifica al CSS aggiornare la query di cache-busting (`?v=…`) in tutte le pagine.

## DEPLOY

- Cloudflare Pages: Workers & Pages → progetto collegato a GitHub, branch `main`.
- Build command: vuoto. Output directory: `/`.
- Custom domains: `bestglampingpuglia.com` e `www.bestglampingpuglia.com`.
- Redirect `www` → dominio principale: Cloudflare → Rules → Redirect Rules (filtro `http.host eq "www.bestglampingpuglia.com"`, dynamic `concat("https://bestglampingpuglia.com", http.request.uri.path)`, 301, query string preservata).

Aggiornare il sito:

```bash
git add .
git commit -m "Descrizione modifica"
git push
```

Cloudflare ripubblica in circa un minuto.

## SEARCH CONSOLE

- Proprietà **Dominio** `bestglampingpuglia.com`, verificata con record DNS TXT (non rimuoverlo da Cloudflare).
- Sitemap inviata: `https://bestglampingpuglia.com/sitemap.xml`.

## NOTE TECNICHE

- Sito statico: HTML + CSS + JS vanilla, nessun server né database.
- Font: Google Fonts (Cormorant Garamond + Inter).
- Immagini: JPEG progressivi, max 1600px; varianti `-sm.jpg` (640px) per le card della home.
- Accessibilità: ruoli ARIA, alt text, focus visibile. Mobile: menu hamburger, responsive fino a 320px.

## FOTO

Vedi `FOTO_DA_SCARICARE.md` per l'elenco delle immagini, il loro uso e i crediti.
