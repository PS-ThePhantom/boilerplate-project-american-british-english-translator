const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translateToBritish(sentence) {
        const americanOnlyWords = Object.entries(americanOnly);
        const americanToBritishSpellingWords = Object.entries(americanToBritishSpelling);
        const americanToBritishTitlesWords = Object.entries(americanToBritishTitles);
        let highlitedSentence = sentence;

        let americanTimes = sentence.match(/[0-2]?[0-9]:[0-5][0-9]/);
        if (americanTimes) {
            for (let i = 0; i < americanTimes.length; i++) {
                let britishTime = americanTimes[i].replace(":", ".");
                sentence = sentence.replace(americanTimes[i], britishTime);
                highlitedSentence = highlitedSentence.replace(americanTimes[i], `<span class="highlight">${britishTime}</span>`);
            }
        }

        for (let [american, british] of americanOnlyWords) {
            let regex = new RegExp(`\\b${american}\\b`, "gi");
            sentence = sentence.replace(regex, british);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${british}</span>`);
        }

        for (let [american, british] of americanToBritishSpellingWords) {
            let regex = new RegExp(`\\b${american}\\b`, "gi");
            sentence = sentence.replace(regex, british);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${british}</span>`);
        }

        for (let [american, british] of americanToBritishTitlesWords) {
            let regex = new RegExp(`\\b${american.replace('.','')}\\.`, "gi");
            british = british.charAt(0).toUpperCase() + british.slice(1);
            sentence = sentence.replace(regex, british);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${british}</span>`);
        }

        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        highlitedSentence = highlitedSentence.charAt(0).toUpperCase() + highlitedSentence.slice(1);

        return { translatedSentence: sentence, highlitedSentence: highlitedSentence };
    }

    translateToAmerican(sentence) {
        const britishOnlyWords = Object.entries(britishOnly);
        const americanToBritishSpellingWords = Object.entries(americanToBritishSpelling);
        const americanToBritishTitlesWords = Object.entries(americanToBritishTitles);
        let highlitedSentence = sentence;

        let americanTimes = sentence.match(/[0-2]?[0-9].[0-5][0-9]/);
        if (americanTimes) {
            for (let i = 0; i < americanTimes.length; i++) {
                let britishTime = americanTimes[i].replace(".", ":");
                sentence = sentence.replace(americanTimes[i], britishTime);
                highlitedSentence = highlitedSentence.replace(americanTimes[i], `<span class="highlight">${britishTime}</span>`);
            }
        }

        for (let [british, american] of britishOnlyWords) {
            let regex = new RegExp(`\\b(?<!-)${british}\\b`, "gi");
            sentence = sentence.replace(regex, american);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${american}</span>`);
        }

        for (let [american, british] of americanToBritishSpellingWords) {
            let regex = new RegExp(`\\b${british}\\b`, "gi");
            sentence = sentence.replace(regex, american);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${american}</span>`);
        }

        for (let [american, british] of americanToBritishTitlesWords) {
            let regex = new RegExp(`\\b${british}\\b`, "gi");
            american = american.charAt(0).toUpperCase() + american.slice(1);
            sentence = sentence.replace(regex, american);
            highlitedSentence = highlitedSentence.replace(regex, `<span class="highlight">${american}</span>`);
        }

        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        highlitedSentence = highlitedSentence.charAt(0).toUpperCase() + highlitedSentence.slice(1);

        return { translatedSentence: sentence, highlitedSentence: highlitedSentence };
    }
};


module.exports = Translator;