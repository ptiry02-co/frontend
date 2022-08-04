import styled from 'styled-components'

const Box = ({ children }) => {
  return <Container>{children}</Container>
}

export default Box

const Container = styled.div`
  align-self: center;
  margin-top: 20vh;
  padding: 30px 3%;
  border: 1px solid black;
  border-radius: 30px;
  width: 20%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
