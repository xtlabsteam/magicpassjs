/* 

[MAGICPASS-JS]

El proyecto MAGICPASS-JS se trata de un pequeño generador de contraseñas basado en JavaScript, HTML y CSS. Se
trata de un generador muy simple creado y diseñado completamente desde cero (HTML y CSS incluidos) por XT-LABS
y liberado bajo licencia open-source para la comunidad. Esperamos que os guste ;)

[XTLABS© 2026 - OPENSOURCE]

[DOCUMENTACIÓN DEL PROYECTO]

Licencia: https://www.mozilla.org/en-US/MPL/2.0/
Web XT-LABS: PRÓXIMAMENTE

*/

//[----------VARIABLES OBTENCIÓN DE DATOS----------]

let magicword_data = document.getElementById("magicword_input"); //Obtenemos los datos de la "magicword"
let magicnumber_data = document.getElementById("magicnumber_input"); //Obtenemos los datos del "magicnumber"

let magicbutton_data = document.getElementById("magicbutton_input"); //Obtenemos los datos del botón 1
let magicbutton2_data = document.getElementById("magicbutton2_input"); //Obtenemos los datos del botón 2

//[-----------------------------------------------]

//[----------VARIABLES GENERADOR DE CONTRASEÑAS---------------]

let number_1; //Variable auxiliar que usaremos para guardar el número de cifrado 1 
let number_2; //Variable auxiliar que usaremos para guardar el número de cifrado 2

let number_1s //Variable auxiliar que usaremos para guardar en formato String el número de cifrado 1
let number_2s //Variable auxiliar que usaremos para guardar en formato String el número de cifrado 2

let magicpassword //Variable auxiliar que usaremos para el generador de contraseña

//[-----------------------------------------------------------]

//[---------FUNCIONES DEL PROGRAMA---------]

//Función para mostrar la contraseña

function password_show(){

    alert(magicpassword); //Mostramos una alerta mostrando la contraseña generada

    console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" mostrando la contraseña generada
    console.log("MAGICPASSWORD:" + magicpassword);

}

//Función generadora de contraseña

function password_generator(magicnumber, magicword){

    alert("GENERANDO CONTRASEÑA MÁGICA"); //Mostramos una alerta indicando que estamos generando la contraseña

    console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" indicando que estamos generando la contraseña
    console.log("Generando contraseña mágica");

    for(let i = 0; i <= 101; i++){ //Generamos el número 1 (que se encargará del "cifrado" de la "mágicpassword")

        number_1 = i; //Almacenamos el valor del bucle for en la variable "number_1"
        number_1s = number_1.toString(); //Convertimos el valor a String y lo guardamos en la variable "number_1s"
        
    }

    for(let i = 0; i <= 101; i++){ //Generamos el número 2 (que se encargará del "cifrado" de la mágic password)

        number_2 = i; //Almacenamos el valor del bucle for en la variable "number_2"
        number_2s = number_2.toString(); //Convertimos el valor a String y lo guardamos en la variable "number_2s"

    }

    setTimeout(()=>{ //Esperamos un segundo y ejecutamos la función anónima que genera la "magicpassword"

        magicpassword = "*" + number_1s + "$" + magicnumber + magicword + "%"+ number_2s + "#"; //Generamos la "magicpassword" uniendo los dos números de cifrado junto con la "magicword" y el "magicnumber"
        
        password_show(); //Llamamos a la función "password_show" para mostrar la contraseña generada
    
    }, 1000)

}

//Funcion de comprobación de datos

function data_comprobation(){

    let magicnumber = Number(magicnumber_data.value); //Almacenamos el número recibido en la variable "magicnumber" y lo convertimos en Number
    let magicword = magicword_data.value; //Almacenamos la palabra recibida en la variable "magicword"

    if(Number.isNaN(magicnumber) || magicnumber == 0){ //Comprobamos que la variable "magicnumber" sea un número y que no sea un 0 y lo mostramos por consola

        alert("ERROR NÚMERO NO VÁLIDO"); //Si no es un número mostramos un alert

        console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" indicando el error
        console.log("Eror, el dato introducido no es un número válido");

    } else {

        console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" indicando el número secreto registrado
        console.log("Número secreto registrado correctamente:" + magicnumber);

    }

    if(magicword == ""){ //Comprobamos que la variable "magicword" no sea un valor vacío

        alert("ERROR PALABRA NO VÁLIDA"); //Si es un valor vacío mostramos un alert

        console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" indicando el error
        console.log("Error, palabra mágica no introducida");

    } else{

        console.log("[MAGICPASS-JS DEBUG]"); //Mostramos un mensaje "debug" indicando la palabra mágica registrada
        console.log("Palabra mágica registrada correctamente:" + magicword);

    }

    setTimeout(() => { //Esperamos un segundo y ejecutamos la función anónima que llama a la función generadora de contraseña

        password_generator(magicnumber, magicword); //Llamamos a la función "password_generator" y le pasamos el "magicnumber" y la "magicword" como parámetros

    }, 1000);

}
//[---------------------------------------------------------------]

//[EVENT LISTENER DE LOS BOTONES]

magicbutton_data.addEventListener("click", () => {data_comprobation();});//Botón para enviar los datos
magicbutton2_data.addEventListener("click", () => {location.reload();}); //Botón para recargar la página