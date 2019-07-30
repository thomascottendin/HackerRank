'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    var vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelsList = []
    var consonantsList = []

    for (var i = 0; i < s.length; i++) {

        for (var j = 0; j < vowels.length; j++) {
            if (s[i] == vowels[j]) {
                //console.log("vowel");
                vowelsList.push(s[i]);
                break;
            }
            else {
                if (j == vowels.length - 1 ) {
                    consonantsList.push(s[i]);
                }
            }
        }      
    }

    for (var i = 0; i < vowelsList.length; i++){
        console.log(vowelsList[i]);
    }
    for (var i = 0; i < consonantsList.length; i++) {
        console.log(consonantsList[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}