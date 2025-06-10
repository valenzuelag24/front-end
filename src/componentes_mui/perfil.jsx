import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';

function Perfil() {
    return (
        <Container disableGutters >
            <Grid container>
                <Grid size={12} >
                    <Box sx={{background:"#127369", height:"15vh" , borderRadius:"20px 20px 0 0", display:"flex", justifyContent:"center", alignItems:"end"}}>
                        <Box sx={{background:"#BFBFBF", height:"11vh", width:"6vw", borderRadius:50}} ></Box>
                    </Box>
                </Grid>
                <Grid size={12} sx={{  m:2, mb:1}} >
                    Usuario Red:
                    <Box sx={{ m:1, mb:0,mt:0, border:"1px solid black", borderRadius:5, display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{m:1}} >Jesus.20</Box>
                    </Box>
                </Grid>
                <Grid size={12} sx={{  m:2, mt:0}} >
                    Correo:
                    <Box sx={{ m:1, mb:0, mt:0, border:"1px solid black", borderRadius:5, display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{m:1}} >Jesus.20@gmail.com</Box>
                    </Box>
                </Grid>
                <Grid size={12} sx={{  m:2, mt:0}} >
                    Nombres:
                    <Box sx={{ m:1, mb:0, mt:0, border:"1px solid black", borderRadius:5, display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{m:1}} >Jesus Valenzuela</Box>
                    </Box>
                </Grid>
                <Grid size={12} sx={{  m:2, mt:0}} >
                    Documento:
                    <Box sx={{ m:1, mb:0, mt:0, border:"1px solid black", borderRadius:5, display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{m:1}} >1049290582</Box>
                    </Box>
                </Grid>
                <Grid size={12} sx={{  m:2, mt:0}} >
                    Rol:
                    <Box sx={{ m:1, mb:0, mt:0, border:"1px solid black", borderRadius:5, display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Box sx={{m:1}} >Administrador</Box>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
    )
}
export default Perfil;