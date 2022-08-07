import styled from 'styled-components'

const HomePage = () => {
  return (
    <Wrapper>
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
  height: 3000px;
  > svg {
    height: auto;
  }
`
