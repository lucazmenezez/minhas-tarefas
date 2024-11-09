import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  /* Garantir que o html e body ocupem 100% da altura da tela */
  html, body {
    height: 100%;
    overflow-y: auto;  /* Permitir rolagem somente na página inteira */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 100%;
    overflow: hidden;
  }
`

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 767px) {
    height: 100%;
    padding: 20px;
  }
`

export const Titulo = styled.h2`
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  background-color: #ffffff;
  border-color: #666666;
  border-radius: 8px;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
