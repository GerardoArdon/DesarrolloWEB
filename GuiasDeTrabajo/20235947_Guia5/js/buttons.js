function aviso(){
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion(){
    //Los valores que puede almacenar la variable confirmación
    //son true o false.
    let confirmacion = confirm("¿desea salir de la sesión?");
    /* para imprimir una variable en una cadena podemos
    utilizar las comillas simples inversas `` y luego hacemos el llamado
    de la variable con ${aqui debe de escribir el nombre de la variable}
    */
   alert(`Valor seleccionado ${confirmacion}`);
}

function capturaDatos(){
    let nombre = prompt("¿Cual es su nombre?");
    //Notese que en campo del prompt se mostrara 0 por defecto
    let edad = prompt("¿Cual es su edad?", 0);

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el parrafo"
    );

    /* Utilizaremos la API DOM para acceder al elemento
        <p id="idParrafo"></p> que hemos creado en nuestro en nuestro documento HTML*/
    
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}