const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function digitToMorse (digit) {
    if (digit === '10') {
        return '.'
    } else if (digit === '11') {
        return '-'
    }else {
        return digit
    }
}
function decode(expr) {
    return expr.split('**********').map((word) => {
       const lettersArr = word.match(/[\S\s]{1,10}/g);
       
       return lettersArr.map((letter) => {
        const letterWithoutZero = letter.match(/^0*(1[0,1]*)/)[1];
        let lettersTransformToMorse = '';
           for (let i = 0; i < letterWithoutZero.length; i=i+2) {
            lettersTransformToMorse += digitToMorse(letterWithoutZero[i]+letterWithoutZero[i+1])
           }
           return MORSE_TABLE[lettersTransformToMorse];
       }).join('');
    }).join(' ');
}

module.exports = {
    decode
}