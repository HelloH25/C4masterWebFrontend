import {useMutation, gql} from "@apollo/client"

const BORRARUSUARIO = gql`
mutation DeleteUser($id: ID) {
    deleteUser(_id: $id) {
      _id
      correo
      identificacion
      nombre
      apellido
      rol
      estado
    }
}
`
const EliminarUsuario = () => {
    const [borrarUsuario] = useMutation(BORRARUSUARIO)
    let codigo 
    const borrar = (e) =>{
        e.preventDefault()
        borrarUsuario({
            id:codigo.value
        })
    }

    return <div>
        <label for="usuario">Eliminar Usuario</label>
        <input id="usuario" ref={node=> codigo = node }/>
        <button onClick={borrar}>Eliminar</button>
    </div>
}

export default EliminarUsuario