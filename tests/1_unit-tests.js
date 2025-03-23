const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    let translator = new Translator();

    test('Translate Mangoes are my favorite fruit. to British English', () => {
        const sentence = 'Mangoes are my favorite fruit.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Mangoes are my favourite fruit.');
    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
        const sentence = 'I ate yogurt for breakfast.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'I ate yoghurt for breakfast.');
    });

    test("Translate We had a party at my friend's condo. to British English", () => {
        const sentence = "We had a party at my friend's condo.";
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, "We had a party at my friend's flat.");
    });

    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        const sentence = 'Can you toss this in the trashcan for me?';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Can you toss this in the bin for me?');
    });

    test('Translate The parking lot was full. to British English', () => {
        const sentence = 'The parking lot was full.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'The car park was full.');
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        const sentence = 'Like a high tech Rube Goldberg machine.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Like a high tech Heath Robinson device.');
    });

    test('Translate To play hooky means to skip class or work. to British English', () => {
        const sentence = 'To play hooky means to skip class or work.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'To bunk off means to skip class or work.');
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        const sentence = 'No Mr. Bond, I expect you to die.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'No Mr Bond, I expect you to die.');
    });

    test('Translate Dr. Grosh will see you now. to British English', () => {
        const sentence = 'Dr. Grosh will see you now.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Dr Grosh will see you now.');
    });

    test('Translate Lunch is at 12:15 today. to British English', () => {
        const sentence = 'Lunch is at 12:15 today.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Lunch is at 12.15 today.');
    });

    test('Translate We watched the footie match for a while. to American English', () => {
        const sentence = 'We watched the footie match for a while.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'We watched the soccer match for a while.');
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        const sentence = 'Paracetamol takes up to an hour to work.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Tylenol takes up to an hour to work.');
    });

    test('Translate First, caramelise the onions. to American English', () => {
        const sentence = 'First, caramelise the onions.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'First, caramelize the onions.');
    });

    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        const sentence = 'I spent the bank holiday at the funfair.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'I spent the public holiday at the carnival.');
    });

    test('Translate I had a bicky then went to the chippy. to American English', () => {
        const sentence = 'I had a bicky then went to the chippy.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'I had a cookie then went to the fish-and-chip shop.');
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        const sentence = "I've just got bits and bobs in my bum bag.";
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, "I've just got odds and ends in my fanny pack.");
    });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        const sentence = 'The car boot sale at Boxted Airfield was called off.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'The swap meet at Boxted Airfield was called off.');
    });

    test('Translate Have you met Mrs Kalyani? to American English', () => {
        const sentence = 'Have you met Mrs Kalyani?';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Have you met Mrs. Kalyani?');
    });

    test("Translate Prof Joyner of King's College, London. to American English", () => {
        const sentence = "Prof Joyner of King's College, London.";
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, "Prof. Joyner of King's College, London.");
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        const sentence = 'Tea time is usually around 4 or 4.30.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.translatedSentence, 'Tea time is usually around 4 or 4:30.');
    });

    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        const sentence = 'Mangoes are my favorite fruit.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.highlightedSentence, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test('Highlight translation in I ate yogurt for breakfast.', () => {
        const sentence = 'I ate yogurt for breakfast.';
        const translation = translator.translateToBritish(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.highlightedSentence, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });

    test('Highlight translation in We watched the footie match for a while.', () => {
        const sentence = 'We watched the footie match for a while.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.highlightedSentence, 'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        const sentence = 'Paracetamol takes up to an hour to work.';
        const translation = translator.translateToAmerican(sentence);

        assert.notEqual(translation.translatedSentence, translation.highlightedSentence);
        assert.equal(translation.highlightedSentence, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    });
});
