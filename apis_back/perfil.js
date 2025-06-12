import axios from 'axios';
//import Swal from 'sweetalert2'

const PERFIL = async ()=>{

    try {
        const datosUsuario = await axios.get('http://localhost:3000/perfil', {
        withCredentials: true
    });
        console.log('datos:',datosUsuario.data.usuario);
        return datosUsuario.data.usuario;
    } catch (error) {
        console.log('Perfil no conecto', error);
    }

}

export default PERFIL;