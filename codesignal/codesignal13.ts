function solution(inputString: string): string {

    if(!inputString.includes("(") || !inputString.includes(")") ){
        return inputString;
    }

    let valorFinal: string = reverseP(inputString)

    while(valorFinal.includes("(")){
            valorFinal = reverseP(valorFinal)
    }

    return valorFinal

}

function reverseP(inputString: string): string {

    let arrAux: string[] = [];

    let aux: string = "";

    let counter = 0;

    let arrDeleteFirstCloseParenthesis: string[] = []

    const openLastParenthesis= inputString.lastIndexOf("(")

    while (counter < inputString.length){
        if (counter === openLastParenthesis){
            arrAux.push(aux)
            aux = ''
            counter++;
            while(inputString[counter] !== ')'){
                aux += inputString[counter]
                counter++;
            }       
            aux = aux.split('').reverse().join('')
            arrAux.push(aux)
            aux = ''
        }
        aux += inputString[counter];
        counter++;
    }
    arrDeleteFirstCloseParenthesis= aux.split('')
    arrDeleteFirstCloseParenthesis.shift()
    aux = arrDeleteFirstCloseParenthesis.join('')
    arrAux.push(aux)
    console.log(aux);
    

    aux = aux.split('').reverse().join('')

    console.log(arrAux.join(''));
      
    return arrAux.join('')
}


console.log(solution("asdsada"));
