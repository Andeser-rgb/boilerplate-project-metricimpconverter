const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Correctly read a whole number input', () => {
        assert.equal(6, convertHandler.getNum('6gal'), "The function can correctly read a whole number input");
    });

});
