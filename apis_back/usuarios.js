import axios from 'axios';

const UsuariosTotal = async () => {
    try {
        const res = await axios.get("http://localhost:3000/database", {
            withCredentials: true
        });
        
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            
            return undefined;
        }
        
        return undefined;
    }
};

export default UsuariosTotal;