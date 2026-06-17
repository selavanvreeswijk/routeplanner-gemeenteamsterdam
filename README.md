# TAVI — Toegankelijkheidsviewer Amsterdam

**TAVI** is een webapplicatie gebouwd voor de Gemeente Amsterdam. De app laat mensen met een lichamelijke beperking zien welke locaties in Amsterdam toegankelijk zijn voor hen, gebaseerd op hun persoonlijke profiel.

Gemaakt door: **Sela, Luna Jay, Louise en Xavannah** — jaar 3 Web Development.

---

## De opdracht

De Gemeente Amsterdam wil Amsterdam toegankelijker maken voor mensen met een lichamelijke beperking. Veel mensen weten niet of een locatie geschikt is voor hen voordat ze er naartoe gaan — denk aan ontbrekende oprijplaten, drempels of te weinig zitgelegenheid.

De gemeente heeft een grote dataset beschikbaar over de fysieke toegankelijkheid van locaties in de stad (de CBA-dataset). Het doel was om deze data te vertalen naar een overzichtelijke tool waarmee mensen per locatie kunnen zien of die bij hun situatie past.

> **Let op:** het project is begonnen als routeplanner, maar de scope is veranderd. TAVI is geen routeplanner meer — het is een toegankelijkheidsviewer waarmee gebruikers locaties in Amsterdam kunnen bekijken en filteren op basis van hun persoonlijke profiel.

### Doelstelling

Een online platform waar gebruikers een persoonlijk toegankelijkheidsprofiel instellen en daarna per locatie kunnen zien hoe toegankelijk die voor hen is — in een lijst én op een kaart.

**Subdoelen:**
- Gemeentelijke toegankelijkheidsdata bruikbaar maken voor eindgebruikers
- Gebruikers in staat stellen een persoonlijk profiel in te stellen (eenmalig, via onboarding)
- Voldoen aan WCAG 2.1 niveau AA
- De huisstijl van Gemeente Amsterdam volgen

---

## Functionaliteiten

| # | Functionaliteit | Beschrijving |
|---|-----------------|--------------|
| 1 | Onboarding | Nieuwe gebruikers stellen hun naam en toegankelijkheidsprofiel in |
| 2 | Locatielijst | Alle locaties uit de CBA-dataset worden getoond als kaarten |
| 3 | Profiel-sortering | Locaties worden automatisch gesorteerd op hoe goed ze passen bij het ingestelde profiel |
| 4 | Zoekfunctie | Zoeken op naam of adres, met markering van de zoekterm in de resultaten |
| 5 | Filteren | Filteren op hoofdcategorie en subcategorie (bijv. sport, cultuur) |
| 6 | Kaartweergave | Interactieve kaart met markers voor alle locaties via Leaflet.js |
| 7 | Adres zoeken op kaart | Adres intypen en de kaart beweegt naar die locatie via de Nominatim API |
| 8 | Huidige locatie | De kaart toont automatisch de huidige locatie van de gebruiker |
| 9 | Detailpagina | Elke locatie heeft een eigen pagina met alle toegankelijkheidskenmerken |
| 10 | Profiel opslaan | Het profiel wordt opgeslagen in localStorage zodat het bewaard blijft |

---

## Technische opbouw

### Tech stack

| Technologie | Gebruik |
|-------------|---------|
| [Astro](https://astro.build) | Framework voor de statische paginageneratie |
| [Leaflet.js](https://leafletjs.com) | Interactieve kaart |
| [OpenStreetMap](https://www.openstreetmap.org) | Kaartachtergrond (tilelaag) |
| [Nominatim API](https://nominatim.openstreetmap.org) | Geocoding (adres → coördinaten) |
| CBA-dataset Gemeente Amsterdam | Toegankelijkheidsdata van locaties in Amsterdam |
| localStorage | Profiel en naam van de gebruiker bewaren |

### Bestandsstructuur

```
src/
├── pages/
│   ├── index.astro           # Hoofdpagina met lijst, kaart en filters
│   ├── onboarding.astro      # Profielinstelling voor nieuwe gebruikers
│   └── locaties/
│       └── [slug].astro      # Dynamische detailpagina per locatie
├── components/
│   ├── Header.astro          # Navigatie en zoekbalk
│   ├── Map.astro             # Leaflet-kaart met markers en zoekfunctie
│   ├── LocationCard.astro    # Locatiekaarten met sortering op profiel
│   ├── LocationFilter.astro  # Hoofd- en subfilter dropdowns
│   ├── ChosenCateg.astro     # Geselecteerde categorieën tonen
│   ├── Display.astro         # Toggle lijst/kaartweergave
│   ├── Filter.astro          # Filtercheckboxes per toegankelijkheidscategorie
│   ├── StatusBadge.astro     # Badge voor toegankelijkheidsstatus
│   ├── DistanceDot.astro     # Visuele indicator
│   └── Searchfield.astro     # Zoekveldinput
scripts/
├── filtering.js              # Telt Ja/Nee/Onbekend per filtergroep per locatie
├── filtergroups.js           # Koppelt JSON-veldnamen aan toegankelijkheidscategorieën
├── locations.js              # Locatie-hulpfuncties
└── script.js                 # Overige scripts
```

### Toegankelijkheidscategorieën

De CBA-dataset bevat informatie over de volgende categorieën, die ook als filterprofiel gebruikt worden:

- Rolstoel
- Rollator
- Slechtziend
- Slechthorend
- Prikkelgevoelig
- Neurodiversiteit

---

## Installatie & gebruik

### Vereisten
- Node.js (versie 18 of hoger)
- npm

### Starten

```bash
# Installeer dependencies
npm install

# Start de ontwikkelserver
npm run dev
```

De app is dan bereikbaar op `http://localhost:4321`.

```bash
# Bouwen voor productie
npm run build

# Preview van de gebouwde versie
npm run preview
```

---

## Rolverdeling

| Naam | Rol |
|------|-----|
| Louise | Frontend Developer |
| Luna Jay | Backend Developer |
| Sela | Backend Developer |
| Xavannah | UI/UX Designer |

---

## Bronnen

| Bron | Gebruik |
|------|---------|
| [Astro documentatie](https://docs.astro.build) | Framework, `getStaticPaths`, component-stijlen |
| [Leaflet.js documentatie](https://leafletjs.com/reference.html) | Kaart, markers, `L.divIcon`, `L.tileLayer` |
| [OpenStreetMap](https://www.openstreetmap.org/copyright) | Kaartachtergrond |
| [Nominatim API](https://nominatim.openstreetmap.org) | Geocoding voor het zoeken van adressen |
| CBA-dataset Gemeente Amsterdam | Toegankelijkheidsdata |
| [MDN Web Docs](https://developer.mozilla.org) | JavaScript API's (`localStorage`, `dispatchEvent`, `Set`, `RegExp`, `CSS.escape`) |
| [WCAG 2.1](https://www.w3.org/TR/WCAG21/) | Toegankelijkheidsrichtlijnen |
| [Huisstijl Gemeente Amsterdam](https://www.amsterdam.nl/stijlweb/) | Kleuren, typografie, visuele identiteit |
| Claude (Anthropic) | Hulp bij complexe JavaScript-functies (zie annotaties in broncode) |
