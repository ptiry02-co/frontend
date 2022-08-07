import styled from 'styled-components'

const Box = ({ children }) => {
  return <Container>{children}</Container>
}

export default Box

const Container = styled.div`
  position: absolute;
  align-self: center;
  margin-top: 10%;
  padding: 30px 3%;
  border: 1px solid black;
  border-radius: 30px;
  width: 25%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: white;
  z-index: 1;
  > * {
    align-self: center;
  }
  > p {
    margin-bottom: 15px;
  }
`
