import styled from "styled-components";
import { color } from "../../styles/color";
import { Varables } from "../../styles/Varables";

export const CardS = styled.div`
  display: flex;
 flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  margin-top: 1rem;
`
export const CardItem = styled.div`
  background: #200c2e;
  margin-top: 1rem;
  padding: 4.5rem;
  text-align: center;
   border-radius: 10px;
   cursor: pointer;
   margin-right: 1rem;
   position: relative;

:last-child{
    padding: 6rem;
}

:hover{
    color: ${color.normal};
    background: linear-gradient(90deg,aqua,red);
}
img{
  top: -15px;
  left: -4rem;
  position: relative;

}

p{
font-family: ${Varables.pFont};
  max-width: 238px;
  text-align: center;
  text-align: center;
  margin: 0 auto;
  opacity: 50%;
  font-size: .875rem;
  line-height: 150%;
  font-weight: 400;
  color: ${Varables.darkRgb};

  :hover{
    color: ${color.normal};
  }
}
h3{
    font-family: ${Varables.head3Font};
  max-width: 239px;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 150%;
  margin: 0 auto 0.5rem;
  color: ${color.normal};
}
`