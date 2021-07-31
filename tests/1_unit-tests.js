const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Correctly read a whole number input', () => {
        assert.equal(6, convertHandler.getNum('6gal'), "The function can correctly read a whole number input");
    });
    test('Correctly read a decimal number input', () => {
        assert.equal(6.2, convertHandler.getNum('6.2gal'), "The function can correctly read a decimal number input");
    });
    test('Correctly read a fractional number input', () => {
        assert.equal(2, convertHandler.getNum('4/2gal'), "The function can correctly read a fractional number input");
    });
    test('Correctly read a fractional number input', () => {
        assert.equal(2.2, convertHandler.getNum('4.4/2gal'), "The function can correctly read a fractional number input");
    });
    test('Correctly return an error on a double fraction', () => {
        assert.equal(2.2, convertHandler.getNum('4.4/2gal'), "The function can correctly return an error");
    });

});
