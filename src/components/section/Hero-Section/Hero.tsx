import React from 'react'
import { Earth, HeroContent, StyledBtn, StyledHero } from './styled'
import { fadeIn, Item, NavItems, Right, staggerContainer } from '../../../styles/motion'
import { motion } from 'framer-motion' 
const Hero = () => {
  return (
    <StyledHero
    initial='hidden'
    animate='visible'
    variants={NavItems}>

      <HeroContent>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
        <motion.div
         variants={fadeIn('right', 'tween', 0.2, 1)}
        >
          <h1>The Next Generation<span>DeFi Platform</span></h1>
          <p>MoonSwap Finance is a none-stop decentralized trading protocol which utilizes the security, scalability, and decentralization of the SmartChain, creating an open and safe marketplace for traders, liquidity providers, and developers</p>
        </motion.div>
        </motion.div>
          <StyledBtn variants={Item}>
            <button>Trade</button>
            <button>Earn</button>
            <button>Security</button>
          </StyledBtn>
      </HeroContent>

      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
    
         <Earth/>
      
      </motion.div>
    </StyledHero>
  )
}

export default Hero