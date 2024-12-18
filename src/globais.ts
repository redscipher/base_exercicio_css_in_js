// importacao
import styled, { createGlobalStyle } from 'styled-components'

// estilos global
const EstiloGlobal = createGlobalStyle`
  /* resete */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }
`

// variaveis: cores
export const CORES = {
  principal: '#a7727d',
  secundaria: '#f9f5e7'
}

// CSS/SASS
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  /* responsividade: tablet */
  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

// tipos globais
export type Competencia = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

// exportacao padrao
export default EstiloGlobal
