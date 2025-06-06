import axios from 'axios';
import Swal from 'sweetalert2'


const AGREGAR= async (usuario_red,correo,nombres,documento,contrasenna,rol)=>{
    try {
        const agregarUsuario = await axios.post('http://localhost:3000/agregarUsuario',{
            usuario_red:usuario_red,
            correo:correo,
            nombres:nombres,
            documento:documento,
            contrasenna:contrasenna,
            rol:rol

        });
        Swal.fire({
            title: "Agregado",
            icon: "success",
            draggable: true
        }).then(()=>{
            window.location.reload()
        })
    } catch (error) {
         Swal.fire({
            title: "Datos incorrectos!!!",
            icon: "error",
            draggable: true
        })
    }

}
export default AGREGAR;