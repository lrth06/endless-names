# random-names

## Description

This is a random name generator written in javascript. It generates random names based on a list of adverbs and nouns, then tacks on a 4-digit number to the end. This takes the guesswork out of naming your projects, and the amount of possibilities make name collisions much less likely

> Version 0.0.1 - Initial release: 700,009,051,130 possible names

## Usage

### cli usage

```bash
git clone https://github.com/lrth/random-names.git
cd random-names
yarn start -v outputs a random name
```

expected output:

```bash
$ node index.js -v
Random Name Generated! Project Name:  acceptably-humorous-7598
 Total Adverbs:  710
 Total Nouns:  1097
 Total possible outcomes:  700,009,051,130
Done in 0.10s.
```

### in your project

```javascript
import randomNames from 'random-names';
...
const name = randomNames();
```

---

> This project was made with the assistance of [github copilot](https://copilot.github.com)
