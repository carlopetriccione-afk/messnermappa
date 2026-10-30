# Reinhold Messner · I luoghi di una vita verticale

Esercitazione per il Laboratorio di Digital Humanities (Lettere, UniMC).

## File

| File | A cosa serve |
|---|---|
| `index.html` | Mappa narrativa (StoryMapJS) |
| `cronologia.html` | Linea del tempo (TimelineJS) |
| `progetto.html` | Presentazione del progetto: strumenti, modello dei dati, diritti, limiti, fonti |
| `data.js` | **Tutti i contenuti**: luoghi, date, coordinate, testi |
| `media.js` | Recupera le foto da Wikimedia Commons con autore e licenza |
| `style.css` | Aspetto grafico comune |

## Provarlo sul computer

Fai doppio clic su `index.html`: si apre nel browser. Serve la connessione a internet,
perché StoryMapJS, TimelineJS, la mappa e le foto vengono caricati dalla rete.

Se il browser non mostra le foto aprendo il file direttamente, avvia un piccolo server
dalla cartella (con Python installato):

    python -m http.server 8000

e apri http://localhost:8000

## Pubblicarlo online (gratis)

**Netlify Drop**: vai su https://app.netlify.com/drop e trascina la cartella intera.
In pochi secondi hai un indirizzo pubblico da mandare al docente.

**GitHub Pages**: crea un repository, carica i file, poi Settings → Pages → Branch `main`.

## Modificare i contenuti

Apri `data.js` con un editor di testo (anche Blocco note) e modifica i record.
Per aggiungere un luogo copia un blocco `{ ... },` e cambia i campi.
Le coordinate si trovano cliccando col tasto destro su Google Maps o OpenStreetMap.

Se una foto scelta in automatico non ti piace, cambia l'ordine delle voci nel campo `wiki`
oppure indica una foto precisa di Commons:

    image: { url: "https://upload.wikimedia.org/wikipedia/commons/...jpg", credit: "Autore, CC BY-SA 4.0" }

## Diritti

Testi: originali. Foto: Wikimedia Commons, licenze libere, citate nella pagina «Il progetto».
Mappa: © OpenStreetMap contributors, © OpenTopoMap (CC-BY-SA).
StoryMapJS e TimelineJS: Knight Lab, Northwestern University (licenza MPL 2.0).
