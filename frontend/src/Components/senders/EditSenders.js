import axios from "axios";
import {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import config from '../../config/axios';
import BackButton from "../BackButton";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toggleSwitch.css'

const EditSender = () => {
    const [dni_remitente , setDni_remitente]=useState('')
    const [nombre_remitente , setNombre_remitente]=useState('')
    const [apellido_remitente , setApellido_remitente]=useState('')
    const [direccion_remitente , setDireccion_remitente]=useState('')
    const [telefono_remitente , setTelefono_remitente]=useState('')
    const [ciudad_remitente , setCiudad_remitente]=useState('')
    const [cityOptions, setCityOptions]= useState([])
    const [activo ,setActivo]=useState(true)
    const navigate = useNavigate()
    const {id} = useParams()

    //manejar la busqueda por ciudad
    const handleCitySearch = async (query) => {
        if (query.length > 2) {  // Evitar llamadas en cada pulsación
            try {
                const res = await axios.get(`${config.apiUrl}/cities/city/${query}`);
                setCityOptions(res.data);  // Supone que el backend devuelve un array de ciudades
            } catch (error) {
                console.error('Error buscando ciudades:', error);
            }
        } else {
            setCityOptions([]);  // Limpiar opciones si la entrada es corta
        }
    };

    const handleSuggestionClick = (city) => {
        setCiudad_remitente(city.ciudad); // Assuming 'ciudad' is the name field
        setCityOptions([]);
    };

    //procedimiento actualizar
    const handleUpdateSender = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${config.apiUrl}/senders/${id}`, {
                dni_remitente,
                nombre_remitente,
                apellido_remitente,
                direccion_remitente,
                telefono_remitente,
                ciudad_remitente,
                activo
            });

            // Mostrar mensaje de éxito
            toast.success(res.data.message, {position:'bottom-right', autoClose: 3000 });

            // Navegar después de un retraso
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            // Manejar errores y mostrar mensaje de error
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message, { position:'bottom-right', autoClose: 5000 });
            } else {
                toast.error('Error inesperado. Intenta de nuevo.', { position:'bottom-right', autoClose: 5000 });
            }
        }
    }

    useEffect( () =>{
        getSenderById()
    },[])

    const getSenderById = async () =>{
        try{
            const res = await axios.get(`${config.apiUrl}/senders/${id}`)
            setDni_remitente(res.data.dni_remitente)
            setNombre_remitente(res.data.nombre_remitente)
            setApellido_remitente(res.data.apellido_remitente)
            setDireccion_remitente(res.data.direccion_remitente)
            setTelefono_remitente(res.data.telefono_remitente)
            setCiudad_remitente(res.data.ciudad_remitente)
            setActivo(res.data.activo)          

        
        } catch (error) {
        toast.error('Error al cargar los datos del remitente.', { position: 'bottom-right', autoClose: 5000 });
    }

    }

    return(
        <div className="p-4">
            <BackButton/>
            <h3>Modificar Remitente</h3>
            <form className= "p-3" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #87CEEB', borderRadius: '5px' }}>
                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input
                        value={dni_remitente}
                        onChange={ (e) => setDni_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre_remitente}
                        onChange={ (e) => setNombre_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input
                        value={apellido_remitente}
                        onChange={ (e) => setApellido_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input
                        value={direccion_remitente}
                        onChange={ (e) => setDireccion_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        value={telefono_remitente}
                        onChange={ (e) => setTelefono_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ciudad</label>
                    <input
                        value={ciudad_remitente}
                        onChange={ (e) => {
                            setCiudad_remitente(e.target.value)
                            handleCitySearch(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                    {cityOptions.length > 0 && (
                        <ul className="list-group">
                            {cityOptions.map((city, index) => (
                                <li 
                                    key={index} 
                                    className="list-group-item" 
                                    onClick={() => handleSuggestionClick(city)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {city.ciudad}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mb-3">
                    <label >
                    Estado 
                    <div className="switch">
                        <input
                            checked={activo}
                            onChange={ (e) => setActivo(e.target.checked)}
                            type="checkbox"
                            className="form-check-input"
                        />
                        <span className="slider round"></span>
                    </div>
                    </label>
                </div>
                <button className="btn btn-primary" onClick={handleUpdateSender}>Actualizar</button>
                <ToastContainer />
            </form>
        </div>

    )

}

export default EditSender