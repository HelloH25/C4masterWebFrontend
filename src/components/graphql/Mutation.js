import { useMutation, gql } from "@apollo/client";

const REGISTROUSUARIO = gql`
mutation CreateUser($nom:String, $cor:String!, $iden:String, $rol:String, $estado:String, $apellido:String) {
    createUser(input:{nombre:$nom, apellido:$apellido, correo:$cor, identificacion:$iden, rol:$rol, estado:$estado }) 
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

export {Registration}