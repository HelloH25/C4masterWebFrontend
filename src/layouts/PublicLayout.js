import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const PublicLayout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/Proyectos'>Productos</Link>
                </li>
                <li>
                    <Link to='/Usuarios'>Usuarios</Link>
                </li>
                <li>
                    <Link to='/Profile'>Profile</Link>
                </li>
            </ul>
            <Outlet />

        </div>
    )
}

export default PublicLayout
