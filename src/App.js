import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Setor from './componentes/Setor';

function App() {

const setores = [
  {
    nome: 'Governo',
    corPrimaria: '#57C278',
    corSecundraia: '#D9F7E9',
  },
  {
    nome: 'Educação',
    corPrimaria: '#82CFFA',
    corSecundraia: '#E8F8FF',
  } ,
  {
    nome: 'Planejamento',
    corPrimaria: '#A6D157',
    corSecundraia: '#F0F8E2',
  } ,
  {
    nome: 'Saúde',
    corPrimaria: '#E06B69',
    corSecundraia: '#FDE7E8',
  },
   {
    nome: 'Meio Ambiente/Defesa Civil',
    corPrimaria: '#D86EBF',
    corSecundraia: '#FAE5F5',
  },
   {
    nome: 'Obras e Serviços Públicos',
    corPrimaria: '#FEBA05',
    corSecundraia: '#FFF5D9',
  },
   {
    nome: 'Agricultura',
    corPrimaria: '#FF8A29',
    corSecundraia: '#FFEEDF',
  }
]

const [servidores, setServidores] = useState([])

const aoNovoServidor = (servidor) => {
  console.log(servidor)
  setServidores([...servidores, servidor])
}

  return (
    <div className="App">
      <Banner />
      <Formulario  setores = {setores.map(setor => setor.nome)} aoServidorCadastrado ={servidor => aoNovoServidor(servidor)} />
      {setores.map(setor => <Setor key={setor.nome} nome={setor.nome} corPrimaria={setor.corPrimaria} corSecundraia={setor.corSecundraia}/>)}
    </div>
  );
}

export default App;
