import Servidor from '../Servidor/Servidor'
import './Setor.css'

const Setor = (props) =>{
    return(
        <section className='setor' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Servidor></Servidor>
        </section>
    )
}


export default Setor