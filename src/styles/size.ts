const size = {
    mobileS: '500px',
    mobileM: '700px',
    tablet: '768px',
    ipad: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  
  
  export const device = {
      mobileS: `(max-width: ${size.mobileS})`,
      mobileM: `(max-width: ${size.mobileM})`,
      tablet: `(man-width: ${size.tablet})`,
      ipad: `(max-width: ${size.ipad})`,
      laptopL: `(max-width: ${size.laptopL})`,
      desktop: `(max-width: ${size.desktop})`,
      desktopL: `(max-width: ${size.desktop})`
    };
  
  
  export default size