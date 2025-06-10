import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';
import UsuariosTotal from '../../apis_back/usuarios';
import { useEffect, useState } from 'react';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ELIMINAR from 'C:/Trabajo_Tp/Users_Tp/front-editado/front-users/apis_back/eliminar.js';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
import MoldalConfigurarData from 'C:/Trabajo_Tp/Users_Tp/front-editado/front-users/src/modal_mui/modalConfigurarData.jsx';







function Usuario() {
    const [usuarios, setUsuarios] = useState([]);
    
    const navigate = useNavigate(); 
    const editarIr = (usuario_red,correo,nombres,documento,rol) => {
        navigate('/editar', {state:{usuario_red,correo,nombres,documento,rol}});
    };
    const [usuario, setUsuario] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = (usuario) => {
        setUsuario(usuario);
        setModalAbierto(true);
    };

    useEffect(()=>{
        const traer = async () =>{
            const data = await UsuariosTotal();
            setUsuarios(data.datos)
        }
        traer()

    },[]);

    const columns = [
    
    { field: 'usuario_red', headerName: 'Usuario', width: 130 },
    { field: 'correo', headerName: 'Correo', width: 300 },
    { field: 'nombres', headerName: 'Nombres', width: 130 },
    { field: 'documento', headerName: 'Documento', width: 130},
    { field: 'rol', headerName: 'Rol', width: 130 },
    { field: 'Configuracion'
        , headerName: 'Configuración',
        renderCell: (params) => (
        <>
            <IconButton onClick={() => ELIMINAR(params.row.usuario_red)}>
                <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => abrirModal(params.row)}>
                <ModeEditIcon />
            </IconButton>
        </>
        )
        , width: 130 },
    
    
    ];

    const rows = usuarios.map((i, index) =>({
        id: index,
        usuario_red:i.usuario_red,
        correo:i.correo,
        nombres:i.nombres,
        documento:i.documento,
        rol:i.rol
        
    }))
    

    const paginationModel = { page: 0, pageSize: 5 };

    
    return (
        
        <Paper sx={{ height: 475, width: '100%',border: '1px solid black', borderRadius:5  }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            
            sx={{ border: 0, borderRadius:5 }}
        />
        <MoldalConfigurarData
            open={modalAbierto}
            onClose={() => setModalAbierto(false)}
            usuario={usuario}
        />
        </Paper>

    );
}
export default Usuario;