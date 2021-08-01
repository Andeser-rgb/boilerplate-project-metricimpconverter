const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
    suite('Number input', () => {
        test('Correctly read a whole number input', (done) => {
            assert.equal(6, convertHandler.getNum('6gal'), "The function can correctly read a whole number input");
            done();
        });
        test('Correctly read a decimal number input', (done) => {
            assert.equal(6.2, convertHandler.getNum('6.2gal'), "The function can correctly read a decimal number input");
            done();
        });
        test('Correctly read a fractional number input', (done) => {
            assert.equal(2, convertHandler.getNum('4/2gal'), "The function can correctly read a fractional number input");
            done();
        });
        test('Correctly read a fractional number input', (done) => {
            assert.equal(2.2, convertHandler.getNum('4.4/2gal'), "The function can correctly read a fractional number input");
            done();
        });
        test('Correctly return an error on a double fraction', (done) => {
            assert.equal(convertHandler.getNum('4.4/2/3gal'), undefined);
            done();
        });
        test('Correctly dafault to a numerical value of 1', (done) => {
            assert.equal(1, convertHandler.getNum('gal'), "The function can correctly default to a numerical value of 1");
            done();
        });
    });
    suite('Unit input', () => {
        let inputUnits = ['gal', 'L', 'km', 'mi', 'kg', 'lbs'];
        test('Correctly read each valid input', (done) => {
            inputUnits.forEach((d, i) => {
                assert.equal(convertHandler.getUnit(d), d);
            });
            done();
        });
        test('Correctly return an error for an invalid input', (done) => {
            assert.equal(convertHandler.getUnit('Francesco'), undefined);
            done();
        });

    });
    suite('Unit return', () => {
        let inputUnits = ['gal', 'L', 'km', 'mi', 'kg', 'lbs'];
        let returnUnits = ['L', 'gal', 'mi', 'km', 'lbs', 'kg'];
        test('Correctly return the correct return unit', (done) => {
            inputUnits.forEach((d, i) => {
                assert.equal(convertHandler.getReturnUnit(d), returnUnits[i]);
            });
            done();
        });
    });
    suite('Spell return', () => {
        let units = ['gal', 'L', 'km', 'mi', 'kg', 'lbs'];
        let spelled = ['gallons', 'liters', 'kilometers', 'miles', 'kilograms', 'pounds'];
        test('Correctly return the spelled-out string unit', (done) => {
            units.forEach((d, i) => {
                assert.equal(convertHandler.spellOutUnit(d), spelled[i]);
            });
            done();
        });
    });
    suite('Conversions', () => {
        test('Correctly convert gal to L', (done) => {
            assert.approximately(convertHandler.convert(4, "gal"), 15.14164, 0.1);
            done();
        });
        test('Correctly convert L to gal', (done) => {
            assert.approximately(convertHandler.convert(4, "L"), 1.05669, 0.1);
            done();
        });
        test('Correctly convert mi to km', (done) => {
            assert.approximately(convertHandler.convert(4, "mi"), 6.43736, 0.1);
            done();
        });
        test('Correctly convert km to mi', (done) => {
            assert.approximately(convertHandler.convert(4, "km"), 2.48549, 0.1);
            done();
        });
        test('Correctly convert lbs to kg', (done) => {
            assert.approximately(convertHandler.convert(4, "lbs"), 1.81437, 0.1);
            done();
        });
        test('Correctly convert kg to lbs', (done) => {
            assert.approximately(convertHandler.convert(4, "kg"), 8.8185, 0.1);
            done();
        });
    });

});
