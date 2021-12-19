import React from "react";
import { Registration } from "./components/graphql/Mutation";
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
    </div>
  );
}

export default App;
