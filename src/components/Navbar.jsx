import { Link, useNavigate } from 'react-router-dom'
import { IoMdFitness } from 'react-icons/io/index'
import { IoExitOutline } from 'react-icons/io5/index'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { createPortal } from 'react-dom'
import AuthForm from './AuthForm'

const Navbar = ({ user, handleModal, logOut }) => {
  const navigate = useNavigate()
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
            <MyLink
              onClick={() =>
                handleModal({
                  isVisible: true,
                  component: createPortal(<AuthForm onClose={handleModal} />, document.getElementById('modals')),
                })
              }
            >
              Log in
            </MyLink>{' '}
            |{' '}
            <MyLink
              onClick={() =>
                handleModal({
                  isVisible: true,
                  component: createPortal(<AuthForm isNew onClose={handleModal} />, document.getElementById('modals')),
                })
              }
            >
              Sign up
            </MyLink>
          </>
        ) : (
          <>
            <MyLink onClick={() => navigate('/profile')}>
              {' '}
              <IoMdFitness />
              My Profile
            </MyLink>{' '}
            |{' '}
            <MyLink onClick={logOut}>
              {' '}
              <IoExitOutline /> Log out
            </MyLink>
          </>
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
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: black;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :active {
    color: lightblue;
  }
`
