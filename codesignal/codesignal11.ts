function solution(n: number): boolean {
    
    const half:number = n.toString().length/2;
    
    let firstSum:number = 0;
    let secondSum:number = 0;
    
    for(let i:number = 0; i < half; i++ ){
        firstSum += parseInt(n.toString().charAt(i));
    }
    
    for(let i:number = half; i < n.toString().length; i++ ){
        secondSum += parseInt(n.toString().charAt(i));
    }
    

    if(firstSum === secondSum){
        return true
    }else{
        return false
    }
    
}

console.log(solution(1230))