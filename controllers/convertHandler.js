function ConvertHandler() {

    this.getNum = function(input) {
        let result;
        let slashes;

        slashes = input.match(/\//g);
        if (slashes === null) {
            result = input.match(/[\d.]+/);
            if (result === null) return 1;
            result = parseFloat(result.join(''));
        }

        else if (slashes.length > 1) return undefined;
        else if (slashes.length === 1) {
            let numbers = input.match(/[\d.]+/g);
            let num1 = parseFloat(numbers[0]);
            let num2 = parseFloat(numbers[1]);
            result = num1 / num2;
        }
        if (typeof result !== 'number') result = undefined;
        return result;

    };

    this.getUnit = function(input) {
        let units = ['gal', 'L', 'km', 'mi', 'kg', 'lbs'];
        let result = undefined;
        result = input.match(/[A-Za-z]/g).join('');
        result = result.toLowerCase();
        if (result === 'l') result = result.toUpperCase();
        if(!units.includes(result)) return undefined;
        return result;
    };

    this.getReturnUnit = function(initUnit) {
        let result;
        switch (initUnit.toLowerCase()) {
            case "gal":
                result = "L";
                break;
            case "lbs":
                result = "kg";
                break;
            case "mi":
                result = "km";
                break;
            case "l":
                result = "gal";
                break;
            case "kg":
                result = "lbs";
                break;
            case "km":
                result = "mi";
                break;
            default:
                break;
        }
        return result;
    };

    this.spellOutUnit = function(unit) {
        let result;
        const spelled = {
            "gal": "gallons",
            "lbs": "pounds",
            "mi": "miles",
            "l": "liters",
            "kg": "kilograms",
            "km": "kilometers"
        };
        return spelled[unit.toLowerCase()];
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        switch (initUnit.toLowerCase()) {
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

        return parseFloat(result.toFixed(5));
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        let result;
        result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
        return result;
    };

}

module.exports = ConvertHandler;
