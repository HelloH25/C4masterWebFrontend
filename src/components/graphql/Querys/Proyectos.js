import { gql, useQuery } from "@apollo/client";


const PROYECTOS = gql`
 query {
     Proyectos {
         
        facultad
        lider
        nombre
        presupuesto
        aprobado
        estado 

         
     }
    
  }
`;

const ConsultarProyectos = () => {

    const { loading, error, data } = useQuery(PROYECTOS);

    if (loading) return <p>loading...</p>

    const dataTable = data.Proyectos.map(({ facultad, nombre, lider, presupuesto, aprobado, estado, }) => (

        <tr>
            <td>{facultad}</td>
            <td>{nombre}</td>
            <td>{lider}</td>
            <td>{presupuesto}</td>
            <td>{estado}</td>
            <td>{aprobado}</td>

        </tr>


    ))
    return <table>
        <thead>
            <th>Facultad</th>
            <th>Nombre</th>
            <th>Lider</th>
            <th>presupuesto</th>
            <th>estado</th>
            <th>aprobado</th>

        </thead>
        <tbody>
            {dataTable}
        </tbody>
    </table>
}

export default ConsultarProyectos