import { useMutation,gql } from "@apollo/client"

const FINALIZARPROYECTO = gql`
    mutation ApproveProject($nombre: String) {
        approveProject(nombre: $nombre)
    }
  
`
const Finalizar = () => {
    const [finalizarProyecto] = useMutation(FINALIZARPROYECTO)

    let name

    const estado = (e) => {
        e.preventDefault()
        finalizarProyecto({variables:{
            nombre:name.value
        }})
    }
    return <div>
        <h3>finalizar proyecto</h3>
        <form>
            <label for="Nombre"></label>
            <input id="Nombre" ref={node => name = node} placeholder="nombre del proyecto"/>
            <button onClick={estado}>Finalizar</button>
        </form>
    </div>
} 

export default Finalizar