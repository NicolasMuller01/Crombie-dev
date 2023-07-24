function solution(statues) {

    const statuesSort = [...statues].sort((a, b) => a - b);
    const ultimoValor = statuesSort.length
    let contador = statuesSort[0]
    let contadorEstatuasFaltantes = 0
    let contadorWhile = 0;
    
    do{
        if(statuesSort [contadorWhile]+1 === contador+1){
            contador = statuesSort[contadorWhile]
        }else{
            while(contador+1 !== statuesSort[contadorWhile]){
                contadorEstatuasFaltantes+=1   
                contador +=1

                console.log(contador, statuesSort[contadorWhile])
           }
           break;
        }

        contadorWhile+=1
        console.log(contadorWhile)
        
    }while(contadorWhile < ultimoValor)
    
    return contadorEstatuasFaltantes
}

console.log(solution([100,30,500,1]))
