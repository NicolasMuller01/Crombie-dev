function solution(inputArray) {
    
    const arrLongestPosc = inputArray.map(str => str.length)

    console.log(arrLongestPosc)
    
    const arrFinal = []

    const arrPosc = [];

    arrPosc[0] = 0;
    
    let max = arrLongestPosc[0];


    for (let i = 1; i< inputArray.length ; i++){
        if(max < arrLongestPosc[i]){
            max = arrLongestPosc[i]
            arrPosc[0] = i
        }
    }

    console.log(max, arrPosc[0])


    for (let i = arrPosc[0]+1; i < inputArray.length ; i++){
        if(max === arrLongestPosc[i]){
            arrPosc.push(i)
        }
    }

    for (let i = 0; i< arrPosc.length ; i++){
        arrFinal.push(inputArray[arrPosc[i]])
    }

    
    return arrFinal
}

console.log(solution(["enyky", 
"benyky", 
"yely", 
"varennyky"]))