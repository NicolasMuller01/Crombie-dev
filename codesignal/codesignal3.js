function solution(inputString) {
    
    const aux = inputString.split("").reverse().join("")

    return aux === inputString ? true : false

}