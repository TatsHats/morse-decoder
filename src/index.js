const MORSE_TABLE = {
    '.-': 'a',      '-...': 'b',     '-.-.': 'c',     '-..': 'd', 
    '.': 'e',       '..-.': 'f',     '--.': 'g',      '....': 'h',  
    '..': 'i',      '.---': 'j',     '-.-': 'k',      '.-..': 'l',  
    '--': 'm',      '-.': 'n',       '---': 'o',      '.--.': 'p',
    '--.-': 'q',    '.-.': 'r',      '...': 's',      '-': 't', 
    '..-': 'u',     '...-': 'v',     '.--': 'w',      '-..-': 'x',
    '-.--': 'y',    '--..': 'z',     '.----': '1',    '..---': '2',  
    '...--': '3',   '....-': '4',    '.....': '5',    '-....': '6',   
    '--...': '7',   '---..': '8',    '----.': '9',    '-----': '0',
};

function decode(expr) {
// ---------- 1 часть - деление строки по 10 символов ----------
    const minSize = 10;
    let arrayStrings = [];
    while (expr.length > 0) {
        let partString = expr.slice(0, minSize);
        arrayStrings.push(partString);
        expr = expr.slice(minSize);
    }

// ---------- 2 часть - преобразуем: '.' = 10 и '-' = 11 ----------
// ---------- пробел = ********** и строка меньше 10 симв = 0 слева 
// ---------- если длина строки < 10, то добавляем 0 слева

    let result = arrayStrings.map(part => {
        let morseCode = '';
        if (part === '**********') {
            return ' ';
        }

        for (let i = 0; i < part.length; i += 2) {
            let symbol = part.slice(i, i + 2);
            if (symbol === '10') {
                morseCode += '.';
            } else if (symbol === '11') {
                morseCode += '-';
            }
        }
        return MORSE_TABLE[morseCode];
    });
    return result.join('');
}

module.exports = {
    decode
};

