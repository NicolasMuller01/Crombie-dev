//Primer ejercicio:
//Supongamos que estamos programando una pagina para una hamburguesería y que esta tiene 3 tipos (vegetariana, con carne, con pollo)
//Quiero crear una constante que al escribir “” y presionar ctrl + espacio me aparezcan automáticamente estas 3 variedades con el auto corrector. ¿como puedo hacerlo?

type Hamburgueseria = {
    vegetariana? : string,
    carne?: string,
    pollo?: string
}

const ham: Hamburgueseria;

ham.