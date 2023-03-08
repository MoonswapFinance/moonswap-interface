import React from 'react'
import { FooterText } from '../../section/Footer/styled'

const Content = ({ title, link, text }) => {
  return (
    <FooterText>
        <h2>{title}</h2>
        <a href={link}>{text}</a>
    </FooterText>
  )
}


export default Content
