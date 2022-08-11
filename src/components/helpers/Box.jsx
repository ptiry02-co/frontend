import styled from 'styled-components'

const Box = ({ children, isModal = false }) => {
  return <Container isModal={isModal}>{children}</Container>
}

export default Box

const Container = styled.div`
  position: ${({ isModal }) => (isModal ? 'fixed' : 'relative')};
  height: ${({ isModal }) => (isModal ? 'auto' : '100%')};
  width: ${({ isModal }) => (isModal ? 'auto' : '100%')};
  margin: 0 5%;
  align-self: center;
  text-align: center;
  top: ${({ isModal }) => (isModal ? '10%' : 'auto')};
  padding: 30px 7%;
  max-width: ${({ isModal }) => (isModal ? '40%' : '100%')};
  border: 1px solid black;
  border-radius: 30px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isModal }) => (isModal ? 'flex-sart' : 'space-between')};
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
