import React from 'react'
import AprobarProyecto from '../../components/graphql/Mutations/AprobarProyecto'
import CrearProyecto from '../../components/graphql/Mutations/CreateProject'
import CambiarEstado from '../../components/graphql/Mutations/EstadoProyecto'
import Finalizar from '../../components/graphql/Mutations/FinalizarProyecto'
import ConsultarProyectos from '../../components/graphql/Querys/Proyectos'


const Proyectos = () => {
    return (
        <div>
            <h2>Proyectos</h2>
            <div>
                <CrearProyecto/>
            </div>
            <div>
                <CambiarEstado/>
            </div>
            <div>
                <Finalizar/>
            </div>
            <div>
                <AprobarProyecto/>
            </div>
            <div>
                <ConsultarProyectos/>
            </div>
        </div>
    )
}

export default Proyectos
