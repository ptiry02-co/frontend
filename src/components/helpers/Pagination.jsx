import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiFirstPage, BiLastPage } from 'react-icons/bi/index'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md/index'

const Pagination = ({ total, selectedPage, onChangePage }) => {
  const [pages, setPages] = useState([])

  function display() {
    const pageNums = []
    for (let n = 1; n < Math.floor(total / 16); n++) {
      pageNums.push(n)
    }
    setPages(pageNums)
  }

  useEffect(() => {
    display()
  }, [selectedPage, total])
  return (
    <Wrapper>
      {selectedPage > 1 && (
        <Arrows>
          <BiFirstPage size={25} onClick={() => onChangePage(1)} />
          {selectedPage >= 6 && <MdNavigateBefore size={25} onClick={() => onChangePage(selectedPage - 5)} />}
        </Arrows>
      )}
      {selectedPage === 1 || selectedPage === 2 || selectedPage === 3
        ? pages?.slice(0, 5).map((n, i) => (
            <PageNum isSelected={selectedPage === n} onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))
        : selectedPage + 2 === pages.length || selectedPage + 1 === pages.length || selectedPage === pages.length
        ? pages?.slice(pages.length - 5, pages.length).map((n, i) => (
            <PageNum isSelected={selectedPage === n} onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))
        : pages?.slice(selectedPage - 3, selectedPage + 2).map((n, i) => (
            <PageNum isSelected={selectedPage === n} onClick={() => onChangePage(n)} key={i}>
              {n}
            </PageNum>
          ))}
      {selectedPage < pages.length && (
        <Arrows>
          {selectedPage <= pages.length - 5 && (
            <MdNavigateNext size={25} onClick={() => onChangePage(selectedPage + 5)} />
          )}
          <BiLastPage size={25} onClick={() => onChangePage(pages.length)} />
        </Arrows>
      )}
    </Wrapper>
  )
}

export default Pagination

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  column-gap: 3px;
  align-items: center;
`
const PageNum = styled.div`
  border: 1px solid gray;
  padding: 3px;
  font-size: 1.25rem;
  background-color: ${({ isSelected }) => (isSelected ? '#d9cdbf' : 'white')};
  :hover {
    cursor: pointer;
    background-color: #d9cdbf;
  }
`
const Arrows = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  column-gap: 3px;
  svg {
    :hover {
      cursor: pointer;
      fill: red;
    }
  }
`
