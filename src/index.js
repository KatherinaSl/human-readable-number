const { re } = require("semver");

module.exports = function toReadable (number) {

    if (number === 0) {
        return 'zero';
    }

    let result = ''

    let stringNumber = number.toString()

    for ( let i=0; i < stringNumber.length; i ++) {
        if (stringNumber.length === 3 && i === 0) {
            //logic for hundreds
            result = singleNumberToWord(stringNumber[i]) + ' hundred';

        } else if ((stringNumber.length === 2 && i === 0) || (stringNumber.length === 3 && i === 1)) {
            //logic for tenth
            if (stringNumber[i] !== '0' && result !== '' ) {
                result = result + ' '
            }

            if (stringNumber[i] === '1') {
                //logic
                return  result + teenNumberToWord(stringNumber[i+1])

            } else {
                result = result + decNumberToWord(stringNumber[i]);
            }

        } else {
            if (stringNumber[i] !== '0' && result !== '' ) {
                result = result + ' '
            }

            result = result + singleNumberToWord(stringNumber[i]);
        }

    }

    return result

}


function singleNumberToWord (charOfStr) {
    if (charOfStr === '0') {
        return '';
    }

    if (charOfStr === '1') {
        return 'one';
    }
    if (charOfStr === '2') {
        return 'two';
    }
    if (charOfStr === '3') {
        return 'three';
    }
    if (charOfStr === '4') {
        return 'four';
    }
    if (charOfStr === '5') {
        return 'five';
    }
    if (charOfStr === '6') {
        return 'six';
    }
    if (charOfStr === '7') {
        return 'seven';
    }
    if (charOfStr === '8') {
        return 'eight';
    }
    if (charOfStr === '9') {
        return 'nine';
    }

}

function decNumberToWord (charOfStr) {
    if (charOfStr === '0') {
        return '';
    }

    if (charOfStr === '1') {
        return 'ten';
    }
    if (charOfStr === '2') {
        return 'twenty';
    }
    if (charOfStr === '3') {
        return 'thirty';
    }
    if (charOfStr === '4') {
        return 'forty';
    }
    if (charOfStr === '5') {
        return 'fifty';
    }
    if (charOfStr === '6') {
        return 'sixty';
    }
    if (charOfStr === '7') {
        return 'seventy';
    }
    if (charOfStr === '8') {
        return 'eighty';
    }
    if (charOfStr === '9') {
        return 'ninety';
    }

}

function teenNumberToWord (charOfStr) {
    
    if (charOfStr === '0') {
        return 'ten'
    }
    if (charOfStr === '1') {
        return 'eleven'
    }
    if (charOfStr === '2') {
        return 'twelve';
    }
    if (charOfStr === '3') {
        return 'thirteen';
    }
    if (charOfStr === '4') {
        return 'fourteen';
    }
    if (charOfStr === '5') {
        return 'fifteen';
    }
    if (charOfStr === '6') {
        return 'sixteen';
    }
    if (charOfStr === '7') {
        return 'seventeen';
    }
    if (charOfStr === '8') {
        return 'eighteen';
    }
    if (charOfStr === '9') {
        return 'nineteen';
    }
}