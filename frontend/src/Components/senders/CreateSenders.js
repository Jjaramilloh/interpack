import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from '../../config/axios';
import BackButton from "../BackButton";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateSender = () => {
    const [dni_remitente , setDni_remitente]=useState('')
    const [nombre_remitente , setNombre_remitente]=useState('')
    const [apellido_remitente , setApellido_remitente]=useState('')
    const [direccion_remitente , setDireccion_remitente]=useState('')
    const [telefono_remitente , setTelefono_remitente]=useState('')
    const [ciudad_remitente , setCiudad_remitente]=useState('')
    const [cityOptions, setCityOptions]= useState([])
    const navigate = useNavigate()

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


    //procedimiento guardar
    const handleSaveSender = async (e) => {
        e.preventDefault()

        // Verificar si el DNI ya existe
        const resCheck = await axios.get(`${config.apiUrl}/senders/valida_remitente/${dni_remitente}`);
        if (resCheck.data.exists) {
            toast.error('El DNI ya existe.', { position: 'bottom-right', autoClose: 5000 });
            return; // Detener la ejecución si el DNI ya existe
        }

        // Verificar si la ciudad existe 
        const resCityCheck = await axios.get(`${config.apiUrl}/cities/city2/${ciudad_remitente}`);
        if (!resCityCheck.data.exists) {
            toast.error('La ciudad no existe.', { position: 'bottom-right', autoClose: 5000 });
            return; // Detener la ejecución si la ciudad no existe
        }

        // Si el DNI no existe, proceder a guardar
        try {
            const res = await axios.post(`${config.apiUrl}/senders/`, {
                dni_remitente,
                nombre_remitente,
                apellido_remitente,
                direccion_remitente,
                telefono_remitente,
                ciudad_remitente
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

    return(
        <div className="p-4">
            
            <BackButton/>
            <h3>Nuevo Remitente</h3>
            <form  className= "p-3" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #87CEEB', borderRadius: '5px' }}>
                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input
                        value={dni_remitente}
                        onChange={ (e) => {
                            setDni_remitente(e.target.value)
                            //checkDni(e.target.value);
                        }}
                        type="text"
                        className="form-control"
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
                <div>
                    <button  className="btn btn-primary" onClick={handleSaveSender}>Guardar</button>
                    <ToastContainer />
                </div>
            </form>
        </div>

    )}

export default CreateSender