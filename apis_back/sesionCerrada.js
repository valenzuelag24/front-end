
import axios from 'axios';
import Swal from 'sweetalert2'

const SECIONCERRADA = async ()=>{
    try {
        await axios.post('http://localhost:3000/cerrada', {}, {
            withCredentials: true
        });
        Swal.fire({
            title: "Sesión Cerrada",
            icon: "success"
            
        })
    } catch (error) {
        console.log('ERROR Cerrar Sesión:',error)
    }
}
export default SECIONCERRADA;