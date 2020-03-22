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
    '': '',
    ' ': '',
};

function decode(expr) {
    let l = "";
    let m = "";

    len= expr.length / 10;
    
    for (i = 0; i != len; i = i + 1) {
        
        for (u = i * 10; u != i * 10 + 10; u = u + 2) {
            if (expr.substr(u, 2) == "10") {
                l = l + ".";
                }
            if (expr.substr(u, 2) == "11") {
                    l = l + "-";
                }
            if (expr.substr(u, 2) == "**") {
                    l = l + "*";
                }    
        }
        if (l == "*****") {
            m = m + " ";
        }
        else {
            m = m + MORSE_TABLE[l]; 
        }
        l = "";  
    }
    return m; 
}

// function decode(expr) {
//     let arr = [];
//     expr = expr.split("").reverse();
//     let len = expr.length; 

//     for (i = 0; i < len; i += 2) {
//         arr[i/2] = expr[i] + expr[i+1]
//     }

//     let arr2 = arr.map(function(item) {
//         switch (item) {
//             case "01": 
//                 return "."
//             case "11":
//                 return "-"
//             case "00":
//                 return ""
//             case "**":
//                 return " "
//         }
//     } 
//     )

//     arr2 = arr2.reverse().join(" ").split("  ");

//     let arr3 = arr2.map(function(item) {
//         return (item != ' ') ? item.replace(/\s/g, '') : ' '
//     }   
//     )

//     let arr4 = arr3.map (function(item) {
//             return MORSE_TABLE[item]
//     }   
//     )

//     return arr4;
// }

module.exports = {
    decode
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))