import React from 'react'
import { MLogo } from '../../asset/export'
import { LWrap } from './nav/styled'

export const Logo = () => {
  return (
    <LWrap>
    <img src={MLogo} alt='Moonswap-Logo'/>
    <h1>MoonSwap Finance</h1>
   </LWrap>
  )
}