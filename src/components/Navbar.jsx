import { Link, useNavigate } from 'react-router-dom'
import { IoMdFitness } from 'react-icons/io/index'
import { IoExitOutline } from 'react-icons/io5/index'
import { TbMinusVertical } from 'react-icons/tb/index'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { createPortal } from 'react-dom'
import AuthForm from './AuthForm'

const Navbar = ({ user, handleModal, logOut }) => {
  const navigate = useNavigate()
  const location = window.location.pathname
  return (
    <Wrapper isHome={location === '/'}>
      {location !== '/' && (
        <Link to='/'>
          <Logo src={logo} alt='Logo' />
        </Link>
      )}
      <Menu isHome={location === '/'}>
        {user === undefined ? (
          <></>
        ) : user === null ? (
          <>
            <MyLink
              onClick={() =>
                handleModal({
                  isVisible: true,
                  component: createPortal(<AuthForm onClose={handleModal} />, document.getElementById('modals'))
                })
              }
            >
              Log in
            </MyLink>
            <Separator size={30} />
            <MyLink
              onClick={() =>
                handleModal({
                  isVisible: true,
                  component: createPortal(<AuthForm isNew onClose={handleModal} />, document.getElementById('modals'))
                })
              }
            >
              Sign up
            </MyLink>
          </>
        ) : (
          <>
            <MyLink onClick={() => navigate('/profile')}>
              <IoMdFitness />
              My Profile
            </MyLink>
            <Separator size={30} />
            <MyLink onClick={logOut}>
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
  border-bottom: ${({ isHome }) => (isHome ? 'none' : '1px solid black')};
  margin-bottom: 60px;
  box-shadow: ${({ isHome }) => (isHome ? 'none' : '0 3px 10px 0px #cccccc')};
`
const Logo = styled.img`
  width: 60px;
`
const Menu = styled.nav`
  font-size: ${({ isHome }) => (isHome ? '1.5rem' : 'inherit')};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  column-gap: 5px;
  @media (max-width: 365px) {
    flex-direction: column;
    row-gap: 15px;
  }
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
const Separator = styled(TbMinusVertical)`
  @media (max-width: 365px) {
    display: none;
  }
`
