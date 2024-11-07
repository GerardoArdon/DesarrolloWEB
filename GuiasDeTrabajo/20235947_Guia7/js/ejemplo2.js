// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aquí se está utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// Función para validar el formulario
function validarFormulario(){
    let errores=[];
    
    //validacion de campos vacíos
    if (!formulario["idNombre"].value.trim()) errores.push("El campo Nombres está vacío.");
    if (!formulario["idApellidos"].value.trim()) errores.push("El campo Apellidos está vacío.");
    if (!formulario["idCorreo"].value.trim()) errores.push("El campo Correo está vacío.");
    if (!formulario["idPassword"].value.trim()|!formulario["idPasswordRepetir"].value.trim())
        errores.push("El campo Contraseña está vacío.");

    //validacion de la fecha de nacimiento
    const fechaNac = new Date(formulario["idFechaNac"].value);
    const fechaActual = new Date();
    if (fechaNac >= fechaActual) errores.push("La fecha de nacimiento no puede ser posterior a hoy.");

    //Validacion de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formulario["idCorreo"].value))
        errores.push("El correo electrónico no tiene un formato válido.");

    //validacon de contraseña repetida
    if (formulario["idPassword"].value !== formulario["idPasswordRepetir"].value)
        errores.push("Las contraseñas no coinciden.");

    //Validacion de intereses
    const intereses = ["idCkProgramacion", "idCkBD", "idCkRedes", "idCkSeguridad"];
    const algunInteres = intereses.some(id => formulario[id].checked);
    if (!algunInteres) errores.push("Seleccione al menos un interés.");

    //validación de carrera
    const carreras = ["idRdIng", "idRdLic", "idRdTec", "idRdOtro"];
    const algunaCarrera = carreras.some(id => formulario[id].checked);
    if (!algunaCarrera) errores.push("Seleccione una carrera.");

    //Validación de país de origen
    if (formulario["idCmPais"].value === "Seleccione una opcion") 
        errores.push("Seleccione un país de origen.");

    //Mostrar errores
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return false;
    }
}




