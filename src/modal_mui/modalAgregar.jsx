import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import {  useState } from 'react';
import AGREGAR from 'C:/Trabajo_Tp/Users_Tp/front-editado/front-users/apis_back/agregar.js'

import PersonAddIcon from '@mui/icons-material/PersonAdd';
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

function ModalAgregar() {

    
    const [usuario_red, setUsuario_red]= useState('');
    const [correo, setCorreo]= useState('');
    const [nombres, setNombres]= useState('');
    const [documento, setDocumento]= useState('');
    const [contrasenna, setContrasenna]= useState('');
    const [rol, setRol]= useState('');
    

    const handleChange = (event) => {
      setRol(event.target.value);
    };



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    
    <div>
      <Button onClick={handleOpen}sx={{color:'gray'}} >
        <PersonAddIcon sx={{fontSize:50}}></PersonAddIcon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Usuario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Usuario_Red" variant="outlined" value={usuario_red} onChange={(e)=> setUsuario_red(e.target.value)} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Correo" variant="outlined" type='email' value={correo} onChange={(e)=> setCorreo(e.target.value)} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Nombres" variant="outlined"  value={nombres} onChange={(e)=> setNombres(e.target.value)} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Documento" variant="outlined" type='number'  value={documento} onChange={(e)=> setDocumento(e.target.value)} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Contraseña" variant="outlined" type="password" autoComplete="current-password" value={contrasenna} onChange={(e)=> setContrasenna(e.target.value)} />
          </Typography>
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



          <Typography id="modal-modal-title" variant="h6" component="h2">
           <Button   onClick={() => AGREGAR(usuario_red,correo,nombres,documento,contrasenna,rol)+  handleClose()} >Enviar</Button>
          </Typography>
          
        </Box>
      </Modal>
      
    </div>
  );
}
export default ModalAgregar;