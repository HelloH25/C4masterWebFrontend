import { useMutation, gql } from "@apollo/client"

const APROBARPROYECTO = gql`
    mutation ApproveProject($nombre: String) {
        approveProject(nombre: $nombre)
    }
  
`
const AprobarProyecto = () => {
    const [aprobarProyecto] = useMutation(APROBARPROYECTO)

    let name

    const estado = (e) => {
        e.preventDefault()
        aprobarProyecto({variables:{
            nombre:name.value
        }})
    }
    return <div>
        <h3>Aprobar Proyecto</h3>
        <form>
            <label for="Nombre"></label>
            <input id="Nombre" ref={node => name = node} placeholder="nombre del proyecto"/>
            <button onClick={estado}>Aprobar</button>
        </form>
    </div>
} 

export default AprobarProyecto