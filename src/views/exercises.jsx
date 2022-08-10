import { useState } from 'react'
import styled from 'styled-components'
import Box from '../components/helpers/Box'
import GridContainer from '../components/helpers/GridContainer'
import Pagination from '../components/helpers/Pagination'
import useExercises from '../hooks/useExercises'

const ExersList = () => {
  const [page, setPage] = useState(1)
  const { list } = useExercises()
  return (
    <Wrapper>
      <h1>Exercises</h1>
      {list && (
        <GridContainer>
          {list?.slice((page - 1) * 16, page * 16).map(item => (
            <Box key={item.id}>
              <Name>{item.name}</Name>
              <Gif src={item.gifUrl} alt={item.name} />
              <p>Target muscle: {item.target}</p>
            </Box>
          ))}
        </GridContainer>
      )}
      {list && <Pagination total={list?.length} selectedPage={page} onChangePage={setPage} />}
    </Wrapper>
  )
}

export default ExersList

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin: 0 5% 30px;
  }
`
const Gif = styled.img`
  width: 60%;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 15px;
`
const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`
