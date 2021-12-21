import React from "react";
import {Router, Routes,Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Profile from "./page/admin/Profile";
import Proyectos from "./page/admin/Proyectos";
import Usuarios from "./page/admin/Usuarios";
import Rutas from "./routes/routes";



function App() {
  return (
    <div>
      <Rutas/>  
    </div>
  );
}

export default App;
