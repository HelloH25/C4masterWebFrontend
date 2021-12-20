import { useMutation, gql } from "@apollo/client";
//import { useHistory } from "react-router"

const REGISTROUSUARIO = gql`
mutation CreateUser($nom:String, $cor:String!, $iden:String, $rol:String, $estado:String, $apellido:String) {
    createUser(input:{nombre:$nom, apellido:$apellido, correo:$cor, identificacion:$iden, rol:$rol, estado:$estado }) 
  }
`   
const CREAR_PROYECTO = gql`
mutation CreateProject($nom:String, $facu:String, $lid:String) {
    createProject(project:{nombre:$nom, facultad:$facu, lider:$lid})
}
`
const AUTORIZARUSUARIOS = gql`
mutation approveUser($id: String) {
    approveUser(_id: $id)
  }
`
const UNIONPOYECTO = gql`
mutation SolUsuario($id: String, $nombre: String) {
    solUsuario(_id: $id, nombre: $nombre)
  }
`
const APROBARUNIONPOYECTO = gql`
mutation RegUsuario($id: String, $nombre: String) {
    regUsuario(_id: $id, nombre: $nombre)
  }
`

const Registration = () =>{
    
    const[registroUsuario] = useMutation(REGISTROUSUARIO)

   
    let nuevoUsuario ={
        nombre:"",
        correo:"",
        apellido:"",
        identificacion:"",
        rol:"",
        estado:""
    }
    // const registro = async(e) =>{
    //     e.preventDefault()


    // }

    return(
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                registroUsuario({variables:{
                    nom:nuevoUsuario.nombre.value,
                    apellido:nuevoUsuario.apellido.value,
                    cor:nuevoUsuario.correo.value,
                    iden:nuevoUsuario.identificacion.value,
                    estado:nuevoUsuario.estado.value,
                    rol:nuevoUsuario.rol.value,
                    

                }})
            }}>
                <input ref={node=>{nuevoUsuario.nombre = node}} placeholder="nombre"/>
                <input ref={node=>{nuevoUsuario.apellido = node}} placeholder="apellido"/>
                <input ref={node=>{nuevoUsuario.correo = node}} placeholder="correo"/>
                <input ref={node=>{nuevoUsuario.identificacion = node}} placeholder="identificacion"/>
                <input ref={node=>{nuevoUsuario.estado = node}} placeholder="estado"/>
                <input ref={node=>{nuevoUsuario.rol = node}} placeholder="rol"/>

                <button type="submit">Registrar</button>

            </form>
        </div>
    )
}

const CREAR_PROYECTO = gql`
mutation CreateProject($nom:String, $facu:String, $lid:String) {
    createProject(project:{nombre:$nom, facultad:$facu, lider:$lid})
}
`
const CrearProyecto = () => {

    //const his = useHistory()
    const [crearProyecto] = useMutation(CREAR_PROYECTO)

    // let nombre, facultad, lider

    let nuevoProyecto={
        nombre:"", 
        facultad:"", 
        lider:""
    }
    
    
    // const nueproyecto = {
    //     "nombre":nombre.value,
    //     "facultad":facultad.value,
    //     "lider":lider.value
    // }

    

    return <div>
        <form form onSubmit={e=>{
                e.preventDefault()
                crearProyecto({variables:{
                    nom:nuevoProyecto.nombre.value,
                    facu:nuevoProyecto.facultad.value,
                    lid:nuevoProyecto.lider.value
                }})
            }}>
            <div>
                <input ref={val => nuevoProyecto.nombre = val} placeholder="nombre"/>
            </div>
            <div>
                <input ref={val => nuevoProyecto.facultad = val} placeholder="facultad"/>
            </div>
            <div>
                <input ref={val => nuevoProyecto.lider = val} placeholder="lider"/>
            </div>
            <button type="submit">Crear proyecto</button>
        </form>
    </div>
}

export {
    Registration,
    CrearProyecto
}