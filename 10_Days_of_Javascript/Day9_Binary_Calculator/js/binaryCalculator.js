var screen = ''

document.getElementById('btn0').onclick = function() {
                screen += '0'
                document.getElementById('res').innerHTML=screen;
            };  
document.getElementById('btn1').onclick = function() {
                screen += '1'
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnSum').onclick = function() {
                screen += '+'
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnSub').onclick = function() {
                screen += '-'
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnMul').onclick = function() {
                screen += '*'
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnDiv').onclick = function() {
                screen += '/'
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnClr').onclick = function() {
                screen = ''
                document.getElementById('res').innerHTML=screen;
            };
document.getElementById('btnEql').onclick = function() {
                var input = screen.split(/\+|\-|\*|\//);
                var result;
                var operand1 = parseInt(input[0], 2);
                var operand2 = parseInt(input[1], 2);
                var re = /\+|\-|\*|\//; 
    
                switch (screen[re.exec(screen).index]) {
                    
                    case '+':
                        result=operand1+operand2 ;
                        break;
                    case '-':
                        result=operand1-operand2;
                        break;
                    case '*':
                        result=operand1*operand2;
                        break;
                    case '/':
                        result=operand1/operand2;
                    }
    
                document.getElementById('res').innerHTML=result.toString(2);
            };