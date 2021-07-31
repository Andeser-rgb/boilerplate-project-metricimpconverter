'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

    let convertHandler = new ConvertHandler();
    app.route("/api/convert")
        .get((req, res) => {
            console.log(req.query.input);
            let input = req.query.input;
            let initNum = convertHandler.getNum(input);
            console.log(initNum);
            let initUnit = convertHandler.getUnit(input);
            if(!chekUnit(initUnit) && (initNum === undefined || initNum === null)) res.send('invalid number and unit');
            if(!checkUnit(initUnit)) res.send('invalid unit');
            if(initNum === undefined || initNum === null) res.send('invalid number');
            let returnNum = convertHandler.convert(initNum, initUnit);
            let returnUnit = convertHandler.getReturnUnit(initUnit);
            let initUnitS = convertHandler.spellOutUnit(initUnit);
            let returnUnitS = convertHandler.spellOutUnit(returnUnit);

            let string = convertHandler.getString(initNum, initUnitS, returnNum, returnUnitS);

            res.send({
                initNum: initNum,
                initUnit: initUnit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                string: string
            });
        });

};

function checkUnit(unit){
    let result = false;
    switch(unit.toLowerCase()){
        case "gal":
            result = true;
            break;
        case "lbs":
            result = true;
            break;
        case "mi":
            result = true;
            break;
        case "l":
            result = true;
            break;
        case "kg":
            result = true;
            break;
        case "km":
            result = true;
            break;
        default:
        result = false;
            break;
        }
    return result;
}
