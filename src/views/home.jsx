import styled from 'styled-components'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>MyWorkout Planner Home Page</h1>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
