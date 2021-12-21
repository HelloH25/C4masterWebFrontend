import { useMutation, gql } from "@apollo/client"

const REGISTROAVANCES = gql`
mutation RegAvance($nombre: String, $title:String, $desC:String) {
    regAvance(nombre: $nombre, avance: {titulo:$title, descripcion:$desC})
  }
`

const Avances = () => {
    const [registroAvances] = useMutation(REGISTROAVANCES)
    let titulo, nom, descripcion
    const registrar = (e) => {
        e.preventDefault()
        registroAvances({
            variables: {
                nombre: nom.value,
                avance: {
                    title: titulo.value,
                    desC: descripcion.value
                }
            }
        })
    }
    return <div>
        <h3>Avances</h3>
        <form>
            <div>
                <label for="name">Nombre del proyecto</label>
                <input id="name" ref={node => nom = node} />
            </div>
            <div>
                <label for="titulo">Titulo del avance</label>
                <input id="titulo" ref={node => titulo = node} />
            </div>
            <div>
                <textarea id="descripcion" ref={node => descripcion = node} placeholder="descripcion del avance" />
            </div>
            <button onClick={registrar}>listo</button>
        </form>
    </div>
}

export default Avances