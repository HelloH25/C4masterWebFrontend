import React from "react";
import { AprobarUnion, Autorizacion, CrearProyecto, Registration, SolicitudIngreso } from "./components/graphql/Mutation";
import {ConsultarProyectos,  ConsultarUsuarios } from "./components/graphql/Querys";

function App() {
  return (
    <div>
        gestor de Proyectos
        <div>
          <h2>proyectos</h2>
          <CrearProyecto/>
        </div>
        <div>
          <ConsultarProyectos/>
        </div>
        <h2>Usuarios</h2>
        <div>
          <Registration/>
        </div>
        <div>
          <Autorizacion/>
        </div>
        <div>
          <ConsultarUsuarios/>
        </div>
        <div>
          <SolicitudIngreso/>
        </div>
        <div>
          <AprobarUnion/>
        </div>
    </div>
  );
}

export default App;
