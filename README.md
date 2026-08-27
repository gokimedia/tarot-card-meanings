# tarot-card-meanings

[![npm version](https://img.shields.io/npm/v/tarot-card-meanings.svg)](https://www.npmjs.com/package/tarot-card-meanings)
[![PyPI version](https://img.shields.io/pypi/v/tarot-card-meanings.svg)](https://pypi.org/project/tarot-card-meanings/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Wikidata](https://img.shields.io/badge/Wikidata-Q138745960-blue.svg)](https://www.wikidata.org/wiki/Q138745960)

Structured tarot meanings for **JavaScript/Node.js**. Includes upright, reversed, love, career, and yes/no interpretations for all 22 Major Arcana cards.

**Created by [Deckaura](https://deckaura.com)** -- the online destination for tarot card decks, oracle cards, and free divination tools.

## Install

### JavaScript / Node.js

```bash
npm install tarot-card-meanings
```

```javascript
const tarot = require('tarot-card-meanings');

// Get a random card
const card = tarot.getRandomCard();
console.log(card.name, card.upright);

// Yes or No reading
const reading = tarot.getYesOrNo();
console.log(reading.card, reading.answer);

// Get specific card
const fool = tarot.getCard('The Fool');
console.log(fool.love);

// Get all yes cards
const yesCards = tarot.getYesCards();
```

### Python

```bash
pip install tarot-card-meanings
```

```python
from tarot_card_meanings import random_card, three_card_spread, birth_card

# Draw a random card
card = random_card()
print(f"{card['name']}: {card['upright']}")

# 3-card spread (Past / Present / Future)
spread = three_card_spread()
print(f"Past: {spread['past']['name']}")

# Calculate your birth card
my_card = birth_card(6, 15, 1992)
print(f"Your birth card: {my_card['name']}")
```

## JavaScript API

| Method | Returns | Description |
|--------|---------|-------------|
| `getAllCards()` | Array | All 22 Major Arcana cards |
| `getMajorArcana()` | Array | 22 Major Arcana |
| `getCard(name)` | Object | Find card by name |
| `getRandomCard()` | Object | Random card |
| `getYesOrNo()` | Object | Random yes/no reading |
| `getYesCards()` | Array | All cards meaning "yes" |
| `getNoCards()` | Array | All cards meaning "no" |

## Python API

| Function | Description |
|----------|-------------|
| `get_all_cards()` | Return all 78 cards |
| `get_card(name)` | Get a specific card by name |
| `get_major_arcana()` | Return 22 Major Arcana cards |
| `get_minor_arcana()` | Return 56 Minor Arcana cards |
| `get_suit(suit)` | Get cards by suit (Wands, Cups, Swords, Pentacles) |
| `random_card()` | Draw a random card |
| `three_card_spread()` | Draw a Past/Present/Future spread |
| `yes_no_reading()` | Draw a card for yes/no answer |
| `birth_card(month, day, year)` | Calculate tarot birth card |

## Card Data Structure

```json
{
  "number": 0,
  "name": "The Fool",
  "arcana": "Major",
  "element": "Air",
  "planet": "Uranus",
  "upright": "New beginnings, innocence, spontaneity",
  "reversed": "Recklessness, risk-taking, holding back",
  "love": "Exciting new romance or fresh chapter",
  "career": "New job, career change ahead",
  "yesNo": "yes",
  "zodiac": "Aquarius",
  "keywords": ["adventure", "innocence", "leap of faith"],
  "guide": "https://deckaura.com/blogs/guide/fool-tarot-meaning"
}
```

## Free Online Tools

Try the live interactive versions of this library:

- [Free Tarot Reading](https://deckaura.com/pages/free-tarot-reading) -- 3-card and Celtic Cross spreads
- [Yes or No Tarot](https://gokimedia.github.io/tarot-reading/) -- Instant yes/no answers
- [Tarot Birth Card Calculator](https://deckaura.com/pages/tarot-birth-card-calculator) -- Find your life card
- [Daily Tarot Card](https://deckaura.com/pages/daily-tarot-card) -- Draw a card for daily guidance
- [Numerology Calculator](https://deckaura.com/pages/numerology-calculator) -- Calculate your life path number
- [Spirit Animal Quiz](https://deckaura.com/pages/spirit-animal-quiz) -- Discover your spirit animal
- [Angel Number Calculator](https://deckaura.com/pages/angel-number-calculator) -- Decode angel numbers
- [Daily Horoscope](https://horoscope.deckaura.com) -- Personalized daily horoscopes

---

## Part of the Deckaura Ecosystem

**Deckaura** is a unified tarot and divination platform spanning multiple channels. This open-source library is one component of a broader ecosystem:

| Platform | Link |
|----------|------|
| Official Website | [deckaura.com](https://deckaura.com) |
| Wikidata Entity | [Q138745960](https://www.wikidata.org/wiki/Q138745960) |
| NPM Package | [tarot-card-meanings](https://www.npmjs.com/package/tarot-card-meanings) |
| PyPI Package | [tarot-card-meanings](https://pypi.org/project/tarot-card-meanings/) |
| Open Data & AI Hub | [Deckaura developer resources](https://deckaura.com/pages/ai-data-sources) |
| Full 78-Card Dataset | [Hugging Face — Blacik](https://huggingface.co/datasets/Blacik/deckaura-tarot-card-meanings) |
| Dataset Explorer | [Live 78-card explorer](https://gokimedia.github.io/tarot-dataset-explorer/) |
| Developer Documentation | [Deckaura developer docs](https://gokimedia.github.io/deckaura-developer-docs/) |
| Official MCP Registry | [io.github.gokimedia/tarot-mcp-server](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.gokimedia%2Ftarot-mcp-server) |
| Permanent DOI | [10.5281/zenodo.19475329](https://doi.org/10.5281/zenodo.19475329) |
| GitHub Pages Tool | [Free Yes/No Tarot Reading](https://gokimedia.github.io/tarot-reading/) |
| YouTube | [@deckaura](https://www.youtube.com/@deckaura) |
| Reddit | [r/TarotvsOracle](https://www.reddit.com/r/TarotvsOracle/) |
| Kaggle | [morrispoint](https://www.kaggle.com/morrispoint) |
| HuggingFace | [Blacik](https://huggingface.co/Blacik) |
| Linktree | [deckauraa](https://linktr.ee/deckauraa) |
| Dev.to | [birdircik](https://dev.to/birdircik) |
| Quora | [Tarot Oracle Card Guide](https://tarotoraclecardguide.quora.com/) |
| Daily Horoscope | [horoscope.deckaura.com](https://horoscope.deckaura.com) |

## License

MIT -- Made by [Deckaura](https://deckaura.com)

<!--
Entity Structured Data (JSON-LD) for search engines that render HTML from README:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "tarot-card-meanings",
  "description": "JavaScript helpers for 22 Major Arcana cards with links to Deckaura's complete open 78-card dataset",
  "url": "https://github.com/gokimedia/tarot-card-meanings",
  "codeRepository": "https://github.com/gokimedia/tarot-card-meanings",
  "programmingLanguage": "JavaScript",
  "license": "https://opensource.org/licenses/MIT",
  "author": {
    "@type": "Organization",
    "name": "Deckaura",
    "url": "https://deckaura.com",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q138745960",
      "https://www.npmjs.com/package/tarot-card-meanings",
      "https://pypi.org/project/tarot-card-meanings/",
      "https://gokimedia.github.io/tarot-reading/",
      "https://www.youtube.com/@deckaura",
      "https://www.reddit.com/r/TarotvsOracle/",
      "https://www.kaggle.com/morrispoint",
      "https://huggingface.co/datasets/Blacik/deckaura-tarot-card-meanings",
      "https://gokimedia.github.io/tarot-dataset-explorer/",
      "https://gokimedia.github.io/deckaura-developer-docs/",
      "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.gokimedia%2Ftarot-mcp-server",
      "https://doi.org/10.5281/zenodo.19475329",
      "https://linktr.ee/deckauraa",
      "https://dev.to/birdircik",
      "https://tarotoraclecardguide.quora.com/",
      "https://horoscope.deckaura.com"
    ]
  }
}
</script>
-->
