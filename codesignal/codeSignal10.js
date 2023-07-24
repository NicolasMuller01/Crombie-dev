function solution(s1, s2) {
    
    let arr1 = s1.split("").sort();
    let arr2 = s2.split("").sort();

    console.log(arr1, arr2);

    let counter = 0;

    console.log(arr1.length, arr2.length);    

    if(arr1.length <= arr2.length){

        const arrCopy2 = [...arr2]

        for(let i = 0; i<arr1.length;i++){
            for(let j = 0; j<arr2.length ; j++){
                if(arr1[i] === arrCopy2[j]){
                    arrCopy2.splice(j,1)
                    counter++;
                    break;
                }
            }
        }
    }else{
        const arrCopy1 = [...arr1]
        console.log(arrCopy1)
        for(let i = 0; i<arr2.length;i++){
            for(let j = 0; j<arr1.length ; j++){
                if(arr2[i] === arrCopy1[j]){
                    arrCopy1.splice(j,1)
                    counter++;
                    break;
                }
            }
        }
    }

    return counter
}
