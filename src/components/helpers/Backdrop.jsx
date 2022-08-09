import styled from 'styled-components'

const Backdrop = ({ onClose }) => {
  return <Background onClick={() => onClose({ isVisible: false, component: null })}></Background>
}

export default Backdrop

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.4);
`
