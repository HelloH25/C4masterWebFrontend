import {
    useQuery,
    gql
} from "@apollo/client";
import React from "react";


const USERS = gql`
    query{
        Users{
            correo
            _id
            identificacion
            nombre
            apellido
            rol
            estado   
        }
    }    
`

const PROYECTOS = gql`
 query {
     Proyectos {
         
        facultad
        lider
        nombre
        presupuesto
        aprobado
        estado 

         
     }
    
  }
`;

const ConsultarProyectos = () => {

    const { loading, error, data } = useQuery(PROYECTOS);

    if (loading) return <p>loading...</p>

    const dataTable = data.Proyectos.map(({ facultad, nombre, lider, presupuesto, aprobado, estado, }) => (

        <tr>
            <td>{facultad}</td>
            <td>{nombre}</td>
            <td>{lider}</td>
            <td>{presupuesto}</td>
            <td>{estado}</td>
            <td>{aprobado}</td>

        </tr>


    ))
    return <table>
        <thead>
            <th>Facultad</th>
            <th>Nombre</th>
            <th>Lider</th>
            <th>presupuesto</th>
            <th>estado</th>
            <th>aprobado</th>

        </thead>
        <tbody>
            {dataTable}
        </tbody>
    </table>
}

const ConsultarUsuarios = () => {
    const { loading, error, data } = useQuery(USERS);
    if (loading) return <p>loading...</p>
    const dataTable = data.Users.map(({ nombre, apellido, correo, identificacion, rol, estado, _id }) => (

        <tr key={correo}>
            <td>{nombre} {apellido}</td>
            <td>{correo}</td>
            <td>{identificacion}</td>
            <td>{rol}</td>
            <td>{estado}</td>
            <td>{_id}</td>
            <td>
                <button>posible autorizacion</button>
            </td>


        </tr>

    ))
    return <table>
        <thead>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Identificacion</th>
            <th>Rol</th>
            <th>Estado</th>
        </thead>
        <tbody>
            {dataTable}
        </tbody>

    </table>
}



export {
    ConsultarProyectos,
    ConsultarUsuarios
}