import axios from "axios";
import {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import config from '../../config/axios';
import BackButton from "../BackButton";

const EditSender = () => {
    const [codigo_interpack , setCodigo_interpack]=useState('')
    const [nombre_remitente , setNombre_remitente]=useState('')
    const [apellido_remitente , setApellido_remitente]=useState('')
    const [direccion_remitente , setDireccion_remitente]=useState('')
    const [telefono_remitente , setTelefono_remitente]=useState('')
    const [ciudad_remitente , setCiudad_remitente]=useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${config.apiUrl}/senders/${id}`, {
            codigo_interpack: codigo_interpack, 
            nombre_remitente: nombre_remitente,
            apellido_remitente: apellido_remitente,
            direccion_remitente: direccion_remitente,
            telefono_remitente: telefono_remitente,
            ciudad_remitente: ciudad_remitente
        })
        navigate('/')
    }

    useEffect( () =>{
        getSenderById()
    },[])

    const getSenderById = async () =>{
        const res = await axios.get(`${config.apiUrl}/senders/${id}`)
        setCodigo_interpack(res.data.codigo_interpack)
        setNombre_remitente(res.data.nombre_remitente)
        setApellido_remitente(res.data.apellido_remitente)
        setDireccion_remitente(res.data.direccion_remitente)
        setTelefono_remitente(res.data.telefono_remitente)
        setCiudad_remitente(res.data.ciudad_remitente)
    }

    return(
        <div className="p-4">
            <BackButton/>
            <h3>Modificar Remitente</h3>
            <form onSubmit={update} className= "p-3" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #87CEEB', borderRadius: '5px' }}>
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
                <button type='submit' className="btn btn-primary">Actualizar</button>
            </form>
        </div>

    )

}

export default EditSender