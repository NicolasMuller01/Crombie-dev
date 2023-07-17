//Primero creamos un arreglo de productos que contengan, inventario, precio, marca y nombre.
//Luego creemos la siguientes funciones:
//Función que reciba por parámetro una marca y devuelva un arreglo de productos de esa marca.
//Función que reciba por parámetro un precio y devuelva un arreglo de productos con precios mayores al recibido por parámetro.
//Función que cambie el nombre de una marca. Por ejemplo, queremos cambiar los de marca Walmart a ChangoMas.
//Función que devuelva la suma de todos los precios, el promedio, el máximo y el mínimo.

const productos = [
    {nombre: 'teclado', marca: 'logitech', precio: 200, inventario: 200},
    {nombre: 'mouse', marca: 'logitech', precio: 100, inventario: 300},
    {nombre: 'mousepad', marca: 'logitech', precio: 200, inventario: 100},
]

const arregloMarca = (marca) =>{
    const arr = []
    productos.forEach(element => {
        if(element.marca === marca){
            arr.push({nombre: element.nombre, marca: element.marca, precio: element.precio, inventario: element.inventario})
        }
    });
    console.log(arr)
}

const preciosMayores = (precio) =>{
    const arrMayor = []
    productos.forEach(element => {
        if(precio < element.precio){
            arrMayor.push({nombre: element.nombre, marca: element.marca, precio: element.precio, inventario: element.inventario})
        }
    });
    console.log(arrMayor)
}

const cambiarNombre = (nombreACambiar, nombreNuevo) =>{
    arrNombreCambiados = []
    productos.forEach(element => {
        if(nombreACambiar === element.marca){
            arrNombreCambiados.push({nombre: element.nombre, marca: nombreNuevo, precio: element.precio, inventario: element.inventario})
        }
    });
    console.log(arrNombreCambiados);
}

//Función que devuelva la suma de todos los precios, el promedio, el máximo y el mínimo.
const funcionPromedio = () =>{
    let sumaTodos = 0;
    let promedio = 0;
    let precioMAximo = 0;
    let precioMinimo = 0;


    productos.forEach(element => {
        sumaTodos += element.precio
    });

    promedio = sumaTodos / productos.length

    precioMAximo = productos[0].precio

    productos.forEach(element => {
        if(precioMAximo < element.precio){
            precioMAximo = element.precio
        }
    });

    precioMinimo = productos[0].precio

    productos.forEach(element => {
        if(precioMinimo > element.precio){
            precioMinimo = element.precio
        }
    });

    console.log(
        "promedio: ", Math.round(promedio) +
        "\nla suma de todos: ", sumaTodos + 
        "\nmaximo: ", precioMAximo +
        "\nminimo ", precioMinimo
    )
    
}

//arregloMarca('logiteh')
//preciosMayores(100)
//cambiarNombre('logitech', 'logit')
funcionPromedio()