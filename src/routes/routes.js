
import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout'

import Profile from "../page/admin/Profile"
import Proyectos from "../page/admin/Proyectos"
import Usuarios from "../page/admin/Usuarios"




const Rutas = () => {
    return (
        
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path='/Proyectos' element={<Proyectos />} />
                    <Route path='/Usuarios' element={<Usuarios />} />
                    <Route path='/Profile' element={<Profile />} />
                </Route>
            </Routes>
        
    )
}

export default Rutas