import React from 'react'
import Autorizacion from '../../components/graphql/Mutations/AutorizarUsuario'
import EliminarUsuario from '../../components/graphql/Mutations/CRUDUsuario'
import SolicitudIngreso from '../../components/graphql/Mutations/SolicitudIngreso'
import AprobarUnion from '../../components/graphql/Mutations/UnionProyecto'
import ConsultarUsuarios from '../../components/graphql/Querys/Usuarios'


const Usuarios = () => {
    return (
        <div>
            <h2>Usuarios</h2>
             <div>
                <Autorizacion/>
            </div>
            <div>
                <SolicitudIngreso/>
            </div>
            <div>
                <AprobarUnion/>
            </div>
            <div>
                <EliminarUsuario/>
            </div>
            <div>
                <ConsultarUsuarios/>
            </div>
        </div>
    )
}

export default Usuarios
