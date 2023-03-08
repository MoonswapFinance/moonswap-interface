import React from 'react'
import { CardItem, CardS } from '../Global'

const Solu = ({ img, title, text }) => {
  return (
    <CardS>
        <CardItem>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </CardItem>
    </CardS>
  )
}

export default Solu