function solution(inputString) {
    return reverseOneP(inputString);
}
console.log(solution("foo(bar(baz))blim"));
function reverseOneP(inputString) {
    var firstParenthesisIndex = inputString.indexOf('(');
    var secondParenthesisIndex = inputString.indexOf(')');
    var arrBeforeFirstParenthesis = '';
    var arrBeforeSecondParenthesis = '';
    var valueToReverse = [];
    var aux = "";
    for (var i = 0; i < firstParenthesisIndex; i++) {
        arrBeforeFirstParenthesis += inputString.charAt(i);
    }
    console.log(arrBeforeFirstParenthesis);
    for (var i = secondParenthesisIndex + 1; i < inputString.length; i++) {
        arrBeforeSecondParenthesis += inputString.charAt(i);
    }
    console.log(arrBeforeSecondParenthesis);
    for (var i = firstParenthesisIndex + 1; i < secondParenthesisIndex; i++) {
        valueToReverse.push(inputString[i]);
    }
    console.log(valueToReverse.join(''));
    aux = valueToReverse.reverse().join('');
    console.log(aux);
    aux = arrBeforeFirstParenthesis + aux + arrBeforeSecondParenthesis;
    return aux;
}

//incompleto