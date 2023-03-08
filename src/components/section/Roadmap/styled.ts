import styled from "styled-components";
import { color } from "../../../styles/color";
import { Varables } from "../../../styles/Varables";
import { motion } from "framer-motion";
import { device } from "../../../styles/size";

export const StyledMap = styled.div`
padding: 2rem 4rem;
margin-top: 1rem;

@media ${device.ipad}{
  overflow-x: hidden;
}
@media ${device.mobileM}{
  padding: 1rem 2rem;
  overflow-x: hidden;
}
`
export const StyledContent = styled(motion.h2)`
 font-family: ${Varables.fontFamilyII};
 font-size: 4rem;
 font-weight: 800;
 margin-bottom: 1rem;

 @media ${device.ipad}{
  font-size: 3rem;
 }
 @media ${device.mobileM}{
  font-size: 2rem;
 }
`
export const Date = styled.p`
 display: inline-block;
  margin: 0 auto;
  padding: .5rem 1rem;
  background: linear-gradient(90deg,#feed7a,#ff8400 55%,#df90f7 80%,#feed7a);
  -webkit-background-clip: text;
  background-clip: text;
  border-radius: 100px;
  font-weight: 800;
  font-size: 1rem;
  color: transparent;
  position: absolute;
  top: -15px;
  left: 50%;
  z-index: 1;
  text-align: center;
  justify-content: center;
  font-family: ${Varables.fontFamilyII};
  -webkit-animation: text-transition 3s linear infinite;
  animation: text-transition 3s linear infinite;
  background-size: 300% 100%;


  @keyframes text-transition {
  0% {
    background-position: 0 0;
}
100% {
    background-position: -150% 0;
}
  }
`

export const Description = styled.div`
 /* margin-top: -1rem; */
  background-color: ${({theme}) =>theme.roadBgColor};
  border: 1px solid ${Varables.roadBd};
  backdrop-filter: blur(1rem);
  border-radius: .5rem;
  position: relative;
  text-align: left;
  color: ${Varables.roadTextColor};
  width: 450px;
  border-bottom: 5px solid ${Varables.reUseableB};
  padding: 1rem;
`

export const RoadmapContent = styled(motion.div)`
display: flex;
gap: 2rem;
flex-wrap: wrap;

h3{
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: ${color.normal};
    font-size: 2rem;
    margin-left: 1rem;
    font-family: ${Varables.fontFamily}; 
}

li{
    font-size: 1.5rem;
  font-family: ${Varables.textFont};
  margin-bottom: 1rem;
  letter-spacing: 1px;
  margin-left: 1rem;
}
`