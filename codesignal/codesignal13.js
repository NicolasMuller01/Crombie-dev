function solution(inputString) {
    if (!inputString.includes("(") || !inputString.includes(")")) {
        return inputString;
    }
    var valorFinal = reverseP(inputString);
    while (valorFinal.includes("(")) {
        valorFinal = reverseP(valorFinal);
    }
    return valorFinal;
}
function reverseP(inputString) {
    var arrAux = [];
    var aux = "";
    var counter = 0;
    var arrDeleteFirstCloseParenthesis = [];
    var openLastParenthesis = inputString.lastIndexOf("(");
    while (counter < inputString.length) {
        if (counter === openLastParenthesis) {
            arrAux.push(aux);
            aux = '';
            counter++;
            while (inputString[counter] !== ')') {
                aux += inputString[counter];
                counter++;
            }
            aux = aux.split('').reverse().join('');
            arrAux.push(aux);
            aux = '';
        }
        aux += inputString[counter];
        counter++;
    }
    arrDeleteFirstCloseParenthesis = aux.split('');
    arrDeleteFirstCloseParenthesis.shift();
    aux = arrDeleteFirstCloseParenthesis.join('');
    arrAux.push(aux);
    console.log(aux);
    aux = aux.split('').reverse().join('');
    console.log(arrAux.join(''));
    return arrAux.join('');
}
console.log(solution("asdsada"));
