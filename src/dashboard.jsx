import Box from '@mui/material/Box';
import UsuariosTotal from '../apis_back/usuarios';
import Button from '@mui/material/Button';

function Dashboard() {
  const ver = async () => {
    const data = await UsuariosTotal();
    console.log("Usuarios:", data); 
  };

  return (
    <Box sx={{ background: "red", height: "50vh" }}>
      <Button variant="outlined" size="large" onClick={ver}>
        Obtener usuarios
      </Button>
    </Box>
  );
}

export default Dashboard;