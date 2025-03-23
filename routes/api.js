'use strict';

const { text } = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body);
    });
};
