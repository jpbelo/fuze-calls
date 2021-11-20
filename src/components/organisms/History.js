import React from 'react'
import styled from "styled-components";
import {space} from "styled-system";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 255, 0.05);
  ${space};
`

const History = () => {
  return (
    <Wrapper>
      <p>History</p>
    </Wrapper>
  )
}

export default History
