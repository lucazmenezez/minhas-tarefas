import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eeeeee;
  height: 100vh;

  @media (max-width: 767px) {
    height: 70vh;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
