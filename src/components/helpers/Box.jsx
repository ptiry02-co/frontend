import styled from 'styled-components'

const Box = ({ children, isModal = false }) => {
  return <Container isModal={isModal}>{children}</Container>
}

export default Box

const Container = styled.div`
  position: ${({ isModal }) => (isModal ? 'absolute' : 'relative')};
  align-self: center;
  margin-top: ${({ isModal }) => (isModal ? '10%' : 0)};
  padding: 30px 7%;
  border: 1px solid black;
  border-radius: 30px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: white;
  z-index: ${({ isModal }) => (isModal ? 1 : 0)};
  background-color: ${({ isModal }) => (isModal ? 'white' : '#D9D9D9')};
  > * {
    align-self: center;
  }
  > p {
    margin-bottom: 15px;
  }
`
