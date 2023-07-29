function solution(a: number[]): number[] {

    let counter1: number = 0;
    let counter2: number = 0;
    
    for(let i:number = 0; i<a.length; i++){
        if(i%2 === 0){
            counter1 += a[i];
        }else{
            counter2 += a[i];
        }
    }
    
    const arrFinal: number[] = [counter1, counter2];
    
    return arrFinal;
    

}
