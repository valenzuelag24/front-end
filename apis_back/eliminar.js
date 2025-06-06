import axios from 'axios';
import Swal from 'sweetalert2'

const ELIMINAR = async (usuario_red)=>{
    try {
        const elimiarUsuario = await axios.delete(`http://localhost:3000/eliminar?usuario_red=${usuario_red}`);
        Swal.fire({
            title: "Eliminado",
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
export default ELIMINAR;