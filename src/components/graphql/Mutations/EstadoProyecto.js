import { useMutation, gql } from "@apollo/client"

const ESTADOPROYECTO = gql`
    mutation UpdStateProject($nombre: String) {
        updStateProject(nombre: $nombre)
    }
`
const CambiarEstado = () => {
    const [estadoProyecto] = useMutation(ESTADOPROYECTO)

    let name

    const estado = (e) => {
        e.preventDefault()
        estadoProyecto({variables:{
            nombre:name.value
        }})
    }
    return <div>
        <h3>cambiar de estado</h3>
        <form>
            <label for="Nombre"></label>
            <input id="Nombre" ref={node => name = node} placeholder="nombre del proyecto"/>
            <button onClick={estado}>Estado</button>
        </form>
    </div>
} 

export default CambiarEstado