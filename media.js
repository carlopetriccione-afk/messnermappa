/*
 * Recupero automatico delle foto
 * ------------------------------------------------------------
 * Per ogni tappa interroga l'API REST di Wikipedia e prende
 * l'immagine principale della voce. Usa solo file ospitati su
 * Wikimedia Commons (licenze libere) e ne legge autore e
 * licenza dall'API di Commons, per citarli correttamente.
 * I risultati restano in memoria nel browser per un giorno.
 */
(function () {
  const CACHE_KEY = "messner-media-v1";
  const CACHE_MS = 24 * 60 * 60 * 1000;

  function loadCache() {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
      if (c.t && Date.now() - c.t < CACHE_MS) return c.items || {};
    } catch (e) {}
    return {};
  }
  function saveCache(items) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), items })); } catch (e) {}
  }

  async function fetchJSON(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms || 8000);
    try {
      const r = await fetch(url, { signal: ctrl.signal });
      if (!r.ok) throw new Error(r.status);
      return await r.json();
    } finally {
      clearTimeout(timer);
    }
  }

  function stripHtml(html) {
    const d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  function commonsFileName(url) {
    // Solo file di Commons: le immagini caricate localmente su Wikipedia
    // (es. /wikipedia/en/) sono spesso non libere e vengono scartate.
    const m = url.match(/\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }

  async function commonsCredit(fileName) {
    const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
      "&prop=imageinfo&iiprop=extmetadata&titles=" + encodeURIComponent("File:" + fileName);
    try {
      const d = await fetchJSON(api, 8000);
      const page = Object.values(d.query.pages)[0];
      const meta = page.imageinfo[0].extmetadata;
      return {
        artist: stripHtml(meta.Artist && meta.Artist.value) || "Autore sconosciuto",
        license: (meta.LicenseShortName && meta.LicenseShortName.value) || "licenza su Commons"
      };
    } catch (e) {
      return { artist: "Wikimedia Commons", license: "vedi pagina del file" };
    }
  }

  async function leadImage(spec) {
    const [lang, title] = spec.includes(":") ? spec.split(/:(.+)/) : ["en", spec];
    const d = await fetchJSON(
      "https://" + lang + ".wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title)
    );
    const orig = d.originalimage, thumb = d.thumbnail;
    if (!orig && !thumb) return null;
    const source = (orig || thumb).source;
    if (/\.svg$/i.test(source) || /\.svg\//i.test(source)) return null; // niente mappe o stemmi
    const file = commonsFileName(source);
    if (!file) return null;

    let url = source;
    if (orig && orig.width > 1600 && thumb) url = thumb.source.replace(/\/\d+px-/, "/1280px-");

    const credit = await commonsCredit(file);
    return {
      url,
      filePage: "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file.replace(/ /g, "_")),
      wikiPage: d.content_urls && d.content_urls.desktop ? d.content_urls.desktop.page : null,
      artist: credit.artist,
      license: credit.license
    };
  }

  async function resolveOne(item, cache) {
    if (item.image) return { url: item.image.url, artist: item.image.credit || "", license: "", filePage: item.image.url };
    for (const spec of item.wiki || []) {
      if (cache[spec] !== undefined) {
        if (cache[spec]) return cache[spec];
        continue;
      }
      try {
        const res = await leadImage(spec);
        cache[spec] = res;
        if (res) return res;
      } catch (e) {
        /* voce inesistente o rete assente: prova la successiva */
      }
    }
    return null;
  }

  /** Aggiunge a ogni elemento la proprietà .photo (o null). */
  window.resolvePhotos = async function (items, onProgress) {
    const cache = loadCache();
    let done = 0;
    await Promise.all(items.map(async (it) => {
      it.photo = await resolveOne(it, cache);
      done++;
      if (onProgress) onProgress(done, items.length);
    }));
    saveCache(cache);
    return items;
  };

  /** Didascalia di credito in HTML, con link alla pagina del file su Commons. */
  window.photoCredit = function (p) {
    if (!p) return "";
    const parts = [p.artist, p.license].filter(Boolean).join(" · ");
    return '<a href="' + p.filePage + '" target="_blank" rel="noopener">' + parts + " · Wikimedia Commons</a>";
  };

  const MESI = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
  window.formatDate = function (d) {
    if (!d) return "";
    if (d.day) return d.day + " " + MESI[d.month - 1] + " " + d.year;
    if (d.month) return MESI[d.month - 1] + " " + d.year;
    return String(d.year);
  };
})();
