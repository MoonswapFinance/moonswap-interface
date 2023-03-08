import React from 'react'
import { fadeIn,  staggerContainer } from '../../../styles/motion'
import { BG, CardItemH, SText, StyledSolution } from './styled'
import {motion} from 'framer-motion'
import { SData } from '../../Hooks/Solution/Data'
import {Solu} from '../../../components'

const Solution = () => {
  return (
      <BG>
    <StyledSolution>
        <SText>
            <h3>MoonSwap</h3>
            <h1>Solutions</h1>
        </SText>
     <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
    <CardItemH variants={fadeIn('right', 'tween', 0.2, 1)}>
    
    {SData.map((item, index) => (
        <Solu title={item.title} img={item.img} text={item.text} key={item.title + index} />
    ))}
    </CardItemH>    
    </motion.div>
    </StyledSolution>
    </BG>
  )
}

export default Solution