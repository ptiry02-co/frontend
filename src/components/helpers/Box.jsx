import styled from 'styled-components'

const Box = ({ children, isModal = false }) => {
  return <Container isModal={isModal}>{children}</Container>
}

export default Box

const Container = styled.div`
  position: ${({ isModal }) => (isModal ? 'fixed' : 'relative')};
  height: ${({ isModal }) => (isModal ? 'auto' : '100%')};
  width: ${({ isModal }) => (isModal ? '95%' : '100%')};
  align-self: center;
  text-align: center;
  top: ${({ isModal }) => (isModal ? '10%' : 'auto')};
  padding: 30px 5px;
  max-width: ${({ isModal }) => (isModal ? 'auto' : '100%')};
  border: 1px solid black;
  border-radius: 30px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isModal }) => (isModal ? 'flex-sart' : 'space-between')};
  row-gap: 10px;
  z-index: ${({ isModal }) => (isModal ? 1 : 0)};
  background-color: ${({ isModal }) => (isModal ? 'white' : '#D9D9D9')};
  box-shadow: 0 0 5px 5px darkgray;
  ${({ isModal }) =>
    isModal &&
    `@media (min-width: 460px) {
      width: 65%;
    }
    @media (min-width: 650px) {
      width: 50%;
    }
    @media (min-width: 835px) {
      width: 45%;
    }
    @media (min-width: 1000px) {
      width: 40%;
      padding: 30px 3%;
    }
    @media (min-width: 1230px) {
      width: 35%;
    }`}
  > * {
    align-self: center;
  }
  > p {
    margin-bottom: 15px;
  }
`
