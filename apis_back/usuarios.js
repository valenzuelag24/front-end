import axios from 'axios';
//import Swal from 'sweetalert2'

const UsuariosTotal = async ()=>{
    try {
        const data = await axios.get("http://localhost:3000/database")
        return data.data
    } catch (error) {
        return error
    }
}
export default UsuariosTotal;