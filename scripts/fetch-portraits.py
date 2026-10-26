#!/usr/bin/env python3
"""Download freely licensed portraits from Wikimedia into img/presidentes/."""
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "img" / "presidentes"
OUT.mkdir(parents=True, exist_ok=True)
UA = "presidentes-brasil/1.0 (static educational site; portrait mirror of Wikimedia Commons)"

PAGES = {
    "deodoro": "Deodoro_da_Fonseca",
    "floriano": "Floriano_Peixoto",
    "prudente": "Prudente_de_Morais",
    "campos-sales": "Campos_Sales",
    "rodrigues-alves": "Rodrigues_Alves",
    "afonso-pena": "Afonso_Pena",
    "nilo": "Nilo_Peçanha",
    "hermes": "Hermes_da_Fonseca",
    "venceslau": "Venceslau_Brás",
    "delfim": "Delfim_Moreira",
    "epitacio": "Epitácio_Pessoa",
    "bernardes": "Artur_Bernardes",
    "washington": "Washington_Luís",
    "vargas": "Getúlio_Vargas",
    "linhares": "José_Linhares",
    "dutra": "Eurico_Gaspar_Dutra",
    "cafe-filho": "Café_Filho",
    "carlos-luz": "Carlos_Luz",
    "nereu": "Nereu_Ramos",
    "jk": "Juscelino_Kubitschek",
    "janio": "Jânio_Quadros",
    "mazzilli": "Ranieri_Mazzilli",
    "jango": "João_Goulart",
    "castelo": "Humberto_de_Alencar_Castelo_Branco",
    "costa-e-silva": "Artur_da_Costa_e_Silva",
    "medici": "Emílio_Garrastazu_Médici",
    "geisel": "Ernesto_Geisel",
    "figueiredo": "João_Figueiredo",
    "sarney": "José_Sarney",
    "collor": "Fernando_Collor",
    "itamar": "Itamar_Franco",
    "fhc": "Fernando_Henrique_Cardoso",
    "lula": "Luiz_Inácio_Lula_da_Silva",
    "dilma": "Dilma_Rousseff",
    "temer": "Michel_Temer",
    "bolsonaro": "Jair_Bolsonaro",
}
ALIAS = {
    "vargas-1": "vargas",
    "vargas-2": "vargas",
    "mazzilli-1961": "mazzilli",
    "mazzilli-1964": "mazzilli",
    "fhc-1": "fhc",
    "fhc-2": "fhc",
    "lula-1": "lula",
    "lula-2": "lula",
    "lula-3": "lula",
}


def get(url):
    time.sleep(0.35)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as resp:
        return json.load(resp)


def free_license(meta):
    short = (meta.get("LicenseShortName") or {}).get("value") or ""
    usage = (meta.get("UsageTerms") or {}).get("value") or ""
    blob = (short + " " + usage).lower()
    if any(bad in blob for bad in ("fair use", "non-free", "nonfree", "all rights reserved", "copyrighted")):
        return None
    if any(ok in blob for ok in ("public domain", "cc0", "cc by", "cc-by", "cc by-sa", "cc-by-sa", "pd-")):
        return short or usage
    return None


def commons_meta(filename):
    title = "File:" + filename
    url = (
        "https://commons.wikimedia.org/w/api.php?action=query&titles="
        + urllib.parse.quote(title)
        + "&prop=imageinfo&iiprop=url|extmetadata&format=json"
    )
    data = get(url)
    pages = data["query"]["pages"]
    page = next(iter(pages.values()))
    info = (page.get("imageinfo") or [None])[0]
    if not info:
        return None
    meta = info.get("extmetadata") or {}
    license_name = free_license(meta)
    if not license_name:
        return None
    artist = re.sub("<[^>]+>", "", (meta.get("Artist") or {}).get("value") or "Wikimedia Commons")
    artist = re.sub(r"\s+", " ", artist).strip()[:180]
    return {
        "license": license_name,
        "licenseUrl": (meta.get("LicenseUrl") or {}).get("value") or "https://commons.wikimedia.org/wiki/Special:MyLanguage/Commons:Licensing",
        "author": artist or "Wikimedia Commons",
        "filePage": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(title.replace(" ", "_")),
        "thumb": info["url"],
    }


def page_images(title):
    url = (
        "https://pt.wikipedia.org/w/api.php?action=query&titles="
        + urllib.parse.quote(title)
        + "&prop=images|pageimages&imlimit=12&piprop=name&format=json"
    )
    data = get(url)
    page = next(iter(data["query"]["pages"].values()))
    names = []
    main = (page.get("pageimage") or "")
    if main:
        names.append(main)
    for img in page.get("images") or []:
        name = img["title"].replace("File:", "")
        if name not in names and re.search(r"\.(jpg|jpeg|png|webp)$", name, re.I):
            names.append(name)
    return names[:8]


