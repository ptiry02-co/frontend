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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
    border-radius: 50%;
    box-shadow: 0 0 5px 5px darkgray;
    @media (min-width: 365px) {
      width: 70%;
    }
    @media (min-width: 570px) {
      width: 60%;
    }
    @media (min-width: 880px) {
      width: 50%;
    }
    @media (min-width: 1230px) {
      width: 35%;
    }
  }
`
