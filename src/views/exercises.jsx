import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import DisplayExercises from '../components/DisplayExercises'
import Pagination from '../components/helpers/Pagination'
import useExercises from '../hooks/useExercises'
import usePlans from '../hooks/usePlans'

const ExersList = () => {
  const [page, setPage] = useState(1)
  const { planId } = useParams()
  const { plan, fetchPlan } = usePlans()
  const { list, fetchAllExercises, newExercise, filterByBodyPart } = useExercises()

  useEffect(() => {
    if (planId) {
      fetchAllExercises().then(list => {
        fetchPlan({ planId }).then(res => {
          if (res.type === 'Mix') return
          filterByBodyPart(list, res.type)
        })
      })
    } else {
      fetchAllExercises()
    }
  }, [])

  return (
    <Wrapper>
      <h1>{plan?.type} Exercises</h1>
      {list && <DisplayExercises list={list} page={page} onSubmit={newExercise} planId={planId} />}
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
