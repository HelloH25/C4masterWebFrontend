import { useMutation, gql } from "@apollo/client"



const CREAR_PROYECTO = gql`
mutation CreateProject($nom:String, $facu:String, $lid:String) {
    createProject(project:{nombre:$nom, facultad:$facu, lider:$lid})
}
`
const CrearProyecto = () => {

    //const his = useHistory()
    const [crearProyecto] = useMutation(CREAR_PROYECTO)

    // let nombre, facultad, lider

    let nuevoProyecto = {
        nombre: "",
        facultad: "",
        lider: ""
    }


    // const nueproyecto = {
    //     "nombre":nombre.value,
    //     "facultad":facultad.value,
    //     "lider":lider.value
    // }



    return <div>
        <h3>crear proyectos</h3>
        <form form onSubmit={e => {
            e.preventDefault()
            crearProyecto({
                variables: {
                    nom: nuevoProyecto.nombre.value,
                    facu: nuevoProyecto.facultad.value,
                    lid: nuevoProyecto.lider.value
                }
            })
        }}>
            <div>
                <input ref={val => nuevoProyecto.nombre = val} placeholder="nombre" />
            </div>
            <div>
                <input ref={val => nuevoProyecto.facultad = val} placeholder="facultad" />
            </div>
            <div>
                <input ref={val => nuevoProyecto.lider = val} placeholder="lider" />
            </div>
            <button type="submit">Crear proyecto</button>
        </form>
    </div>
}

export default CrearProyecto