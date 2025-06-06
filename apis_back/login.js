import axios from 'axios';
import Swal from 'sweetalert2'

const LOGIN = async (usuario,contraseña)=>{
    try {
        const login = await axios.post("http://localhost:3000/login",{
            usuario_red: usuario,
            contrasenna: contraseña,
        })
        
        Swal.fire({
            title: "BIENVENIDO",
            icon: "success",
            draggable: true
        })
        return true
    } catch (error) {
        console.log("No se conecto", error)
        Swal.fire({
            title: "Datos incorrectos!!!",
            icon: "error",
            draggable: true
        })
        return flase
    }
}
export default LOGIN