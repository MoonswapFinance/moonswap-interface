import React, { useState } from 'react'
import { Logo } from '../Logo'
import {Icon} from 'react-icons-kit'
import {toggleOff} from 'react-icons-kit/fa/toggleOff'
import {toggleOn} from 'react-icons-kit/fa/toggleOn'
import { NLink, NavLinks, StyledNav, Launch, ThemeIcon, NavMenu, NavMenuC, LaunchBtn,  } from './styled'
import {dedent} from 'react-icons-kit/fa/dedent'
import {x} from 'react-icons-kit/oct/x'
import { motion } from 'framer-motion' 
import { Item, NavItems } from '../../../styles/motion'
import Swal from 'sweetalert2'


const Navbar = ({ theme, toggleTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLaunch = () =>{
    Swal.fire({
      title: 'MoonSwap Exchange Coming Soon',
      text: "",
      icon: 'info',
      backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'When'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'After Pancake IFO',
          'Read more details on' +  ",<a  className='docs'  href='http://localhost:3000/#about'>docs.moonswap.exhange</a>",
          'info',
        )
      }
    })
  
  }

  return (

   <StyledNav 
    initial='hidden'
    animate='visible'
    variants={NavItems}
    >

    <motion.div variants={Item}>
     <Logo/>
    </motion.div>

      <ThemeIcon onClick={toggleTheme} colorTheme={theme} variants={Item}>
        {theme === 'light' ?  <Icon icon={toggleOn}  size={25} color='inherit' /> :  <><Icon icon={toggleOff} size={25} color='inherit' /></> }
      </ThemeIcon>

     <NavLinks>
     <NLink href='#' variants={Item}>Home</NLink>
     <NLink href='#' variants={Item}>About</NLink>
     <NLink href='#' variants={Item}>Roadmap</NLink>
     <Launch onClick={handleLaunch} >Launch App</Launch>
    </NavLinks>

     <NavMenu>
     {toggleMenu 
     ?  <Icon icon={x} size={20} onClick={() => setToggleMenu(false)}/>
     :<Icon icon={dedent} size={20} onClick={() => setToggleMenu(true)}/>
     }
     {toggleMenu && (
      <NavMenuC>
      <NLink href='#'>Home</NLink>
      <NLink href='#'>About</NLink>
      <NLink href='#'>Roadmap</NLink>
        <LaunchBtn onClick={handleLaunch}>Launch App</LaunchBtn>
      </NavMenuC>
     )}
     </NavMenu>
   </StyledNav>

  )
}

export default Navbar