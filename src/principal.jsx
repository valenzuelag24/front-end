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
      navigate('/dashboard')  
    }
  }
  return (
    <>
      <Container maxWidth="sm" >

        <Box sx={{color:"white" , height: '100vh', display:"flex", justifyContent:"center", alignItems:"center"}}>

          <Box sx={{ background: "black", width: "30vw", borderRadius: 2, p: 1 }}>
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
              <Grid size={12} sx={{display:'flex',justifyContent:"center",alignItems:"center", width:'100vw'}}>
                <Item>

                  <Button type='submit' variant="outlined" size="large" sx={{width:"20vw", color:"black", border:"1px solid black"}} onClick={enrutado} >
                    Enviar
                    
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>


      </Container>
    </>
  );
}

export default Comienzo;