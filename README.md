# 📖 Slovíčka — PWA pro výuku angličtiny

Mobilní aplikace pro trénování anglických slovíček. Funguje offline, data ukládá
lokálně do zařízení pomocí IndexedDB (Dexie.js).

## 📁 Soubory projektu

```
index.html       ← hlavní aplikace (vše v jednom souboru)
sw.js            ← Service Worker (offline podpora)
manifest.json    ← PWA manifest (instalace na plochu)
icon-192.png     ← ikona aplikace (192×192 px)
icon-512.png     ← ikona aplikace (512×512 px)
```

## 🚀 Nasazení na GitHub Pages

1. Vytvoř nový GitHub repozitář (např. `slovicka`)
2. Nahraj všechny soubory do větve `main`
3. Jdi do **Settings → Pages → Source** a zvol větev `main`
4. Aplikace bude dostupná na `https://TVOJE-JMÉNO.github.io/slovicka/`

> ⚠️ Service Worker vyžaduje HTTPS — GitHub Pages ho poskytuje automaticky.

## 📱 Instalace na Android

1. Otevři aplikaci v Chrome na telefonu
2. Klikni na ⋮ menu → **„Přidat na plochu"**
3. Aplikace se nainstaluje jako ikona a funguje offline

## ✨ Funkce

- ➕ **Přidat** — formulář pro nová slovíčka (EN → CS)
- 📋 **Seznam** — přehled všech slovíček, vyhledávání, smazání
- 🎯 **Zkoušení** — náhodné slovíčko, zobrazení překladu, skóre + série
- 🔊 **Výslovnost** — Web Speech API (TTS) pro anglická slova
- 📴 **Offline** — plně funkční bez internetu po první návštěvě

## 🔧 Technologie

- **Dexie.js** — IndexedDB wrapper pro lokální databázi
- **Service Worker** — cache strategie pro offline provoz
- **Web Speech API** — výslovnost slov
- **PWA Manifest** — instalace na plochu

## 💡 Rozšíření do budoucna

- Přidat pole **Lekce / Kategorie** pro organizaci slovíček
- **Export/Import** slovíček (JSON nebo CSV)
- **Spaced repetition** — chytřejší algoritmus opakování (jako Anki)
- Statistiky a grafy pokroku
