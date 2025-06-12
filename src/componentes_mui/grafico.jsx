import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import UsuariosTotal from '../../apis_back/usuarios';
function Grafico() {
    const [usuariosConteo, setUsuariosConteo] = useState({admin:0,cliente:0,supervisor:0});
    
    useEffect(()=>{
        const traer = async ()=>{
            
            const data = await UsuariosTotal();
            let cClientes = 0;
            let aClientes = 0;
            let sClientes = 0;
            for (let i = 0; i < data.datos.length; i++) {
                if(data.datos[i].rol == 'Administrador'){
                    aClientes +=1;
                }
                if(data.datos[i].rol == 'Cliente'){
                    cClientes +=1;
                }
                if(data.datos[i].rol == 'Supervisor'){
                    sClientes +=1;
                }
                
            }

            setUsuariosConteo({admin: aClientes, cliente: cClientes,supervisor:sClientes})
        }
        traer()
    },[]) 
    return (
        <PieChart
        series={[
            {
            data: [
                { id: 0, value: usuariosConteo.cliente, label: 'Cliente', color: '#4C5958' },
                { id: 1, value: usuariosConteo.admin, label: 'Administrador', color:'#8AA6A3' },
                { id: 2, value: usuariosConteo.supervisor, label: 'Supervisor', color:'#127369' },
                
            ],
            },
        ]}
        width={150}
        height={155}
        />
    );
}
export default Grafico