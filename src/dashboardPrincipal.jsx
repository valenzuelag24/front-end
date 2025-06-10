import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBarMui from './componentes_mui/appBar';
import Perfil from './componentes_mui/perfil';
import Usuario from './componentes_mui/usuarios';
import Grafico from './componentes_mui/grafico';
import  IconButton  from '@mui/material/IconButton';





import ModalEliminar from './modal_mui/modalEliminar';
import ModalAgregar from './modal_mui/modalAgregar';
import MoldalConfigurar from './modal_mui/modalConfigurar';

function DashboardPrincipal(){
    
    
    
    return(
        <Container maxWidth={'lg'} sx={{ height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box sx={{width:"60vw", height:"90vh"}} >
                <Grid container spacing={1}>
                    <Grid size={12} >
                        <Box  >
                            <AppBarMui></AppBarMui>

                            
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box sx={{background:"white", margin:1, mt:0, border:"1px solid black", borderRadius:5}} >
                            <Grafico></Grafico>
                        </Box>
                    </Grid>
                    <Grid size={8}>
                        <Box sx={{background:"white", margin:1, mt:0, border:"1px solid black", height:"20vh", borderRadius:5}} >
                            <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                <Grid size={3} m={2} sx={{ height:'15vh',display:'flex', justifyContent:'center', alignContent:'center'}} >
                                    <IconButton  >
                                        <ModalAgregar>

                                        </ModalAgregar>
                                        
                                    </IconButton>
                                </Grid>
                                <Grid size={3} m={2} sx={{ height:'15vh',display:'flex', justifyContent:'center', alignContent:'center'}} >
                                    <IconButton >
                                        <MoldalConfigurar>

                                        </MoldalConfigurar>
                                    </IconButton>
                                </Grid>
                                <Grid size={3} m={2} sx={{ height:'15vh',display:'flex', justifyContent:'center', alignContent:'center'}} >
                                    <IconButton >
                                        
                                        <ModalEliminar>
                                            

                                        </ModalEliminar>
                                        
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box sx={{background:"white", margin:1, mt:0, border:"1px solid black", borderRadius:5}} >
                            <Perfil></Perfil>
                        </Box>
                    </Grid>
                    <Grid size={8}>
                        <Box sx={{background:"white", margin:1, mt:0,  borderRadius:5}} >
                            <Usuario></Usuario>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>
    )


}
export default DashboardPrincipal;