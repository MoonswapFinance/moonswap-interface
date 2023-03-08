import styled from "styled-components";
import { color } from "../../../styles/color";
import { device } from "../../../styles/size";
import { Varables } from "../../../styles/Varables";

export const StyledFooter = styled.div`
 background-color: ${({theme}) => theme.footerColor};
 width: 100%;
 padding: 4rem 6rem;
 position: relative;
overflow: hidden;
margin-top: 5rem;

 hr{
   border-bottom: ${Varables.borderB};
   margin-top: 1rem;
 }

 @media ${device.ipad}{
  padding: 1rem 1rem;
   order: 2;
   padding-top: 2rem;
}
@media ${device.mobileM}{
   width: 100%;
   padding-top: 2rem;

   hr{
   transform: translateY(-4rem);
   }
}
 `
export const FooterContent = styled.div`
display: flex;
gap: 15rem;

@media ${device.ipad}{
  gap: 2rem;
}
@media ${device.mobileM}{
   flex-direction: column;
   order: 2;
}
`
export const CenterFooter = styled.div`
-webkit-box-pack: center;
justify-content: center;
padding-left: 6rem;
padding-right: 1.5rem;

@media ${device.ipad}{
   padding-left: 10px;
   padding-right: 1px;
   order: 1;
}

@media ${device.mobileM}{
   position: relative;
  transform: translateY(3rem);
}
`

export const FooterText = styled.div`

h2{
    font-size: 15px;
    font-weight: 500;
    color: ${color.aq};
    text-transform: uppercase;
    line-height: 35px;
}
a{
 font-weight: 500;
 line-height: 30px;
 font-size: 14px;

 :hover{
    color: red;
 }
}
`

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
`
export const StyledLogo = styled.div`
 display: flex;

 img{
    width: ${Varables.xsWidth};
    height: ${Varables.xHeight};
 }
 h1{
    font-family: ${Varables.fontFamily};
    font-size: 20px;
    color: ${color.normal};
    transform: translateY(16px) translateX(-13px);
 }

 @media ${device.ipad}{
   img{
      width: 50px;
      height: 50px;
   }
   h1{
      font-size: 18px;
      transform: translateY(10px) translateX(-10px);
   }
}
@media ${device.mobileM}{
   position: relative;
   top: -38rem;
   left: -1.5rem;
   img{
      width: 45px;
      height: 45px;
   }
}
`
export const StyledIcons = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
margin-top: 2rem;


svg{
   fill: ${color.fillColor};
    width: 20px;
}

@media ${device.mobileM}{
   transform: translateY(-2rem);
}
`

export const StyledBTN = styled.div`

@media ${device.mobileM}{
   transform: translateY(-3rem);
}
`