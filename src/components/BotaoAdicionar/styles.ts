import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const EstiloBotao = styled(Link)`
  background-color: ${variaveis.verde};
  color: #fff;
  height: 64px;
  width: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
