#!/usr/bin/env node

//get random adverb from ./adverbs and a random noun from ./nouns 
//adverbs and nouns are js arrays 
//console log and return then im the form ${adverb}_${noun}
const adverbs = require('./lists/adverbs');
const nouns = require('./lists/nouns');
const getRandomWord = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const adverb = getRandomWord(adverbs);
const  noun = getRandomWord(nouns);
const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    return randomNumber;
}

const combineWords = (adverb, noun) => {
    let result = `${adverb}-${noun}-${randomNumber()}`;
    return result;
}
const args = process.argv.slice(2);
if(args[0] === '-v'){
    const totalPossibleOutcomes = (adverbs, nouns, length) => {
        let total = adverbs.length * nouns.length * length;
        return total;
    }
    //add commas to large number
    const addCommas = (number) => {
        let numberString = number.toString();
        let numberArray = numberString.split('');
        let commaArray = [];
        let commaIndex = numberArray.length - 3;
        while (commaIndex > 0) {
            
            commaArray.unshift(numberArray.slice(commaIndex, commaIndex + 3).join(''));
            commaArray.unshift(',');
            commaIndex -= 3;
        }
        commaArray.unshift(numberArray.slice(0, 3).join(''));
        return commaArray.join('');
    }
    console.log(
        "Random Name Generated! Project Name: ", combineWords(adverb,noun),"\n",
        "Total Adverbs: ",adverbs.length,"\n",
        "Total Nouns: ", nouns.length,"\n",
        "Total possible outcomes: ", addCommas(totalPossibleOutcomes(adverbs, nouns, 8999))
        );
}

module.exports =function generateName(adverb, noun) {
    return combineWords(adverb, noun);
}