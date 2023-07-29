function solution(statues) {
    const statuesSort = statues.slice()
    statuesSort.sort((function(a, b) {return a - b}))

    console.log(statues, statuesSort)

    let counter = 0

    if(statuesSort.length === 2){
        for (let i = 0; i <= statues.length; i++) {
    
            if(statuesSort[i] < statuesSort[i+1]){
    
                console.log("valor i: ",  statuesSort[i], statuesSort[i+1])
    
                for(let j = statuesSort[i]; j < statuesSort[i+1]; j++){
                    console.log("valor j: ",j, j+1)
                    counter++
                    console.log(counter)
                }
                
            }
        }
        return counter-1
    }else if (statuesSort.length === 0){
        return 0
    }

    for (let i = 0; i <= statues.length; i++) {
    
        if(statuesSort[i] < statuesSort[i+1]){

            console.log("valor i: ",  statuesSort[i], statuesSort[i+1])

            for(let j = statuesSort[i]; j < statuesSort[i+1]; j++){
                    console.log("valor j: ",j)
                    counter++
                    console.log(counter)
            }
            
        }
    }
    
    counter = counter - statuesSort.length 

    return counter + 1
}