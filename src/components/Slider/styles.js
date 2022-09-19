import styled from 'styled-components'

export const Image = styled.div`
 width: 100vw;
 height: 550px;
 position: relative; 
 opacity: 0.9;

 @media (max-width: 994px) {
  width: 100vw;
  height: auto;
 }
`

export const Content = styled.div`
  position: absolute;
  padding: 5rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
  opacity: 0.9;
  transition: opacity .3s;

  &:hover {
    opacity: 1;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    text-align: left;
  }

  article {
    font-size: 1rem;
    display: flex;
    gap: 2rem;
    margin-bottom: 0.9rem;

    span {
      display: flex;
      gap: 5px;
    }
  }

  p {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    display: flex;
    text-align: left;
    width: 50%;
  }

  @media(max-width: 468px) {
    padding: 2.2rem;
    opacity: 0.8;

    h1 {
      font-size: 1.5rem;
    }
    p {
      display: none;
     }

    article {
      font-size: 1rem;
    }
  }

  @media (min-width: 469px) {
     padding: 2rem;
    
     h1 {
      font-size: 2rem;
     }

     p {
      display: none;
     }
    }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }

    p {
      display: block;
     }
  }

`




//================================================================


// const Section = styled(Slider)`
//   margin-top: 20px;
//   & > button {
//     opacity: 0;
//     height: 100%;
//     width: 5vw;
//     z-index: 1;
//     &:hover {
//       opacity: 1;
//       transition: opacity 0.2s ease 0s;
//     }
//   }
//   ul li button {
//     &:before {
//       font-size: 10px;
//       color: rgb(150, 158, 171);
//     }
//   }
//   li.slick-active button:before {
//     color: white;
//   }
//   .slick-list {
//     overflow: initial;
//   }
//   .slick-prev {
//     left: -75px;
//   }
//   .slick-next {
//     right: -75px;
//   }
// `

// const Wrap = styled.div`
//   border-radius: 4px;
//   cursor: pointer;
//   position: relative;
//   a {
//     border-radius: 4px;
//     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//       rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//     cursor: pointer;
//     display: block;
//     position: relative;
//     padding: 4px;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//     &:hover {
//       padding: 0;
//       border: 4px solid rgba(249, 249, 249, 0.8);
//       transition-duration: 300ms;
//     }
//   }
// `
