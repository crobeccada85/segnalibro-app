# Segnalibro

App personale per tenere traccia della pagina/posizione di lettura di fino a 10 libri,
passando liberamente tra versione Kindle e versione cartacea, sincronizzata tra dispositivi.

## Struttura

- `public/index.html` — l'app (interfaccia)
- `netlify/functions/books.mjs` — funzione che salva/legge i libri su Netlify Blobs
- `netlify.toml` — configurazione del sito per Netlify

## Pubblicazione

Il sito è pensato per essere pubblicato su Netlify collegato a un repository GitHub.
Netlify Blobs non richiede configurazione: funziona automaticamente una volta che il sito
è online su Netlify.
