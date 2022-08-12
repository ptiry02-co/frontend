import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Arrow from '../components/helpers/Arrow'
import usePlans from '../hooks/usePlans'

const ExerciseDetails = () => {
  const [exercises, setExercises] = useState([])
  const { planId, exerciseIndex } = useParams()
  const { fetchPlan } = usePlans()
  const navigate = useNavigate()

  const fetchSavedExercises = async () => {
    const plan = await fetchPlan({ planId })
    setExercises(plan.exercises)
  }
  useEffect(() => {
    fetchSavedExercises()
  }, [planId])
  return (
    <Wrapper>
      <h1>{exercises[exerciseIndex]?.name.toUpperCase()}</h1>
      <p>Target muscle: {exercises[exerciseIndex]?.targetMuscle}</p>
      <Reps>
        <h3>Sets: {exercises[exerciseIndex]?.sets}</h3>
        <h3>Reps: {exercises[exerciseIndex]?.reps}</h3>
      </Reps>
      <Arrows>
        <Arrow
          isFirst={exerciseIndex === '0'}
          prev={() => navigate(`/profile/${planId}/exercises/${Number(exerciseIndex) - 1}`)}
        />
        <Gif src={exercises[exerciseIndex]?.gif} alt={exercises[exerciseIndex]?.name} />
        <Arrow
          isRight
          isLast={exerciseIndex === `${exercises.length - 1}`}
          next={() => navigate(`/profile/${planId}/exercises/${Number(exerciseIndex) + 1}`)}
        />
      </Arrows>
    </Wrapper>
  )
}

export default ExerciseDetails

const Wrapper = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 100px;
`
const Gif = styled.img`
  align-self: center;
  width: 80%;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 15px;
  background-color: white;
  @media (min-width: 750px) {
    width: 45%;
  }
`
const Reps = styled.div`
  align-self: center;
  display: flex;
  column-gap: 10px;
`
const Arrows = styled.div`
  width: 100%;
  padding: 0 3%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`
