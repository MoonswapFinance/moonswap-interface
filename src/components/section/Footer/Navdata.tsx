import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { StyledIcons } from './styled';
import {IconButton} from '@mui/material'

const Navdata = () => {

    const socails = [
        {
            url: 'https://twitter.com/MoonswapFinance',
            icon: <FaTwitter/>
        },
        {
            url: 'https://t.me/MoonswapFinance',
            icon: <FaTelegram/>
        },
        {
            url: 'https://instagram.com/moonswapfinance',
            icon: <FaInstagram/>
        },
        {
            url: 'https://github.com/MoonswapFinance',
            icon: <FaGithub/>
        },
        {
            url: 'https://discord.gg/EcWp9cgaVf',
            icon: <FaDiscord/>,
        },
    ]

  return (
    <>
        {socails?.map((socails, index) => (
          <StyledIcons key={index} socails={socails}>
               <IconButton color='inherit'>
                <a href={socails.url}>
                {socails.icon}
                </a>
               </IconButton>
          </StyledIcons>
        ))}
    </>
  )
}

export default Navdata