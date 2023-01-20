import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos para criar o card do personagem</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do personagem" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Especialidade" 
                    placeholder="Infrome a especialidade" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado = {valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Casa" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario