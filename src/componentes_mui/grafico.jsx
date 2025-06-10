import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import UsuariosTotal from '../../apis_back/usuarios';
function Grafico() {
    const [usuariosConteo, setUsuariosConteo] = useState({admin:0,cliente:0});
    
    useEffect(()=>{
        const traer = async ()=>{
            
            const data = await UsuariosTotal();
            let cClientes = 0;
            let aClientes = 0;
            for (let i = 0; i < data.datos.length; i++) {
                if(data.datos[i].rol == 'admin'){
                    aClientes +=1;
                }
                if(data.datos[i].rol == 'cliente'){
                    cClientes +=1;
                }
                
            }

            setUsuariosConteo({admin: aClientes, cliente: cClientes})
        }
        traer()
    },[]) 
    return (
        <PieChart
        series={[
            {
            data: [
                { id: 0, value: usuariosConteo.cliente, label: 'cliente', color: '#4C5958' },
                { id: 1, value: usuariosConteo.admin, label: 'admin', color:'#8AA6A3' },
                
            ],
            },
        ]}
        width={150}
        height={155}
        />
    );
}
export default Grafico