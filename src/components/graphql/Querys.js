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
         
     }
    
  }
`;

const ConsultarProyectos = () => {

    const { loading, error, data } = useQuery(PROYECTOS);

    if (loading) return <p>loading...</p>

    const dataTable = data.Proyectos.map(({ facultad, nombre, lider }) => (

        <tr>
            <td>{facultad}</td>
            <td>{nombre}</td>
            <td>{lider}</td>
        </tr>


    ))
    return <table>
        <thead>
            <th>Facultad</th>
            <th>Nombre</th>
            <th>Lider</th>
        </thead>
        {dataTable}
    </table>
}

const ConsultarUsuarios = () => {
    const { loading, error, data } = useQuery(USERS);
    if (loading) return <p>loading...</p>
    const dataTable = data.Users.map(({ nombre, apellido, correo, identificacion, rol, estado }) => (

        <tr key={correo}>
            <td>{nombre} {apellido}</td>
            <td>{correo}</td>
            <td>{identificacion}</td>
            <td>{rol}</td>
            <td>{estado}</td>

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
        {dataTable}
    </table>
}



export {
    ConsultarProyectos,
    ConsultarUsuarios
}