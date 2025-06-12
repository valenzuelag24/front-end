import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  LOGIN  from "../apis_back/login";
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  
  padding: theme.spacing(1),
  textAlign: 'center',
  
}));

function Comienzo() {
  const [usuarioRed, setUsuarioRed] = useState('');
  const [contrasenna, setContrasenna] = useState('');

  const navigate = useNavigate();  

  
  const enrutado = async () => {
    const exito = await LOGIN(usuarioRed, contrasenna)
    if (exito) {
      navigate('/dashboardPrincipal')  
    }
  }
  
  return (
    <>
      <Container maxWidth="lg"   >
        
        <Grid container sx={{ height:"100vh"}} >
          <Grid size={6} sx={{height:"100vh", display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Box sx={{  width:"60%", height:"60%", ml:29, borderRadius:"10px 0px 0px 10px", borderLeft: '1px solid gray',borderBottom: '1px solid gray',borderTop: '1px solid gray',display:'flex', justifyContent:'center', alignItems:'center'}} >
              <Avatar  src="/static/img/loginimg.avif" sx={{height:"90%", width:"90%", borderRadius:5}} />
            </Box>
          </Grid>
          <Grid size={6} sx={{height:"100vh", display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Box sx={{ width:"60%", height:"60%", mr:29, borderRadius:"0 10px 10px 0px", borderRight: '1px solid gray',borderBottom: '1px solid gray',borderTop: '1px solid gray'}} >
              <Grid containes >
                <Grid size={12} sx={{display:'flex',justifyContent:'center', alignItems:'center', mt:5}} >
                  <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    TP_users
                  </Typography>
                </Grid>
                <Grid size={12} sx={{display:'flex',justifyContent:'center', alignItems:'center', mt:5 }}  >
                  <Box sx={{ color:"white" ,  display:"flex", justifyContent:"center", alignItems:"center"}}>

                       <Box sx={{  width: "20vw", borderRadius: 2, p: 1 }}>
                         <Grid container spacing={2}>
                            <Grid size={12}>
                              <Item sx={{fontSize:30}} >Login</Item>
                            </Grid>
                            <Grid size={12}>
                              <Item>
                                 <TextField 

                                   label="Usuario " 
                                   type="search" 

                                   fullWidth 
                                   value={usuarioRed}
                                   onChange={(e) => setUsuarioRed(e.target.value)}

                                 />
                              </Item>
                            </Grid>
                            <Grid size={12}>
                              <Item>
                                 <TextField

                                   label="Password"
                                   type="password"
                                   autoComplete="current-password"
                                   fullWidth
                                   value={contrasenna}
                                   onChange={(e)=> setContrasenna(e.target.value)}
                                 />
                              </Item>
                            </Grid>
                            <Grid size={12} sx={{display:'flex',justifyContent:"center",alignItems:"center", width:'50vw'}}>
                              <Item>

                                 <Button type='submit' variant="outlined" size="large" sx={{width:"10vw", color:"black", border:"1px solid black"}} onClick={enrutado} >
                                   Enviar

                                 </Button>
                              </Item>
                            </Grid>
                         </Grid>
                       </Box>
                    </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        


      </Container>
    </>
  );
}

export default Comienzo;