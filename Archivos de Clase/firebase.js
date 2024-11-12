


















const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

//Funcion para registrar usuarios
export async function registerUser(email, password){
    try{
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
        const user=userCredencial.user;
        await MediaStreamAudioSourceNode(doc(db, "users", user.uid),{
            firstName,
            lastName,
            role:"user"
        })
        console.log('Usuario registrado exitosamente: ', userCredencial.user)
        return true;
    }
    catch(error){
        console.log('Error: ', error.message);
        return false;
    }
}

export async function registerUser(email, password){






}


async function loginUser(email, password){
    try{
        const userCredencia = await signWithEmailAndPassword(auth, email, password);
        console.log("Inicio de sesion exitoso");
    }
    catch(error){
        console.log("Usuario y/o contraseña erronea ", error.message);


    }
}