FALLBACK = {
    "castelo": ["Humberto_de_Alencar_Castelo_Branco_1967.jpg", "Castelo_Branco_e_Costa_e_Silva.jpg", "Humberto_Castelo_Branco.jpg"],
    "costa-e-silva": ["Artur_da_Costa_e_Silva.jpg", "Costa_e_Silva_1967.jpg", "President_Artur_da_Costa_e_Silva.jpg"],
    "geisel": ["Ernesto_Geisel.jpg", "Geisel_(1974).jpg"],
    "figueiredo": ["João_Figueiredo.jpg", "Figueiredo_(1979).jpg"],
    "sarney": ["Jose_Sarney.jpg", "José_Sarney.jpg"],
    "collor": ["Fernando_Collor_1992.jpg", "Fernando_Collor.jpg"],
    "itamar": ["Itamar_Franco.jpg", "Itamar_Franco_1992.jpg"],
    "fhc": ["Fernando_Henrique_Cardoso.jpg", "FHC_1999.jpg"],
    "lula": ["Luiz_Inácio_Lula_da_Silva.jpg", "Lula_(2007).jpg"],
    "dilma": ["Dilma_Rousseff.jpg", "Dilma_Rousseff_2011.jpg"],
    "temer": ["Michel_Temer.jpg", "Michel_Temer_(foto_oficial).jpg"],
    "bolsonaro": ["Jair_Bolsonaro.jpg", "Jair_Bolsonaro_in_2019.jpg"],
}


def main():
    credits = {}
    for key, title in PAGES.items():
        dest = OUT / f"{key}.jpg"
        saved = None
        known = {
            "deodoro": "Deodoro_da_Fonseca_(1889).jpg",
            "floriano": "Floriano_Peixoto_(1891).jpg",
            "prudente": "Prudentedemorais.jpg",
            "campos-sales": "Campos_Sales.jpg",
            "rodrigues-alves": "Rodrigues_Alves_3.jpg",
            "afonso-pena": "Afonso_Pena.jpg",
            "nilo": "Nilo_Peçanha_02.jpg",
            "hermes": "Hermes_da_Fonseca_(1910).jpg",
            "venceslau": "Venceslau_Brás.jpg",
            "delfim": "Delfim_Moreira_(1918).jpg",
            "epitacio": "Epitacio_Pessoa_(1919).jpg",
            "bernardes": "Artur_Bernardes_(1922).jpg",
            "washington": "Washington_Luís_(foto).jpg",
            "vargas": "Getulio_Vargas_(1930).jpg",
            "linhares": "José_Linhares_TSE.jpg",
            "dutra": "GASPARDUTRA.jpg",
            "cafe-filho": "Café_Filho.jpg",
            "carlos-luz": "CarlosLuz.jpg",
            "nereu": "Presidente_Nereu_Ramos.jpg",
            "jk": "Juscelino_Kubitschek_in_1956.jpg",
            "janio": "Jânio_Quadros,_presidente_do_Brasil_em_1961_(foto_oficial).jpg",
            "mazzilli": "Ranieri_Mazzilli_(1961).jpg",
            "jango": "João_“Jango”_Goulart,_Presidente_do_Brasil,_foto_oficial,_1961.jpg",
            "medici": "Emílio_Garrastazu_Médici,_presidente_da_República._(cropped_and_contrast_enhanced).tif",
        }
        if dest.exists() and dest.stat().st_size > 2000 and key in known:
            names = [known[key]]
        else:
            names = page_images(title) + FALLBACK.get(key, [])
        for name in names:
            try:
                meta = commons_meta(name)
            except Exception as exc:
                print("meta fail", key, name, exc)
                continue
            if not meta:
                print("skip license", key, name)
                continue
            dest = OUT / f"{key}.jpg"
            if dest.exists() and dest.stat().st_size > 2000:
                saved = {
                    "src": f"img/presidentes/{key}.jpg",
                    "author": meta["author"],
                    "license": meta["license"],
                    "licenseUrl": meta["licenseUrl"],
                    "filePage": meta["filePage"],
                }
                print("credit", key, name, meta["license"])
                break
            try:
                thumb = (
                    "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/"
                    + urllib.parse.quote(name)
                    + "&width=640"
                )
                req = urllib.request.Request(thumb, headers={"User-Agent": UA})
                with urllib.request.urlopen(req, timeout=40) as resp:
                    blob = resp.read()
                if len(blob) < 2000:
                    raise RuntimeError("tiny file")
                dest.write_bytes(blob)
            except Exception as exc:
                print("download fail", key, exc)
                continue
            saved = {
                "src": f"img/presidentes/{key}.jpg",
                "author": meta["author"],
                "license": meta["license"],
                "licenseUrl": meta["licenseUrl"],
                "filePage": meta["filePage"],
            }
            print("ok", key, name, meta["license"])
            break
        if not saved:
            print("NO PORTRAIT", key)
        else:
            credits[key] = saved

    lines = ["var PHOTOS = {"]
    # direct keys and aliases
    emitted = {}
    for pid, key in list(ALIAS.items()):
        if key in credits:
            emitted[pid] = credits[key]
    for key, meta in credits.items():
        emitted.setdefault(key, meta)
    for pid in sorted(emitted):
        meta = emitted[pid]
        author = meta["author"].replace("\\", "\\\\").replace('"', '\\"')
        lines.append(
            '  "%s": { src: "%s", author: "%s", license: "%s", licenseUrl: "%s", filePage: "%s" },'
            % (pid, meta["src"], author, meta["license"].replace('"', "'"), meta["licenseUrl"], meta["filePage"])
        )
    lines.append("};")
    (ROOT / "js" / "photos.js").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("photos", len(credits), "files;", len(emitted), "ids")


if __name__ == "__main__":
    main()
