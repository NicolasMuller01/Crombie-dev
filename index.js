const areaCirculo = (r) =>{
    return Math.PI * (r * r)
}
console.log(areaCirculo(5))
const profesores = ["juani", "fran", "hola"]

const primerYUltimoProfesor = (arrayProfes) => {
    return console.log(arrayProfes[0] + "" + arrayProfes[arrayProfes.length-1] )
}

primerYUltimoProfesor(profesores)

const alumno = {
    nombre: "nico",
    apellido: "muller",
    lenguajeProgramacion: "js",
    edad: 21
}

const alumnoObjecto = (alumno, campo) =>{
     return console.log(alumno.nombre + "" + alumno[campo])
}

alumnoObjecto(alumno, "edad")

const notas = [1 , 5 ,10 ,9]

