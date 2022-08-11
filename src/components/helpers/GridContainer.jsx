import styled from 'styled-components'

const GridContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default GridContainer

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 0 5% 100px;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  row-gap: 30px;
  column-gap: 30px;
  @media (max-width: 365px) {
    padding: 0 0 100px;
  }
`
