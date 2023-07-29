function solution(matrix) {
      
    const arr = transposeArray(matrix);
    
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                break;
            }
        suma += arr[i][j];
        }
    }   
    return suma
}

function transposeArray(arr) {
    
    const result = [];
    
    for (let i = 0; i < arr[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > i) {
                newRow.push(arr[j][i]);
            } 
        }
        result.push(newRow);
    }
    
    return result;
}
