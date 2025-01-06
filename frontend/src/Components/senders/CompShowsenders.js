import axios from 'axios';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { FaPlus,FaEdit } from 'react-icons/fa';
import config from '../../config/axios';


const CompShowsenders = () => {
    const [senders, setSenders] = useState([]);
      useEffect(() =>{
        getAllSenders()
      },[]);

      const getAllSenders = async () =>{
        const res = await axios.get(`${config.apiUrl}/senders`)
        setSenders(res.data)
      }

      return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <h3>Remitentes</h3>
                <Link to='/create' className='btn btn-primary mt-2 mb-2' ><FaPlus /></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Codigo Interno</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>Ciudad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {senders.map ( (sender)=>(
                            <tr key={sender.id}>
                                <td>{sender.id}</td>
                                <td>{sender.codigo_interpack}</td>
                                <td>{sender.nombre_remitente}</td>
                                <td>{sender.apellido_remitente}</td>
                                <td>{sender.direccion_remitente}</td>
                                <td>{sender.telefono_remitente}</td>
                                <td>{sender.ciudad_remitente}</td>
                                <td>
                                <Link to={`/edit/${sender.id}`} className='btn btn-info'><FaEdit /></Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
      )


  }

  export default CompShowsenders;