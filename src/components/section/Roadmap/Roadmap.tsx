import React from 'react'
import { fadeIn, planetVariants, staggerContainer } from '../../../styles/motion'
import Context from '../../Hooks/Roadmap/Context'
import { FirstMap, FirstMapII, FirstMapIII, FirstMapIV, FirstMapV } from '../../Hooks/Roadmap/Data'
import { Description, RoadmapContent, StyledContent, StyledMap } from './styled'
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <StyledMap>
        <StyledContent variants={planetVariants('left')}>ROADMAP</StyledContent>
         <RoadmapContent variants={fadeIn('right', 'tween', 0.2, 1)}>
            <Description>
            {FirstMap.map((item, index) =>(
                <Context title={item.title} date={item.date} text={item.text} id={item.id} key={item.title + index} />
            ))}
            </Description>
            <Description>
            {FirstMapII.map((item, index) =>(
                <Context title={item.title} date={item.date} text={item.text} id={item.id} key={item.title + index} />
            ))}
            </Description>
            <Description>
            {FirstMapIII.map((item, index) =>(
                <Context title={item.title} date={item.date} text={item.text} id={item.id} key={item.title + index} />
            ))}
            </Description>
            <Description>
            {FirstMapIV.map((item, index) =>(
                <Context title={item.title} date={item.date} text={item.text} id={item.id} key={item.title + index} />
            ))}
            </Description>
            <Description>
            {FirstMapV.map((item, index) =>(
                <Context title={item.title} date={item.date} text={item.text} id={item.id} key={item.title + index} />
            ))}
            </Description>
         </RoadmapContent>
    </StyledMap>
    </motion.div>
  )
}

export default Roadmap