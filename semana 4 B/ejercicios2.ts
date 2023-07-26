//En este ejercicio, crearás un tipo de utilidad llamado Merge que tomará dos tipos y los combinará.



type Merge<T,K> = T & K & L;

type Personita = {
    nombre: string
}

type Alumnito = {
    clases:[ "Matematica", "Fisica"]
}

const mi_alumno: Merge<Personita, Alumnito> = {
    nombre: "juan",
    clases: ['Matematica',"Fisica"]
}

console.log(mi_alumno);
