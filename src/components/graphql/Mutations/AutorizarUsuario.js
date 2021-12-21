import { gql, useMutation } from "@apollo/client"

const AUTORIZARUSUARIOS = gql`
mutation approveUser($id: String) {
    approveUser(_id: $id)
  }
`
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

export default Autorizacion