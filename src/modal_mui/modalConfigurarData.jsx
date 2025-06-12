import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import EDITAR from 'C:/Trabajo_Tp/Users_Tp/front-editado/front-users/apis_back/edita.js'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {

    position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
};

function MoldalConfigurarData({ open, onClose, usuario }) {
         const [usuario_red, setUsuario_red]= useState('');
         const [correo, setCorreo]= useState('');
         const [nombres, setNombres]= useState('');
         const [documento, setDocumento]= useState('');
         const [contrasenna, setContrasenna]= useState('');
         const [rol, setRol]= useState('');

          const handleChange = (event) => {
               setRol(event.target.value);
          };

    
         useEffect(() => {
              if (usuario) {
                       setUsuario_red(usuario.usuario_red || '');
                       setCorreo(usuario.correo || '');
                       setNombres(usuario.nombres || '');
                       setDocumento(usuario.documento || '');
                       setRol(usuario.rol || '');
                       setContrasenna('');
              }
         }, [usuario]);

         return (
            <Modal open={open} onClose={onClose}>
              <Box sx={style}>
                   <Typography variant="h6">Modificar Usuario</Typography>

                   <TextField sx={{ mt: 2, width:'90%' }} label="Usuario_Red" value={usuario_red} onChange={(e)=> setUsuario_red(e.target.value)} />
                   <TextField sx={{ mt: 2, width:'90%' }} label="Correo" value={correo} onChange={(e)=> setCorreo(e.target.value)} />
                   <TextField sx={{ mt: 2, width:'90%' }} label="Nombres" value={nombres} onChange={(e)=> setNombres(e.target.value)} />
                   <TextField sx={{ mt: 2, width:'90%' }} label="Documento" type='number' value={documento} onChange={(e)=> setDocumento(e.target.value)} />
                   <TextField sx={{ mt: 2, width:'90%' }} label="Contraseña" type="password" autoComplete="current-password" value={contrasenna} onChange={(e)=> setContrasenna(e.target.value)} />
                   <Typography id="modal-modal-description" sx={{ mt: 2}}>
                    <FormControl  sx={{width:"90%"}} >
                    <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={rol}
                         label="Rol"
                         onChange={handleChange}
                    >
                         <MenuItem value={'Cliente'}>Cliente</MenuItem>
                         <MenuItem value={'Administrador'}>Administrador</MenuItem>
                         <MenuItem value={'Supervisor'}>Supervisor</MenuItem>
                    </Select>
                    </FormControl>
                    </Typography>

                   <Button sx={{ mt: 2 }} onClick={() => {
                       EDITAR(usuario_red,correo,nombres,documento,contrasenna,rol);
                       onClose();
                   }}>Enviar</Button>
              </Box>
            </Modal>
         );
}
export default MoldalConfigurarData;
