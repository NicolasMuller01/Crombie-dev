interface Persona {
    nombre: string
    apellido: string
    numero: number
}

interface Alumno extends Persona {
    legajo: string
}

const alumno2 : Alumno = {
    nombre: 'nico',
    apellido: 'muller',
    numero: 342342,
    legajo: 's2312'
}

//record, readonly, omit, pick, partial, point Utilities

//typeof keyof

//typeof te muestra el tipo

//keyof te muestra la key

// type Merge<T,K> = T & K

//Utilidades

const alumno3 : Alumno = {
    nombre: 'nico', // type: String, key: nombre
    apellido: 'muller',
    numero: 342342,
    legajo: 's2312'
}

type PersonKey = keyof typeof alumno2

const X: PersonKey = 'nombre'

console.log(X)