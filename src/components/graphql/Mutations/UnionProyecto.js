import { gql, useMutation } from "@apollo/client"



const APROBARUNIONPOYECTO = gql`
mutation RegUsuario($id: String, $nombre: String) {
    regUsuario(_id: $id, nombre: $nombre)
  }
`
const AprobarUnion = () => {
    const [aprobarUnionProyecto] = useMutation(APROBARUNIONPOYECTO)
    let usuario, nombre

    const aprobado = (e) => {
        e.preventDefault()
        aprobarUnionProyecto({
            variables: {
                id: usuario.value,
                nombre: nombre.value
            }
        })
    }

    return <div>
        <h3>aprobar inscripción proyectos</h3>
        <form>

            <label for="ID">Id</label>
            <input id="ID" placeholder="Id Estudiante" ref={node => usuario = node} />


            <label for="Proyecto" >Proyecto</label>
            <input id="Proyecto" placeholder="Nombre del proyecto" ref={node => nombre = node} />

            <button onClick={aprobado}>Aprobar</button>

        </form>

    </div>
}

export default AprobarUnion