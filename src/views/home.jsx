import styled from 'styled-components'
import logo from '../assets/logo.png'

const HomePage = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' />
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    box-shadow: 0 0 5px 5px darkgray;
  }
`
