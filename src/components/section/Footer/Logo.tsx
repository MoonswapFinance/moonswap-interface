import React from 'react'
import { MLogo } from '../../../asset/export'
import { StyledLogo } from './styled'

const Logo = () => {
  return (
    <StyledLogo>
    <img src={MLogo} alt="moonSwap Logo" />
    <h1>MoonSwap Finance</h1>
    </StyledLogo>
  )
}

export default Logo