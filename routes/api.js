'use strict';

const { text } = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;

      if (text === null || text === undefined || locale === null || locale === undefined)
        return res.json({ error: 'Required field(s) missing' });
      else  if (text === '')
        return res.json({ error: 'No text to translate' });
      else if (locale !== 'american-to-british' && locale !== 'british-to-american')
        return res.json({ error: 'Invalid value for locale field' });

      let translation;
      if(locale === 'american-to-british')
        translation = translator.translateToBritish(text);
      else
        translation = translator.translateToAmerican(text);

      if(text === translation.translatedSentence)
        return res.json({text: text, translation: "Everything looks good to me!"});
      
      return res.json({text: text, translation: translation.highlightedSentence});
    });
};
