import { useMutation, gql } from "@apollo/client";











const APROBARUNIONPOYECTO = gql`
mutation SolUsuario($id: String, $nombre: String) {
    solUsuario(_id: $id, nombre: $nombre)
  }
`


const SolicitudIngreso = () => {
    const [aprobarUnionProyecto] = useMutation(APROBARUNIONPOYECTO)
    let usuario, nombre

    const suscrito = (e) => {
        e.preventDefault()
        aprobarUnionProyecto({
            variables: {
                id: usuario.value,
                nombre: nombre.value
            }
        })
    }

    return <div>
        <h3>inscripción diferentes proyectos</h3>
        <form>

            <label for="ID">Id</label>
            <input id="ID" placeholder="Id Estudiante" ref={node => usuario = node} />


            <label for="Proyecto" >Proyecto</label>
            <input id="Proyecto" placeholder="Nombre del proyecto" ref={node => nombre = node} />

            <button onClick={suscrito}>Unirme</button>

        </form>

    </div>
}


export default SolicitudIngreso