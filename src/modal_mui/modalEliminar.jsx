import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import TextField from '@mui/material/TextField';
import {  useState } from 'react';
import ELIMINAR from '../../apis_back/eliminar';

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

function ModalEliminar() {
    const [usuarioEliminar, setUsuarioEliminar] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    console.log('modal,Eliminar'),
    <div>
      <Button onClick={handleOpen}sx={{color:'gray'}} >
        <PersonRemoveIcon sx={{fontSize:50}}   >  
                                            
                                            
        </PersonRemoveIcon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Eliminar Usuario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField sx={{ width:'90%' }} id="outlined-basic" label="Usuario_Red" variant="outlined" value={usuarioEliminar} onChange={(e)=> setUsuarioEliminar(e.target.value)} />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <Button   onClick={() => ELIMINAR(usuarioEliminar)+  handleClose()} >ELIMINAR</Button>
          </Typography>
          
        </Box>
      </Modal>
      
    </div>
  );
}
export default ModalEliminar;