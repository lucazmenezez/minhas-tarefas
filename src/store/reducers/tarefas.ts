import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const sliceTarefas = createSlice({
  name: 'sliceTarefas',
  initialState: [
    new Tarefa(
      'Estudar Web Design',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar Backend',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Terminar curso de full stack para pegar certificado',
      2
    ),
    new Tarefa(
      'Ir treinar',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'ir para o jiu-jitsu',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = sliceTarefas.actions
export default sliceTarefas.reducer
