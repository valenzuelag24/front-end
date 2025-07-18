import axios from 'axios';
import Swal from 'sweetalert2'
const EDITAR = async (usuario_red,correo,nombres,documento,contrasenna,rol)=>{
    const validarContrasena = (contrasena) => {
        const validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/;
        return validar.test(contrasena);
    };
    if (correo.includes('@') && correo.includes('nlsa') && correo.includes('.') ) {
        if (validarContrasena(contrasenna)) {
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
        } else {
            Swal.fire({
                            title: "¡Contraseña no válida!",
                            text: "* Mínimo 8 caracteres\n* 1 mayúscula\n* 1 minúscula\n* 1 número\n* 1 carácter especial",
                            icon: "error"
                        });
        }
    } else {
        Swal.fire({
                        title: "Correo no válida!",
                        text: "* contiene @\n* contiene nlsa\n",
                        icon: "error"
                    });
                
        
    }

}
export default EDITAR;