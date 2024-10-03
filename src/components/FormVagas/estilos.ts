// importacoes
import styled from 'styled-components'

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
const Entrada = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
const Botao = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
// exportacoes
export default Formulario
export { Formulario, Entrada, Botao }
