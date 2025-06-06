import Box from '@mui/material/Box';
import UsuariosTotal from '../apis_back/usuarios';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import ELIMINAR from '../apis_back/eliminar';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Dashboard() {
  const navigate = useNavigate(); 
  const [usuarios, setUsuarios] = useState([])
 
    

    useEffect(()=> {
      const usuariosInicial = async () => {

        const data = await UsuariosTotal();
        console.log("Usuarios:", data); 
        setUsuarios(data.datos)
      };
      usuariosInicial();
      
    }, []);
  

  const ver = async () => {
    const data = await UsuariosTotal();
    console.log("Usuarios:", data); 
  };
  const agregarIr = async () =>{
    navigate('/agregar')
  }
  const editarIr = (usuario_red) => {
    navigate(`/editar/${usuario_red}`);
  };
  return (
    <Box sx={{  display:"flex", justifyContent:"center", alignContent:"center"}}>
      <Button variant="outlined" size="large" onClick={ver}>
        Obtener usuarios
      </Button>
      <Box sx={{  display:"flex", justifyContent:"center",alignContent:"center"}}>
        <ul>
        {usuarios.map((i )=> (
          <li > 
            <Box sx={{  display:"flex", border:"1px solid black", margin: 2}}>
              <div>{i.usuario_red }</div>
              <div>{i.correo }</div>
              <div>{i.nombres }</div>
              <div>{i.documento }</div>
              <div>{i.rol }</div>
              <IconButton onClick={()=> ELIMINAR(i.usuario_red) }><DeleteIcon/></IconButton>
              <IconButton onClick={()=> editarIr(i.usuario_red)} ><ModeEditIcon/></IconButton>
            </Box>
          </li>
          
      
        ))}
      </ul>
      </Box>
       <IconButton onClick={agregarIr} sx={{border:"1px solid black", borderRadius:0}} > <AddIcon /></IconButton>
      
    </Box>
  );
}

export default Dashboard;