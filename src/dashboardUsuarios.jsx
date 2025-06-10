import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBarMui from './componentes_mui/appBar';
import Perfil from './componentes_mui/perfil';
import Usuario from './componentes_mui/usuarios';
import Grafico from './componentes_mui/grafico';
import  IconButton  from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import { useNavigate } from 'react-router-dom'

function DashboardUsuarios(){
    const navigate = useNavigate(); 
    const editarIr = (usuario_red) => {
        navigate(`/editar/${usuario_red}`);
    };
    const agregarIr = async () =>{
        navigate('/agregar')
    }
    return(
        <Container sx={{ height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", width:"90vw"}}>
            <Box sx={{width:"80vw", height:"90vh"}} >
                <Grid container spacing={1}>
                    <Grid size={12} >
                        <Box  >
                            <AppBarMui></AppBarMui>

                            
                        </Box>
                    </Grid>
                    
                    <Grid size={12}>
                        <Box sx={{background:"white", margin:1, mt:0,  borderRadius:5}} >
                            <Usuario></Usuario>
                        </Box>
                    </Grid>
                    
                    
                </Grid>
            </Box>
        </Container>
    )


}
export default DashboardUsuarios;