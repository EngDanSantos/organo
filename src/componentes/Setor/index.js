import Servidor from '../Servidor/Servidor'
import './Setor.css'

const Setor = (props) =>{
    return(
       (props.servidores.length > 0) && <section className='setor' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='servidores'>
                {props.servidores.map(servidor => <Servidor corDeFundo = {props.corPrimaria}key={servidor.nome} nome={servidor.nome} cargo={servidor.cargo} imagem={servidor.imagem}/>)}
            </div>
        </section>
    )
}


export default Setor