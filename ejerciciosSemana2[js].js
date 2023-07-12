const notas =  [
    {
      nombre: "Jose",
      nota: 9,
    },
    {
      nombre: "pepe",
      nota: 10,
    },
    {
      nombre: "Carlos",
      nota: 1,
    },
    {
      nombre: "Maria",
      nota: 9,
    },
  ];

let notaMayor = {nombre: "", nota: 0}
let notaMenor = {nombre: "", nota: 0}


notaMayor = {nombre: [notas[0].nombre], nota: [notas[0].nota]}
notas.forEach(element => {   
    if(element.nota > notaMayor.nota){
        notaMayor = {nombre: [element.nombre], nota: [element.nota]}
    }
});

notaMenor = {nombre: [notas[0].nombre], nota: [notas[0].nota]}

notas.forEach(elemento => {
    if( elemento.nota < notaMenor.nota ){
        notaMenor = {nombre: [elemento.nombre], nota: [elemento.nota]}
    }
});

console.log(notaMayor, notaMenor)


//Ordenar el siguiente array sin usar sort: [3, 23, 11, 15, 6, 19, 32, 9]

const arr = [3, 23, 11, 15, 6, 19, 32, 9]

const arrAux = []

console.log(Math.min(arr));





const minimo= (arr)=>{
    let menorAux = arr[0]
    let arrMenor = []
    arr.forEach(element => {
        if(menorAux < arr[element]){
            arrMenor.pop(arr[element])
            menorAux = arr[element]
        }
    });
    return arrMenor
}

console.log(minimo(arr))