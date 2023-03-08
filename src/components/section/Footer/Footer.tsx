import React, {useState} from 'react'
import Content from '../../Hooks/Footer/Content'
import {Divider} from '@mui/material'
import { FooterDetails, FooterDetailsII, FooterDetailsIII } from '../../Hooks/Footer/Data'
import Logo from './Logo'
import Navdata from './Navdata'
import { CenterFooter, FooterContainer, FooterContent, StyledBTN, StyledFooter, StyledIcons } from './styled'
import { ThemeIcon } from '../../layout/nav/styled'
import {toggleOff} from 'react-icons-kit/fa/toggleOff'
import {toggleOn} from 'react-icons-kit/fa/toggleOn'
import {Icon} from 'react-icons-kit'

const Footer = ({ theme, toggleTheme }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledFooter>
            <CenterFooter>
        <FooterContent>
        <FooterContainer>
            {FooterDetails.map((item, index) => (
                <Content title={item.title} link={item.link} text={item.text} key={item.title + index} />
            ))}
        </FooterContainer>
        <FooterContainer>
            {FooterDetailsII.map((item, index) => (
                <Content title={item.title} link={item.link} text={item.text} key={item.title + index} />
            ))}
        </FooterContainer>
        <FooterContainer>
            {FooterDetailsIII.map((item, index) => (
                <Content title={item.title} link={item.link} text={item.text} key={item.title + index} />
            ))}
        </FooterContainer>
        <Logo/>
        </FooterContent>
        <StyledIcons>
         <Navdata/>
        </StyledIcons>
        <Divider/>

       <StyledBTN>
       <ThemeIcon onClick={toggleTheme} colorTheme={theme}>
        {theme === 'light' ?  <Icon icon={toggleOn}  size={25} color='inherit' /> :  <><Icon icon={toggleOff} size={25} color='inherit' /></> }
      </ThemeIcon>
       </StyledBTN>
        </CenterFooter>
    </StyledFooter>
  )
}

export default Footer