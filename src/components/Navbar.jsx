import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Navbar = ({ user, handleModal, logOut }) => {
  return (
    <Wrapper>
      <Link to='/'>
        <Logo src={logo} alt='Logo' />
      </Link>
      <Menu>
        {user === undefined ? (
          <></>
        ) : user === null ? (
          <>
            <MyLink onClick={() => handleModal(false)}>Log in</MyLink> |{' '}
            <MyLink onClick={() => handleModal(true)}>Sign up</MyLink>
          </>
        ) : (
          <MyLink onClick={logOut}>Log out</MyLink>
        )}
      </Menu>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  width: 100vw;
  height: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  display: flex;
  align-items: center;
  column-gap: 5px;
`
const MyLink = styled.p`
  box-sizing: content-box;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :active {
    color: lightblue;
  }
`
