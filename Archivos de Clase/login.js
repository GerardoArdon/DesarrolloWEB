import { registerUser, loginUser } from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  await loginUser(email, password);
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let correo = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  alert(lastName);

  const status = await registerUser(correo, password, firstName, lastName);
  if(status){
    alert("Usuario creado exitosamente");
  }
  else{
    alert("Ya existe un usuario asociado a este correo")
  }
});
