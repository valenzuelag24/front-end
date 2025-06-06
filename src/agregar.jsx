import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AGREGAR from '../apis_back/agregar'

function Agregar() {
    const [usuario_red, setUsuario_red]= useState('');
    const [correo, setCorreo]= useState('');
    const [nombres, setNombres]= useState('');
    const [documento, setDocumento]= useState('');
    const [contrasenna, setContrasenna]= useState('');
    const [rol, setRol]= useState('');
    return(
        <Container maxWidth='sm'>

            <Box sx={{color:"white" , height: '100vh', display:"flex", justifyContent:"center", alignItems:"center"}}>

                <Box sx={{width:"30vw", background:"black" }} >

                <Grid container spacing={2} >

                    <Grid size={12} >
                        <Box sx={{ background:'white' , color:'black', p:1, textAlign:'center'}} >Agregar</Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="Usuario_red" 
                            type="search" 
                            value={usuario_red}
                            onChange={(e) => setUsuario_red(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="correo" 
                            type="search" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="nombres" 
                            type="search" 
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="documento" 
                            type="search" 
                            value={documento}
                            onChange={(e) => setDocumento(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="contraseña" 
                            type="search" 
                            value={contrasenna}
                            onChange={(e) => setContrasenna(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    <Grid size={12} p={1} >
                        <Box sx={{ background:'white', p:1, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:2, height:"7vh"}} >
                            <TextField 
                            
                            label="rol" 
                            type="search" 
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                            sx={{width:"25vw"}}/>
                        </Box>
                    </Grid>
                    
                    <Grid size={12} sx={{display:'flex',justifyContent:"center",alignItems:"center", width:'100vw'}}>
                        

                        <Button type='submit' variant="outlined" size="large" sx={{width:"20vw",background:"white", color:"black", border:"1px solid black"}} onClick={()=> AGREGAR(usuario_red,correo,nombres,documento,contrasenna,rol)}  >
                            Enviar
                            
                        </Button>
                        
                    </Grid>
                </Grid>

                </Box>
            </Box>

        </Container>

        

    );
}
export default Agregar;