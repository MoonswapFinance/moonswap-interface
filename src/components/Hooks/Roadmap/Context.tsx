import React from 'react'
import { Date } from '../../section/Roadmap/styled'


const Context = ({ date, title, text, id }) => {
  return (
    <div>
        <Date>{date}</Date>
        <h3>{title}</h3>
        <li id={id} >{text}</li>
    </div>
  )
}

export default Context