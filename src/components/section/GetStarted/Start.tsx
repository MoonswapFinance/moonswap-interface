import { styles }from '../../../styles/Varables';
import { motion } from 'framer-motion';
import { startingFeatures } from '../../../constants';
import { StartSteps } from '../../../components';
import { fadeIn, planetVariants, staggerContainer } from '../../../styles/motion';
import { StartPng } from '../../../asset/export'
import { TitleText, TypingText } from '../../CustomTexts';
import { StyledStart } from './styled';
import { Button } from '@mui/material';
import {Icon} from 'react-icons-kit'
import {ic_open_in_new} from 'react-icons-kit/md/ic_open_in_new'
import React from 'react';
import Swal from 'sweetalert2';

const Start = () => {

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
    <StyledStart>
  <section className={`${styles.paddings} relative /z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={StartPng}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="How To Start With MoonSwap" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
        {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
          <Button variant='outlined' color='info'>Learn How To Start <Icon icon={ic_open_in_new} size={20} style={{ marginLeft: '1rem' }} /></Button>
          <Button variant='contained' color='info'  onClick={handleLaunch} >Launch App</Button>
        </div>
      </motion.div>
    </motion.div>
  </section>
      </StyledStart>
);
}

export default Start;
