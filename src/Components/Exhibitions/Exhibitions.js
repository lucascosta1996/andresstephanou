import React from 'react'
import styled from 'styled-components'
import ExhibitionsRoutes from './Routes'

const ExhibitionsWrapper = styled.div`

`

function Exhibitions (props) {
  return (
    <ExhibitionsWrapper>
      <ExhibitionsRoutes />
    </ExhibitionsWrapper>  
  )
}

export default Exhibitions