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
