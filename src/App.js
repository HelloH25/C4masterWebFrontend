import React from "react";
import { CrearProyecto, Registration } from "./components/graphql/Mutation";
import {ConsultarProyectos,  ConsultarUsuarios } from "./components/graphql/Querys";

function App() {
  return (
    <div>
        gestor de Proyectos
        <div>
          <ConsultarProyectos/>
        </div>
        <div>
          <ConsultarUsuarios/>
        </div>
        <div>
          <Registration/>
        </div>
        <div>
          <CrearProyecto/>
        </div>
    </div>
  );
}

export default App;
