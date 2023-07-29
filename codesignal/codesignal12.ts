function solution(a: number[]): number[] {
    
    const arrPosition: number[] = []; 
    const arrValues: number[] = [];
    const aCopy: number[] = [...a];
    
    for(let i:number = 0; i<a.length;i++){
        if(a[i] != -1){
            arrPosition.push(i);
            arrValues.push(a[i]);
        }
    }
    
    arrValues.sort((a, b) => a - b);

    console.log(arrValues);
    
    for (let i:number = 0; i < a.length; i++) {
        for (let j:number = 0; j < a.length; j++) {
            if (i === arrPosition[j]) {
                aCopy[i] = arrValues[j];
            }
        }
    }
     
    return aCopy;
}