function validarFormulario() {
    let carnet = document.getElementById("carnet").value;
    let nombre = document.getElementById("nombre").value;
    let dui = document.getElementById("dui").value;
    let nit = document.getElementById("nit").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let mensaje = "";

    // Validar Carnet (formato: AA000)
    if (!/^[A-Z]{2}\d{3}$/.test(carnet)) {
        mensaje += "El carnet debe tener el formato AA000.<br>";
    }

    // Validar Nombre Completo (sin números ni caracteres especiales)
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        mensaje += "El nombre completo no debe contener números ni caracteres especiales.<br>";
    }

    // Validar DUI (formato: ########-#)
    if (!/^\d{8}-\d$/.test(dui)) {
        mensaje += "El DUI debe tener el formato ########-#.<br>";
    }

    // Validar NIT (formato: ####-######-###-#)
    if (!/^\d{4}-\d{6}-\d{3}-\d$/.test(nit)) {
        mensaje += "El NIT debe tener el formato ####-######-###-#.<br>";
    }

    // Validar Fecha de Nacimiento (formato: DD/MM/YYYY)
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimiento)) {
        mensaje += "La fecha de nacimiento debe tener el formato DD/MM/YYYY.<br>";
    }

    // Validar Correo Electrónico
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
        mensaje += "El correo electrónico no es válido.<br>";
    }

    // Validar Edad (solo números)
    if (!/^\d+$/.test(edad)) {
        mensaje += "La edad debe contener solo números.<br>";
    }

    // Mostrar mensaje de error o éxito
    document.getElementById("resultado").innerHTML = mensaje ? mensaje : "Formulario enviado correctamente.";
}
