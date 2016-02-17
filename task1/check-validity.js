;(function() {
    'use strict';

    let toBeValidated = [
        '79927398718x',
        '79927398719x',
        '79927398712x',
        '79927398713x',
        '79927398714x',
        '79927398715x',
        '79927398716x',
        '79927398717x',
        '79927398710x',
        '79927398711x'
    ];

    // Loop through sample data
    for (let tbv of toBeValidated) {

        let everySecond = false,
            validationArr = tbv.split(""),
            sum = 0,
            xValue,
            validity = "";

        // Loop through string right to left ignoring first char of 'x'
        for (let i = validationArr.length-2;i>-1;i--) {

            // Every second digit to be doubled
            if (everySecond) {
                validationArr[i] = validationArr[i]*2;

                // Sum the individual digits of any doubled value over 9
                if (validationArr[i] > 9) {
                    let bigNum = validationArr[i].toString();
                    validationArr[i] = bigNum[0]*1 + bigNum[1]*1;
                }
                everySecond = false;

            } else {
                //convert all other digits from strings to numbers
                validationArr[i] = validationArr[i]*1;
                everySecond = true;
            }

            // Sum all digits
            sum += validationArr[i];
        }
        // Get value of x by multiplying sum of all digits by 9 and finding the last digit
        xValue = (sum*9) % 10;

        // Find whether string is valid by adding value of x to the sum of all digits
        // and check whether final sum modulo 10 = 0
        sum += xValue;
        validity = sum % 10 === 0 ? "valid" : "invalid";

        // Log results to console in appropriate format
        console.log("The number " + tbv + " is " + validity + ". The value of x is " + xValue);
    }

})();