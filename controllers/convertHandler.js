function ConvertHandler() {

    this.getNum = function(input) {
        let result;
        result = parseInt(input.match(/[\d.]+/).join(""));
        return result;
    };

    this.getUnit = function(input) {
        let result;
        result = input.match(/[A-Za-z]/g).join('');
        return result;
    };

    this.getReturnUnit = function(initUnit) {
        let result;
        switch(initUnit.toLowerCase()){
        case "gal":
            result = "L";
            break;
        case "lbs":
            result = "Kg";
            break;
        case "mi":
            result = "Km";
            break;
        case "l":
            result = "gal";
            break;
        case "kg":
            result = "lbs";
            break;
        case "km":
            result = "lbs";
            break;
        default:
            break;
        }
        return result;
    };

    this.spellOutUnit = function(unit) {
        let result;
        switch(unit.toLowerCase()){
        case "gal":
            result = "gallons";
            break;
        case "lbs":
            result = "pounds";
            break;
        case "mi":
            result = "miles";
            break;
        case "l":
            result = "liters";
            break;
        case "kg":
            result = "kilograms";
            break;
        case "km":
            result = "kilometers";
            break;
        default:
            break;
        }
        return result;
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        switch(initUnit.toLowerCase()){
        case "gal":
            result = initNum * galToL;
            break;
        case "lbs":
            result = initNum * lbsToKg;
            break;
        case "mi":
            result = initNum * miToKm;
            break;
        case "l":
            result = initNum / galToL;
            break;
        case "kg":
            result = initNum / lbsToKg;
            break;
        case "km":
            result = initNum / miToKm;
            break;
        default:
            break;
        }

        return result;
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        let result;
        result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
        return result;
    };

}

module.exports = ConvertHandler;
