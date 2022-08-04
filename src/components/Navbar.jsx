import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <Logo src={logo} alt='Logo' />
      </Link>
      <Menu>
        <MyLink>Log In</MyLink>
        <MyLink>Sign Up</MyLink>
      </Menu>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  width: 100vw;
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
  margin-bottom: 60px;
  box-shadow: 0 3px 10px 0px #cccccc;
`
const Logo = styled.img`
  width: 60px;
`
const Menu = styled.nav`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 5%;
  text-decoration: none;
`
const MyLink = styled.a`
  width: 60px;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
