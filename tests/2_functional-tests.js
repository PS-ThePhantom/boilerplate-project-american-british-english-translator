const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('POST /api/translate', () => {
        test('Translation with text and locale fields, from american to british', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: 'Mangoes are my favorite fruit.', locale: 'american-to-british'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
                    assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
                    done();
                });
        });

        test('Translation with text and locale fields, from british to american', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: 'Paracetamol takes up to an hour to work.', locale: 'british-to-american'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.text, 'Paracetamol takes up to an hour to work.');
                    assert.equal(res.body.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
                    done();
                });
        });

        test('Translation with text and invalid locale field', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: 'Mangoes are my favorite fruit.', locale: 'nordic-to-british'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Invalid value for locale field');
                    done();
                });
        });

        test('ranslation with missing text field', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({locale: 'american-to-british'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Required field(s) missing');
                    done();
                });
        });

        test('ranslation with missing locale field', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: 'Mangoes are my favorite fruit.'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Required field(s) missing');
                    done();
                });
        });

        test('Translation with empty text', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: '', locale: 'american-to-british'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'No text to translate');
                    done();
                });
        });

        test('Translation with text that needs no tranlation', (done) => {
            chai.request(server)
                .post('/api/translate')
                .send({text: 'A good president will always be remembered.', locale: 'american-to-british'})
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.text, 'A good president will always be remembered.');
                    assert.equal(res.body.translation, 'Everything looks good to me!');
                    done();
                });
        });
    });
});
