//1 Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado.

const validarNumero = (numero) => {
    return  typeof numero === 'number' ? console.log("El numero es correcto " + numero) : console.log("error, el valor pasado es de tipo " + typeof numero );
}

//2 Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

const MultiplicacionArray = (array) => {
    const arrNuevo = []
    array.forEach(element => {
        arrNuevo.push(element*5)
    });
    return arrNuevo
}

console.log(MultiplicacionArray([1,5,7]))

//3 Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango.

const promedioRangoEnUnArray = (arr, num1, num2) => {
    let promedio = 0;
    let contaodor = 0;
    for (let i = num1; i <= num2; i++) {
        promedio += arr[i];
        contaodor+=1;
    }
    return ((promedio) / contaodor);
}

console.log(promedioRangoEnUnArray([0, 1, 2, 3], 2, 3));

// 4 Definir una función que devuelva TRUE si el argumento recibido como texto un palíndromo, osea que se lee de la misma forma de izquierda y derecha. Ejemplo de palíndromo "¿Acaso hubo búhos acá?".

const palindromo = (texto) =>{
    let arrAlrevez = [];
    let arrTexto = texto.split("");

    for (let index = arrTexto.length-1; index >= 0; index--) {
        arrAlrevez.push(arrTexto[index]);   
    }

   return arrAlrevez.join("") === texto ?  true : false;

}

console.log(palindromo("aaa"))

//5 crear una función para validar los datos que se ingresaron en un formulario. Recibirá como parametros email, password y description. Deberá comprobar que se cumplan las siguientes condiciones:- El email debe contener "@" y ".com".- La contraseña deberá tener entre 8 y 16 caracteres, y tener una mayúscula como mínimo.- La descripción podrá tener hasta 400 caracteres pero no puede contener guiones (-).Mostrar un error en caso de que no se cumplan todos los requisitos, de lo contrario dar un mensaje de registro exitoso (usando console.log)Sugerencia:  function validation(email, password, description) { ... } (edited) 

function validation(email, password, description) { 
    //se puede validar con regex
    if(emailValidation(email) && passwordValidation(password) && descriptionValidation(description)){
        console.log("Datos validos");
    }else{
        console.log("datos invalidos");
    }
    
}

const emailValidation = (email) =>{
    emailChecker = email.toString();
    if(email.includes("@") && email.includes(".com")){
        return true;
    }
    return false; 
}

const passwordValidation = (password) =>{
    let passwordChecker = password.toString();
    passwordChecker = passwordChecker.toUpperCase();
    if(password.length >= 8 && password.length<=16){
        for(let i = 0; i < password.length;i++) {
            if(password.charAt(i) === passwordChecker.charAt(i)){
                 return true;
            }
         }
    }
    return false;
}

const descriptionValidation = (description) =>{
    let descriptionChecker = description.toString();
    if(descriptionChecker.length < 401 && !descriptionChecker.includes("-")){
        return true;
    }
    return false;
}



validation("nico@gmail.com", "12345678B", "ju-an")