import { useMutation, gql  } from "@apollo/client"


const ACTUAUSUARIO = gql`
mutation UpdateUser($id: String, $email:String, $name:String, $lastName:String, $identificacion:String) {
    updateUser(_id: $id, input: {nombre:$name, apellido:$lastName, correo:$email, identifiacion:$identificacion})
  }
  `
const UpUsuario = () =>{
    const [actuaUsuario] = useMutation(ACTUAUSUARIO)
    let nombre, correo, apellido, identificacion, id

    const actualizar = (e) => {
        e.preventDefault()
        actuaUsuario({variables:{
            id:id.value,
            input:{
                name:nombre.value,
                lastName:apellido.value,
                email:correo.value,
                identificacion:identificacion.value
            }
        }
        })
    }
    return <div>
        <h3>Actualizar datos</h3>
        <form>
            <div>
            <label for="id" >id</label>
            <input id="id" ref={node => id = node} ></input>
            </div>
            <div>
            <label for="nombre" >nombre</label>
            <input id="nombre"  ref={node =>nombre = node}></input>
            </div>
            <div>
            <label for="apellido" >apellido</label>
            <input id="apellido" ref={node =>apellido = node} ></input>
            </div>
            <div>
            <label for="correo" >correo</label>
            <input id="correo"  ref={node =>correo =node}></input>
            </div>
            <div>
            <label for="identificacion" >identificacion</label>
            <input id="identificacion"  ref={node =>identificacion =node}></input>
            </div>
            <button onClick={actualizar}>Actualizar</button>

        </form>
    </div>
}

export default UpUsuario