/*
 * DATI DEL SITO — Reinhold Messner
 * ------------------------------------------------------------
 * Ogni tappa compare sia nella mappa (StoryMapJS) sia nella
 * cronologia (TimelineJS). Per aggiungere o correggere un luogo
 * basta modificare questo file.
 *
 *  date    : { year, month, day }  (month e day facoltativi)
 *  lat/lon : coordinate in gradi decimali
 *  zoom    : livello di zoom della mappa (2 = mondo, 12 = valle)
 *  group   : categoria mostrata nella cronologia
 *  wiki    : voci di Wikipedia da cui prendere la foto principale,
 *            in ordine di preferenza ("en:Titolo" o "it:Titolo").
 *            Vengono usate solo immagini libere di Wikimedia Commons.
 *  image   : (facoltativo) foto scelta a mano, ha la precedenza:
 *            { url: "https://upload.wikimedia.org/...", credit: "Autore, licenza" }
 */

window.MESSNER = {
  title: "Reinhold Messner",
  subtitle: "I luoghi di una vita verticale",
  intro:
    "Nato a Bressanone nel 1944, Reinhold Messner è stato il primo a salire tutte le quattordici montagne oltre gli 8.000 metri e il primo, con Peter Habeler, a raggiungere la vetta dell'Everest senza ossigeno supplementare. " +
    "Questa mappa ripercorre i luoghi delle sue imprese e della sua vita: dalle Odle della Val di Funes all'Himalaya, dai ghiacci dell'Antartide ai castelli che oggi ospitano i suoi musei.",
  introWiki: ["en:Reinhold_Messner", "it:Reinhold_Messner"],

  places: [
    {
      id: "bressanone",
      date: { year: 1944, month: 9, day: 17 },
      headline: "Bressanone",
      place: "Alto Adige, Italia",
      lat: 46.7156, lon: 11.6566, zoom: 11,
      group: "Vita",
      text: "Reinhold Messner nasce a Bressanone il 17 settembre 1944, secondo di nove figli di Josef Messner, maestro di scuola, e di Maria Troi.",
      wiki: ["en:Brixen", "it:Bressanone"]
    },
    {
      id: "funes",
      date: { year: 1949 },
      headline: "Val di Funes e le Odle",
      place: "Sass Rigais, 3.025 m",
      lat: 46.6118, lon: 11.7538, zoom: 12,
      group: "Roccia e Dolomiti",
      text: "Cresce a San Pietro di Funes, ai piedi delle Odle. A cinque anni sale con il padre il Sass Rigais, la cima più alta del gruppo. Su queste pareti impara ad arrampicare insieme al fratello Günther.",
      wiki: ["en:Villnöß", "it:Funes_(Italia)", "en:Geisler_group"]
    },
    {
      id: "sassdlacrusc",
      date: { year: 1968 },
      headline: "Pilastro di mezzo del Sass dla Crusc",
      place: "Val Badia, 2.907 m",
      lat: 46.6086, lon: 11.9472, zoom: 12,
      group: "Roccia e Dolomiti",
      text: "Con Günther apre la via del Pilastro di mezzo sulla parete ovest del Sass dla Crusc, allora considerata una delle salite in libera più difficili delle Dolomiti.",
      wiki: ["en:Heiligkreuzkofel", "it:Sass_dla_Crusc", "en:Alta_Badia"]
    },
    {
      id: "civetta",
      date: { year: 1969 },
      headline: "Civetta, via Philipp-Flamm",
      place: "Dolomiti agordine, 3.220 m",
      lat: 46.3802, lon: 12.0533, zoom: 12,
      group: "Roccia e Dolomiti",
      text: "Sale in solitaria la via Philipp-Flamm sulla parete nord-ovest della Civetta, prima ripetizione solitaria di uno dei grandi itinerari dolomitici. È l'anno in cui il suo nome si impone nell'alpinismo europeo.",
      wiki: ["en:Civetta", "it:Monte_Civetta"]
    },
    {
      id: "nangaparbat1970",
      date: { year: 1970, month: 6, day: 27 },
      headline: "Nanga Parbat · 8.126 m",
      place: "Parete Rupal, Pakistan",
      lat: 35.2375, lon: 74.5892, zoom: 9,
      group: "Gli Ottomila",
      text: "Il primo ottomila. Reinhold e Günther raggiungono la vetta dalla parete Rupal, la più alta parete di montagna del mondo. Nella discesa dal versante Diamir Günther scompare sotto una valanga. Reinhold torna a valle dopo giorni di stenti e perde sette dita dei piedi per congelamento.",
      wiki: ["en:Nanga_Parbat", "en:Rupal_Face"]
    },
    {
      id: "manaslu",
      date: { year: 1972, month: 4, day: 25 },
      headline: "Manaslu · 8.163 m",
      place: "Nepal",
      lat: 28.5497, lon: 84.5597, zoom: 9,
      group: "Gli Ottomila",
      text: "Secondo ottomila, raggiunto da solo per una via nuova sulla parete sud. Durante una tempesta muoiono due compagni della spedizione tirolese, Franz Jäger e Andi Schlick.",
      wiki: ["en:Manaslu"]
    },
    {
      id: "gasherbrum1-1975",
      date: { year: 1975, month: 8, day: 10 },
      headline: "Gasherbrum I (Hidden Peak) · 8.080 m",
      place: "Karakorum, Pakistan",
      lat: 35.7244, lon: 76.6964, zoom: 9,
      group: "Gli Ottomila",
      text: "Con Peter Habeler sale il Gasherbrum I in stile alpino: due uomini, nessuna corda fissa, nessun campo preparato. È la prima volta su un ottomila, e cambia il modo di affrontare le grandi montagne.",
      wiki: ["en:Gasherbrum_I"]
    },
    {
      id: "everest1978",
      date: { year: 1978, month: 5, day: 8 },
      headline: "Everest senza ossigeno · 8.849 m",
      place: "Versante nepalese",
      lat: 27.9881, lon: 86.9250, zoom: 9,
      group: "Gli Ottomila",
      text: "L'8 maggio 1978 Messner e Habeler arrivano in vetta all'Everest senza bombole di ossigeno. Molti medici ritenevano che a quella quota un uomo non potesse sopravvivere senza ossigeno supplementare.",
      wiki: ["en:Mount_Everest"]
    },
    {
      id: "nangaparbat1978",
      date: { year: 1978, month: 8, day: 9 },
      headline: "Nanga Parbat in solitaria",
      place: "Parete Diamir, Pakistan",
      lat: 35.2600, lon: 74.5600, zoom: 10,
      group: "Gli Ottomila",
      text: "Pochi mesi dopo l'Everest torna sul Nanga Parbat e lo sale completamente da solo dalla parete Diamir, dal campo base alla vetta. È la prima salita solitaria integrale di un ottomila.",
      wiki: ["en:Nanga_Parbat"]
    },
    {
      id: "k2",
      date: { year: 1979, month: 7, day: 12 },
      headline: "K2 · 8.611 m",
      place: "Karakorum, Pakistan",
      lat: 35.8808, lon: 76.5155, zoom: 9,
      group: "Gli Ottomila",
      text: "Con Michl Dacher raggiunge la vetta del K2 lungo lo Sperone degli Abruzzi, senza ossigeno e con una piccola spedizione.",
      wiki: ["en:K2"]
    },
    {
      id: "everest1980",
      date: { year: 1980, month: 8, day: 20 },
      headline: "Everest da solo",
      place: "Versante tibetano",
      lat: 28.1400, lon: 86.8500, zoom: 9,
      group: "Gli Ottomila",
      text: "Sale l'Everest da solo e senza ossigeno dal versante nord, in Tibet, durante il monsone. Nessuno lo aveva mai fatto prima.",
      wiki: ["en:Rongbuk_Glacier", "en:Mount_Everest"]
    },
    {
      id: "shishapangma",
      date: { year: 1981, month: 5, day: 28 },
      headline: "Shisha Pangma · 8.027 m",
      place: "Tibet",
      lat: 28.3525, lon: 85.7797, zoom: 9,
      group: "Gli Ottomila",
      text: "Con Friedl Mutschlechner sale lo Shisha Pangma, l'unico ottomila interamente in territorio cinese.",
      wiki: ["en:Shishapangma"]
    },
    {
      id: "kangchenjunga",
      date: { year: 1982, month: 5, day: 6 },
      headline: "Kangchenjunga · 8.586 m",
      place: "Confine Nepal-India",
      lat: 27.7025, lon: 88.1475, zoom: 9,
      group: "Gli Ottomila",
      text: "Prima delle tre vette del 1982. La sale con Friedl Mutschlechner e Ang Dorje per una via nuova sulla parete nord.",
      wiki: ["en:Kangchenjunga"]
    },
    {
      id: "gasherbrum2-broadpeak",
      date: { year: 1982, month: 7, day: 24 },
      headline: "Gasherbrum II e Broad Peak",
      place: "8.035 m e 8.051 m · Karakorum",
      lat: 35.7580, lon: 76.6530, zoom: 9,
      group: "Gli Ottomila",
      text: "In meno di dieci giorni sale il Gasherbrum II (24 luglio) e il Broad Peak (2 agosto) con i pakistani Nazir Sabir e Sher Khan. Il 1982 è il primo anno in cui un alpinista sale tre ottomila nella stessa stagione.",
      wiki: ["en:Broad_Peak", "en:Gasherbrum_II"]
    },
    {
      id: "chooyu",
      date: { year: 1983, month: 5, day: 5 },
      headline: "Cho Oyu · 8.188 m",
      place: "Confine Nepal-Tibet",
      lat: 28.0942, lon: 86.6608, zoom: 9,
      group: "Gli Ottomila",
      text: "Dopo un tentativo invernale fallito, sale il Cho Oyu con Hans Kammerlander e Michl Dacher. Con Kammerlander nasce la cordata delle ultime grandi salite.",
      wiki: ["en:Cho_Oyu"]
    },
    {
      id: "gasherbrum-traverse",
      date: { year: 1984, month: 6 },
      headline: "Traversata dei due Gasherbrum",
      place: "Karakorum, Pakistan",
      lat: 35.7400, lon: 76.6800, zoom: 10,
      group: "Gli Ottomila",
      text: "Con Hans Kammerlander concatena Gasherbrum II e Gasherbrum I senza tornare al campo base: due ottomila in un'unica salita, in stile alpino.",
      wiki: ["en:Gasherbrum", "en:Gasherbrum_I"]
    },
    {
      id: "annapurna",
      date: { year: 1985, month: 4, day: 24 },
      headline: "Annapurna · 8.091 m",
      place: "Nepal",
      lat: 28.5961, lon: 83.8203, zoom: 9,
      group: "Gli Ottomila",
      text: "Con Kammerlander apre una via nuova sulla parete nord-ovest dell'Annapurna.",
      wiki: ["en:Annapurna_Massif", "en:Annapurna_I"]
    },
    {
      id: "dhaulagiri",
      date: { year: 1985, month: 5, day: 15 },
      headline: "Dhaulagiri · 8.167 m",
      place: "Nepal",
      lat: 28.6967, lon: 83.4875, zoom: 9,
      group: "Gli Ottomila",
      text: "Tre settimane dopo l'Annapurna sale con Kammerlander il Dhaulagiri, al quarto tentativo nella sua carriera.",
      wiki: ["en:Dhaulagiri"]
    },
    {
      id: "makalu",
      date: { year: 1986, month: 9, day: 26 },
      headline: "Makalu · 8.485 m",
      place: "Confine Nepal-Tibet",
      lat: 27.8897, lon: 87.0889, zoom: 9,
      group: "Gli Ottomila",
      text: "Dopo diversi tentativi falliti raggiunge la vetta del Makalu con Hans Kammerlander e Friedl Mutschlechner. Manca un'ultima montagna.",
      wiki: ["en:Makalu"]
    },
    {
      id: "lhotse",
      date: { year: 1986, month: 10, day: 16 },
      headline: "Lhotse · 8.516 m · il quattordicesimo",
      place: "Confine Nepal-Tibet",
      lat: 27.9617, lon: 86.9333, zoom: 10,
      group: "Gli Ottomila",
      text: "Il 16 ottobre 1986, con Kammerlander, sale il Lhotse. È il primo uomo ad aver salito tutti i quattordici ottomila, tutti senza ossigeno supplementare. Il progetto era durato sedici anni.",
      wiki: ["en:Lhotse"]
    },
    {
      id: "juval",
      date: { year: 1983 },
      headline: "Castel Juval",
      place: "Val Venosta, Alto Adige",
      lat: 46.6447, lon: 10.9980, zoom: 13,
      group: "Vita",
      text: "Nel 1983 acquista e restaura Castel Juval, sopra Naturno, che diventa la sua residenza estiva. Oggi una parte del castello è il museo MMM Juval, dedicato al mito della montagna e alle montagne sacre.",
      wiki: ["en:Juval_Castle", "it:Castel_Juval", "en:Messner_Mountain_Museum"]
    },
    {
      id: "antartide",
      date: { year: 1989, month: 11, day: 13 },
      headline: "Traversata dell'Antartide",
      place: "Circa 2.800 km a piedi",
      lat: -80.0, lon: 0.0, zoom: 3,
      group: "Grandi traversate",
      text: "Con Arved Fuchs attraversa l'Antartide a piedi passando per il Polo Sud, trainando le slitte e usando vele quando il vento lo permette. La traversata dura 92 giorni e termina nel febbraio 1990.",
      wiki: ["en:Antarctic_Plateau", "en:Antarctica"]
    },
    {
      id: "groenlandia",
      date: { year: 1993 },
      headline: "Traversata della Groenlandia",
      place: "Calotta glaciale groenlandese",
      lat: 72.0, lon: -40.0, zoom: 3,
      group: "Grandi traversate",
      text: "Con il fratello Hubert percorre in diagonale la calotta glaciale della Groenlandia, circa 2.200 chilometri sul ghiaccio.",
      wiki: ["en:Greenland_ice_sheet", "en:Greenland"]
    },
    {
      id: "strasburgo",
      date: { year: 1999 },
      headline: "Parlamento europeo",
      place: "Strasburgo",
      lat: 48.5975, lon: 7.7686, zoom: 12,
      group: "Vita",
      text: "Dal 1999 al 2004 è deputato al Parlamento europeo, eletto in Italia nelle liste dei Verdi. Si occupa soprattutto di montagna e ambiente.",
      wiki: ["en:Louise_Weiss_building", "en:Strasbourg"]
    },
    {
      id: "monterite",
      date: { year: 2002 },
      headline: "MMM Dolomites, Monte Rite",
      place: "Cadore, 2.181 m",
      lat: 46.4030, lon: 12.2700, zoom: 12,
      group: "Musei",
      text: "In un forte della Prima guerra mondiale sulla cima del Monte Rite apre il museo dedicato alla roccia e alla storia dell'alpinismo dolomitico. È chiamato anche «il museo nelle nuvole».",
      wiki: ["en:Monte_Rite", "it:Monte_Rite", "en:Messner_Mountain_Museum"]
    },
    {
      id: "ortles",
      date: { year: 2004 },
      headline: "MMM Ortles, Solda",
      place: "Ortles, 3.905 m",
      lat: 46.5160, lon: 10.5950, zoom: 12,
      group: "Musei",
      text: "A Solda, ai piedi dell'Ortles, apre un museo in gran parte sotterraneo dedicato al ghiaccio e al mondo dei ghiacciai.",
      wiki: ["en:Ortler", "it:Ortles"]
    },
    {
      id: "gobi",
      date: { year: 2004 },
      headline: "Traversata del Gobi",
      place: "Mongolia",
      lat: 43.5, lon: 104.0, zoom: 4,
      group: "Grandi traversate",
      text: "A sessant'anni attraversa da solo il deserto del Gobi, circa 2.000 chilometri a piedi.",
      wiki: ["en:Gobi_Desert"]
    },
    {
      id: "gunther2005",
      date: { year: 2005 },
      headline: "Ritorno al Nanga Parbat",
      place: "Ghiacciaio Diamir, Pakistan",
      lat: 35.2900, lon: 74.5500, zoom: 10,
      group: "Vita",
      text: "Nel 2005 sul ghiacciaio Diamir vengono ritrovati i resti di Günther, sul versante dove Reinhold aveva sempre detto che il fratello era morto. Reinhold li fa cremare ai piedi della montagna.",
      wiki: ["en:Nanga_Parbat"]
    },
    {
      id: "firmian",
      date: { year: 2006 },
      headline: "MMM Firmian, Castel Firmiano",
      place: "Bolzano",
      lat: 46.4870, lon: 11.3010, zoom: 13,
      group: "Musei",
      text: "Nel castello medievale di Firmiano, alle porte di Bolzano, apre il centro del Messner Mountain Museum, dedicato al rapporto tra l'uomo e la montagna.",
      wiki: ["en:Sigmundskron_Castle", "it:Castel_Firmiano", "en:Messner_Mountain_Museum"]
    },
    {
      id: "ripa",
      date: { year: 2011 },
      headline: "MMM Ripa, Castel Brunico",
      place: "Brunico, Val Pusteria",
      lat: 46.7975, lon: 11.9360, zoom: 13,
      group: "Musei",
      text: "Nel castello di Brunico il museo dedicato ai popoli di montagna di tutto il mondo: Asia, Africa, Sud America ed Europa.",
      wiki: ["en:Bruneck_Castle", "it:Castello_di_Brunico", "en:Bruneck"]
    },
    {
      id: "corones",
      date: { year: 2015 },
      headline: "MMM Corones, Plan de Corones",
      place: "2.275 m",
      lat: 46.7370, lon: 11.9580, zoom: 13,
      group: "Musei",
      text: "Sulla cima del Plan de Corones apre l'ultimo museo, progettato da Zaha Hadid e scavato nella montagna. È dedicato all'alpinismo tradizionale e guarda verso Ortles, Odle, Marmolada e Zillertal.",
      wiki: ["en:Kronplatz", "it:Plan_de_Corones", "en:Messner_Mountain_Museum"]
    }
  ]
};
