import axios from 'axios';
import Swal from 'sweetalert2'
const EDITAR = async (usuario_red,correo,nombres,documento,contrasenna,rol)=>{
    try {
        const editarUsuario = await axios.put(`http://localhost:3000/modificar?usuario_red=${usuario_red}`,{
            correo:correo,
            nombres:nombres,
            documento:documento,
            contrasenna:contrasenna,
            rol:rol

        });
        Swal.fire({
            title: "Editado",
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
export default EDITAR;