import React from 'react'
import UpUsuario from '../../components/graphql/Mutations/ActualizarUsuario'


const Profile = () => {
    return (
        <div>
            <h2>Perfil</h2>
            <div>
                <UpUsuario/>
            </div>
        </div>
    )
}

export default Profile
