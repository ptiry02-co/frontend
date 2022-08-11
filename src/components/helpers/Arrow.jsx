import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import styled from 'styled-components'

const Arrow = ({ isRight = false, isFirst, isLast, prev, next }) => {
  return (
    <>
      {!isRight && (
        <Prev
          isfirst={`${isFirst}`}
          onClick={
            isFirst
              ? e => {
                  e.preventDefault()
                }
              : () => prev()
          }
        />
      )}
      {isRight && (
        <Next
          islast={`${isLast}`}
          onClick={
            isLast
              ? e => {
                  e.preventDefault()
                }
              : () => next()
          }
        />
      )}
    </>
  )
}

export default Arrow

const Prev = styled(MdArrowBackIos).attrs(({ isfirst }) => ({ isfirst }))`
  margin-right: 3%;
  ${({ isfirst }) =>
    isfirst === 'true'
      ? 'color: white;'
      : isfirst === 'false'
      ? `:hover {
    cursor: pointer;
    color: red;
  }`
      : ''}
`

const Next = styled(MdArrowForwardIos)`
  margin-left: 3%;

  ${({ islast }) =>
    islast === 'true'
      ? 'color: white;'
      : islast === 'false'
      ? `:hover {
    cursor: pointer;
    color: red;
  }`
      : ''}
`
