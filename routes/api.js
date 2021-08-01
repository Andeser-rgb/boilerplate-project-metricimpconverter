'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

    let convertHandler = new ConvertHandler();
    app.route("/api/convert")
        .get((req, res) => {
            let input = req.query.input;
            let initNum = convertHandler.getNum(input);
            let initUnit = convertHandler.getUnit(input);
            if (initUnit === undefined && initNum === undefined) res.send('invalid number and unit');
            else if (initUnit === undefined) res.send('invalid unit');
            else if (initNum === undefined) res.send('invalid number');
            else {
                let returnNum = convertHandler.convert(initNum, initUnit);
                let returnUnit = convertHandler.getReturnUnit(initUnit);
                let initUnitS = convertHandler.spellOutUnit(initUnit);
                let returnUnitS = convertHandler.spellOutUnit(returnUnit);

                let string = convertHandler.getString(initNum, initUnitS, returnNum, returnUnitS);

                res.send({
                    initNum: initNum,
                    initUnit: initUnit,
                    returnNum: parseFloat(returnNum),
                    returnUnit: returnUnit,
                    string: string
                });
            }
        });

};
