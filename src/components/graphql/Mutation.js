import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router"
/*

deleteUser(_id: ID): User
updateUser(_id: ID, input: UserInput): User
updStateProject(nombre:String):String
approveProject(nombre:String):String
finishProject(nombre:String):String
liderUpdateProject(nombre:String, updateProject:LiderProInput):String
regAvance(nombre:String, avance:AvancesInput):proyecto
regUsuario(_id:String, nombre:String):String

*/

const REGAVANCE = gql`
`

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

const Registration = () => {

    const [registroUsuario] = useMutation(REGISTROUSUARIO)


    let nuevoUsuario = {
        nombre: "",
        correo: "",
        apellido: "",
        identificacion: "",
        rol: "",
        estado: ""
    }
    // const registro = async(e) =>{
    //     e.preventDefault()


    // }

    return (
        <div>
            <h3>registro</h3>
            <form onSubmit={e => {
                e.preventDefault()
                registroUsuario({
                    variables: {
                        nom: nuevoUsuario.nombre.value,
                        apellido: nuevoUsuario.apellido.value,
                        cor: nuevoUsuario.correo.value,
                        iden: nuevoUsuario.identificacion.value,
                        estado: nuevoUsuario.estado.value,
                        rol: nuevoUsuario.rol.value,


                    }
                })
            }}>
                <div>
                    <label>Nombre</label>
                    <input ref={node => { nuevoUsuario.nombre = node }} placeholder="nombre" />
                    <label>Apellido</label>
                    <input ref={node => { nuevoUsuario.apellido = node }} placeholder="apellido" />
                </div>
                <div>
                    <label>Correo</label>
                    <input ref={node => { nuevoUsuario.correo = node }} placeholder="correo" />
                </div>
                <div>
                    <label>Identificacion</label>
                    <input ref={node => { nuevoUsuario.identificacion = node }} placeholder="identificacion" />
                </div>
                <div>
                    <label>Estado</label>
                    <input ref={node => { nuevoUsuario.estado = node }} placeholder="estado" />
                </div>
                <div >
                    <label>rol</label>
                    <select ref={val => nuevoUsuario.rol = val}>
                        <option></option>
                        <option value="Lider">Lider</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Estudiante">Estudiante</option>
                    </select>
                </div>

                <button type="submit">Registrar</button>

            </form>
        </div>
    )
}

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

const Autorizacion = () => {
    const [autorizarUsuarios] = useMutation(AUTORIZARUSUARIOS)
    let autorizar

    return <form onSubmit={e => {
        e.preventDefault()
        autorizarUsuarios({
            variables: {
                id: autorizar.value
            }
        })
    }}>
        <input ref={val => autorizar = val} placeholder="ingrese el id del estudiante " />
        <button type="submit">autorizar</button>
    </form>
}
const SolicitudIngreso = () => {
    const [unionProyecto] = useMutation(UNIONPOYECTO)
    let usuario, nombre

    const suscrito = (e) => {
        e.preventDefault()
        unionProyecto({
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
        <h3>inscripción diferentes proyectos</h3>
        <form>

            <label for="ID">Id</label>
            <input id="ID" placeholder="Id Estudiante" ref={node => usuario = node} />


            <label for="Proyecto" >Proyecto</label>
            <input id="Proyecto" placeholder="Nombre del proyecto" ref={node => nombre = node} />

            <button onClick={aprobado}>Aprobar</button>

        </form>

    </div>
}

export {
    Registration,
    CrearProyecto,
    Autorizacion,
    SolicitudIngreso,
    AprobarUnion
}