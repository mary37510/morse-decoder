const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********' : ' '
};

function decode(expr) {
    //разобьём строку на массив строк, по 10 знаков каждая, удаляем нули
    let bigArr = expr.split('');
    let tenElementsStringArray = [];
    let decodedArr = [];
    //console.log(bigArr.length);
    for (let i = 0; i < bigArr.length; i += 10) {
        let newElement = bigArr.slice(i, i + 10).join('');
        tenElementsStringArray.push(newElement
            .replace(/^0*/, '')
            .replace(/10/g, '.')
            .replace(/11/g, '-'));
    }
    //tenElementsStringArray.forEach(e => console.log(e));
    for (let a = 0; a<tenElementsStringArray.length; a++) {
        let character = tenElementsStringArray[a];
        decodedArr.push(MORSE_TABLE[character]);
    }
    return decodedArr.join('');
}

 module.exports = {
    decode
};  

