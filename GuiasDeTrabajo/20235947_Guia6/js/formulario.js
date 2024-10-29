// Accediendo a los elementos HTML
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAgregarPais");

const notificacion = document.getElementById("idNotificacion");
// Componente de Bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

// Componente modal
const idModal = document.getElementById("idModal");

// Arreglo global de pacientes
let arrayPaciente = [];

/*
Creando una funcion para que limpie el formulario
siempre que se cargue la pagina o cuando se presione
el boton limpiar del formulario.
*/

const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = "0";
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
};

/*
función para validar el ingreso del paciente
*/

const addPaciente = function() {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo =
        inputRdMasculino.checked == true
            ? "Hombre" :
            inputRdFemenino.checked == true
            ? "Mujer" 
            : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (
        nombre !== "" && 
        apellido !== "" && 
        fechaNacimiento !== "" && 
        sexo !== "" && 
        pais !== 0 && 
        direccion !== ""
    ) {
        // Agregando información al arreglo paciente
        arrayPaciente.push(
            new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
        );

        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        // Llamando al componente de Bootstrap
        toast.show();

        // Limpiando formulario
        limpiarForm();
    } else {
        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Faltan campos por completar";
        // Llamando al componente de Bootstrap
        toast.show();
    }
};

// Función que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let $fila = "";
    let contador = 1;

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
                                <td scope="row" class="text-center fw-bold">${contador}</td>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td>${element[2]}</td>
                                <td>${element[3]}</td>
                                <td>${element[4]}</td>
                                <td>${element[5]}</td>
                                <td>
                                    <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Editar">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Eliminar">
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                </td>
                            </tr>`;
        contador++;
    });
    return $fila;
}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered">
                                <tr>
                                <th scope="col" class="text-center" style="width: 5%">#</th>
                                <th scope="col" class="text-center" style="width: 15%">Nombre</th>
                                <th scope="col" class="text-center" style="width: 15%">Apellido</th>
                                <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
                                <th scope="col" class="text-center" style="width: 10%">Sexo</th>
                                <th scope="col" class="text-center" style="width: 10%">Pais</th>
                                <th scope="col" class="text-center" style="width: 25%">Dirección</th>
                                <th scope="col" class="text-center" style="width: 10%">Opciones</th>
                            </tr>
                            ${imprimirFilas()}
                        </table>
                    </div>
            `;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

// Contador global de los option correspondiente
//al select (cmb) pais
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew !== "") {
        //creando nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        //Agregando el nuevo option en el select
        cmbPais.appendChild(option);

        //Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "País agregado correctamente";
        //Llamando al componente de Bootstrap
        toast.show();
    } else {
        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "Faltan campos por completar";
        //llamando al componente de Bootstrap
        toast.show();
    }
};

//agregando eventos a los botones y utilizando funciones tipo flecha
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};

// Se agrega el focus en el campo nombre país del modal
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

// Ejecutar función al momento de cargar la página HTML
limpiarForm();











//Ejercicio 1 complementario

//función para actualizar la tabla
function actualizarTabla() {
    let $tablaPacientes = "<table class='table'><thead><tr><th>#</th><th>Nombre</th><th>Apellido</th><th>Fecha de Nacimiento</th><th>Sexo</th><th>País</th><th>Dirección</th><th>Acciones</th></tr></thead><tbody>";
    arrayPaciente.forEach((element, index) => {
        $tablaPacientes += `<tr>
                            <td>${index + 1}</td>
                            <td>${element[0]}</td>
                            <td>${element[1]}</td>
                            <td>${element[2]}</td>
                            <td>${element[3]}</td>
                            <td>${element[4]}</td>
                            <td>${element[5]}</td>
                            <td>
                <button onclick="editarPaciente(${index})" class="btn btn-primary">
                    <i class="bi bi-pencil-square"></i> Editar
                </button>
                <button onclick="eliminarPaciente(${index})" class="btn btn-danger">
                    <i class="bi bi-trash"></i> Eliminar
                </button>
            </td>
        </tr>`;
    });

    $tablaPacientes += "</tbody></table>";
    document.getElementById("idTablaPacientes").innerHTML = $tablaPacientes;
}



//funcion para eliminar un paciente
function eliminarPaciente(index) {
    arrayPaciente.splice(index, 1);
    mensaje.innerHTML = "Paciente eliminado con éxito";
    toast.show();
    actualizarTabla();
}



//funcion para editar un pacente
function editarPaciente(index) {
    const paciente = arrayPaciente[index];
    //los valores actuales se colocan en el formulario para editarlos:
    inputNombre.value = paciente[0];
    inputApellido.value = paciente[1];
    inputFechaNacimiento.value = paciente[2];
    inputRdMasculino.checked = paciente[3] === "Hombre";
    inputRdFemenino.checked = paciente[3] === "Mujer";
    cmbPais.value = Array.from(cmbPais.options).find(option => option.text === paciente[4]).value;
    inputDireccion.value = paciente[5];

    //cambiar el botón de "guardar" a "actualizar"
    buttonAgregarPaciente.textContent = "Actualizar";
    buttonAgregarPaciente.onclick = function() {
        //Actualizar paciente con los nuevos valores del formulario
        arrayPaciente[index] = [
            inputNombre.value,
            inputApellido.value,
            inputFechaNacimiento.value,
            inputRdMasculino.checked ? "Hombre" : "Mujer",
            cmbPais.options[cmbPais.selectedIndex].text,
            inputDireccion.value
        ];

        mensaje.innerHTML = "Paciente actualizado con éxito";
        toast.show();
        limpiarForm();
        actualizarTabla();
        buttonAgregarPaciente.textContent = "Guardar Datos"; 
        buttonAgregarPaciente.onclick = addPaciente;
    };
}

//mostrar pacientes en la tabla cuando se presiona el boton mostrar
buttonMostrarPaciente.onclick = actualizarTabla;

//"agregar Paciente" asignado al botón de guardar
buttonAgregarPaciente.onclick = addPaciente;

//Manda a lamar a la función limpiarForm para limpiar el formulario al inicio
limpiarForm();
