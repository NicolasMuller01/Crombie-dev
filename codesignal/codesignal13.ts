function solution(inputString: string): string {

    return reverseOneP(inputString)
    
  }

  console.log(solution("foo(bar(baz))blim"));
  
  function reverseOneP(inputString: string): string {

    const firstParenthesisIndex = inputString.indexOf('('); 
    const secondParenthesisIndex = inputString.indexOf(')'); 

    let arrBeforeFirstParenthesis: string  = ''
    let arrBeforeSecondParenthesis: string = ''
    const valueToReverse: string[] = []
    let aux = ""

    for (let i = 0; i < firstParenthesisIndex; i++) {
        arrBeforeFirstParenthesis += inputString.charAt(i);
    }

    console.log(arrBeforeFirstParenthesis)


    for (let i = secondParenthesisIndex+1 ; i < inputString.length; i++) {
        arrBeforeSecondParenthesis += inputString.charAt(i);
    }

    console.log(arrBeforeSecondParenthesis)

    for (let i = firstParenthesisIndex+1 ; i < secondParenthesisIndex; i++) {
        valueToReverse.push(inputString[i])
    }

    console.log(valueToReverse.join(''));

    aux = valueToReverse.reverse().join('')

    console.log(aux);
    

    aux = arrBeforeFirstParenthesis + aux + arrBeforeSecondParenthesis

    return aux
    
  }