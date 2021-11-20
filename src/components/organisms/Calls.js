import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms/Headings'
import CallCard from '../molecules/CallCard'

const Wrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.05);
  ${space};
`

const Calls = ({ calls }) => {
  return (
    <Wrapper>
      <H2>Calls</H2>
      <div>
        {calls.map(call => (
          <CallCard {...call} />
        ))}
      </div>
    </Wrapper>
  )
}

Calls.propTypes = {
  calls: PropTypes.array,
}
Calls.defaultProps = {
  calls: [],
}

export default Calls
