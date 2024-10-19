import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange ={evento => props.aoAlterado(evento.target.value)} required={props.required} value = {props.value}>
                {props.setores.map(setor => {
                    return <option key={setor}>{setor}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa