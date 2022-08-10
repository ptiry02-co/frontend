import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Pagination = ({ total, selectedPage, onChangePage }) => {
  const [pages, setPages] = useState([])

  console.log('the total: ', total)

  function display() {
    const pageNums = []
    for (let n = 1; n < total / 16; n++) {
      pageNums.push(n)
    }
    setPages(pageNums)
  }

  useEffect(() => {
    display()
  }, [selectedPage, total])
  return (
    <Wrapper>
      {selectedPage === 1 || selectedPage === 2 || selectedPage === 3
        ? pages?.slice(0, 5).map((n, i) => (
            <PageNum onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))
        : selectedPage + 2 === pages.length || selectedPage + 1 === pages.length || selectedPage === pages.length
        ? pages?.slice(pages.length - 6, -1).map((n, i) => (
            <PageNum onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))
        : pages?.slice(selectedPage - 3, selectedPage + 2).map((n, i) => (
            <PageNum onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))}
    </Wrapper>
  )
}

export default Pagination

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  column-gap: 3px;
`
const PageNum = styled.div`
  border: 1px solid gray;
  padding: 3px;
  font-size: 1.25rem;
  :hover {
    cursor: pointer;
    background-color: #d9cdbf;
  }
`
