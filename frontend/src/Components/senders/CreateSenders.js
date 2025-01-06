import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from '../../config/axios';
import BackButton from "../BackButton";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateSender = () => {
    const [codigo_interpack , setCodigo_interpack]=useState('')
    const [nombre_remitente , setNombre_remitente]=useState('')
    const [apellido_remitente , setApellido_remitente]=useState('')
    const [direccion_remitente , setDireccion_remitente]=useState('')
    const [telefono_remitente , setTelefono_remitente]=useState('')
    const [ciudad_remitente , setCiudad_remitente]=useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const handleSaveSender = async (e) => {
        e.preventDefault()
        await axios.post(`${config.apiUrl}/senders`, {
            codigo_interpack: codigo_interpack, 
            nombre_remitente: nombre_remitente,
            apellido_remitente: apellido_remitente,
            direccion_remitente: direccion_remitente,
            telefono_remitente: telefono_remitente,
            ciudad_remitente: ciudad_remitente
        })
        .then(()=>{
            toast.success('Guardado correctamente1!', { autoClose: 5000 });
           setTimeout( ()=>{             
            navigate('/')
        },3000);
        })
        .catch ((error) =>{
            toast.error('No Guardado!', {position: 'top-right',autoClose: 5000,});
        })
    }

    return(
        <div className="p-4">
            
            <BackButton/>
            <h3>Nuevo Remitente</h3>
            <form  className= "p-3" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #87CEEB', borderRadius: '5px' }}>
                <div className="mb-3">
                    <label className="form-label">Codigo Interpack</label>
                    <input
                        value={codigo_interpack}
                        onChange={ (e) => setCodigo_interpack(e.target.value)}
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
                        onChange={ (e) => setCiudad_remitente(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <button  className="btn btn-primary" onClick={handleSaveSender}>Guardar</button>
                    <ToastContainer />
                </div>
            </form>
        </div>

    )}

export default CreateSender