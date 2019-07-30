use strict';

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

function getMaxLessThanK(n, k) {

    var max = 0;

    for (var b = n; b > 0; b--) {
        for (var a = b - 1; a > 0; a--){
            //console.log('a:' + a + 'b:' + b)
            if ((a & b) > max && (a & b) < k) {
                max = a & b;
            }
        }
    }
    //console.log(max)
    return max;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}