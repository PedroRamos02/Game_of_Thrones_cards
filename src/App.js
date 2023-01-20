import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Times';


function App() {

  const times = [
    {
      nome:'',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome:'Baratheon',
      corPrimaria: '#000000',
      corSecundaria: '#DBB600'
    },
    {
      nome: 'Targaryen',
      corPrimaria: '#ec2424',
      corSecundaria: '#000000'
    },
    {
      nome: 'Lannister',
      corPrimaria: '#DAA520',
      corSecundaria: '#7B0000'
    },
    {
      nome: 'Stark',
      corPrimaria: '#808080',
      corSecundaria: '#D0D1D3'
    },
    {
      nome: 'Greyjoy',
      corPrimaria: '#DAA520',
      corSecundaria: '#000000'
    },
    {
      nome: 'Tyrell',
      corPrimaria: '#FDED00',
      corSecundaria: '#6BD14F'
    },
    {
      nome: 'Martell',
      corPrimaria: '#A50F34',
      corSecundaria: '#D19300'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
