# tarot-card-meanings

Complete 78 tarot card meanings database for JavaScript/Node.js. Includes upright, reversed, love, career, and yes or no interpretations for all Major and Minor Arcana cards.

## Install

```bash
npm install tarot-card-meanings
```

## Usage

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

## API

| Method | Returns | Description |
|--------|---------|-------------|
| `getAllCards()` | Array | All 78 cards |
| `getMajorArcana()` | Array | 22 Major Arcana |
| `getCard(name)` | Object | Find card by name |
| `getRandomCard()` | Object | Random card |
| `getYesOrNo()` | Object | Random yes/no reading |
| `getYesCards()` | Array | All cards meaning "yes" |
| `getNoCards()` | Array | All cards meaning "no" |

## Card Object

```javascript
{
  number: 0,
  name: "The Fool",
  element: "Air",
  planet: "Uranus",
  upright: "New beginnings, innocence, spontaneity",
  reversed: "Recklessness, risk-taking, holding back",
  love: "Exciting new romance or fresh chapter",
  career: "New job, career change ahead",
  yesNo: "yes",
  keywords: ["adventure", "innocence", "leap of faith"]
}
```

## Learn More

- [All 78 Tarot Card Meanings](https://deckaura.com/blogs/guide/tarot-card-meanings) - Complete guide
- [Yes or No Tarot Guide](https://deckaura.com/blogs/guide/yes-or-no-tarot) - Free reading guide
- [Shop Tarot Decks](https://deckaura.com/collections/tarot-decks) - Premium decks
- [Oracle Cards](https://deckaura.com/collections/oracle-cards) - 30+ unique decks

## License

MIT - Made by [Deckaura](https://deckaura.com)
