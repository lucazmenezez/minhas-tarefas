import { FormEvent, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { BotaoSalvar, Campo, Main, Titulo } from '../../styles'
import { Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )

    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <Main>
        <Titulo>Nova Tarefa</Titulo>
        <Form onSubmit={cadastrarTarefa}>
          <Campo
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Título"
          />
          <Campo
            value={descricao}
            onChange={({ target }) => setDescricao(target.value)}
            as="textarea"
            placeholder="Descrição da tarefa"
          />
          <Opcoes>
            <p>Prioridade</p>

            {Object.values(enums.Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  onChange={(evento) =>
                    setPrioridade(evento.target.value as enums.Prioridade)
                  }
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </Main>
    </>
  )
}

export default Formulario
