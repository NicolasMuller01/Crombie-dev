function solution(sequence: number[]): boolean { 

    let counter: number = 0

    const sequenceOrdered = [...sequence].sort(function(a, b){return a - b});

    let counterMoreThanOneDuplicated: number = 0;

    for (let i = 0; i < sequenceOrdered.length; i++) {
        if (sequenceOrdered[i] === sequenceOrdered[i+1]) {
            counterMoreThanOneDuplicated++
        }
    }

    if (counterMoreThanOneDuplicated > 1){
        return false
    }
    
    let posc:number = 0
    
    for(let i=0; i<sequence.length; i++){
        if(sequence[i] >= sequence[i+1]){
            console.log(sequence[i] , sequence[i+1])
            counter++;
            posc = i;
        }
    }

    console.log(checkLeft(sequence, posc),checkRight(sequence, posc) )
    console.log(counter)
    
    if (checkLeft(sequence, posc) && !checkRight(sequence, posc) && counter<2){
        return true
    }else if(!checkLeft(sequence, posc) && checkRight(sequence, posc) && counter<2){
        return true
    }else if(checkLeft(sequence, posc) && checkRight(sequence, posc) && counter<2){
        return true
    }else{
        return false
    }
    
}

function checkLeft(sequence: number[], posc: number): boolean {
    const sequenceCopy1 = [...sequence]
    sequenceCopy1.splice(posc, 1)
    const sequenceOrdered = [...sequenceCopy1].sort(function(a, b){return a - b});
    for(let i = 0; i < sequenceOrdered.length; i++) {
        if(sequenceCopy1[i] != sequenceOrdered[i]){
            return false
        }
    }
    return true
}

function checkRight(sequence: number[], posc: number): boolean {
    const sequenceCopy2 = [...sequence]
    sequenceCopy2.splice(posc+1, 1)
    const sequenceOrdered2 = [...sequenceCopy2].sort(function(a, b){return a - b});
    for(let i = 0; i < sequenceOrdered2.length; i++) {
        if(sequenceCopy2[i] != sequenceOrdered2[i]){
            return false
        }
    }
    return true
}




solution([1, 4, 5, 2, 3])