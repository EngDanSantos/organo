import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Setor from './componentes/Setor';

function App() {

const [servidores, setServidores] = useState([])

const aoNovoServidor = (servidor) => {
  console.log(servidor)
  setServidores([...servidores, servidor])
}

  return (
    <div className="App">
      <Banner />
      <Formulario aoServidorCadastrado ={servidor => aoNovoServidor(servidor)} />
      <Setor nome ="Governo"/>
    </div>
  );
}

export default App;
