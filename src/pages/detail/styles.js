import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .banner{
    width: 100%;

    img {
      width: 100%;
      height: 31rem;
      object-fit: cover;
      object-position: 0 30%;

      @media(max-width: 468px) {
        height: 18rem;
      }

      @media(min-width: 469px) {
        height: 21rem;
      }

      @media(min-width: 768px) {
        height: 25rem;
      }

    }
  }
`

export const ContentDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 225px;
  align-items: center;
  width: 75%;
  bottom: 200px; 

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  
  img{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;

    @media(max-width: 468px) {
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 10rem;
  }

  @media(min-width: 469px) {
    margin: 2rem 0;
    width: 12.5rem;
  }

  @media(min-width: 768px) {
    margin: 3rem 0;
    margin-right: 30px;
    width: 13rem;
  }

  @media(min-width: 994px) {
    margin-right: 30px;
    margin-top: 1rem;
    width: 19rem;
  }

  } 
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 1px;
  margin-top: 1rem;
  
  @media (min-width: 994px) {
      margin-bottom: 5rem;
    }

  h2{
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: .6rem;
  
    @media (min-width: 469px) {
      font-size: 2rem;
      margin-bottom: .6rem;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media(min-width: 994px) {
      font-size: 3rem;
      margin-bottom: .4rem;
    }
  }

  .tagline{
    margin-bottom: .7rem;

    @media(max-width: 468px) {
      font-size: 1rem;
      margin-bottom: .9rem;

    }
  }

  article {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #fef501;
    margin-bottom: 1rem;
  }

  .status{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: 1rem;
    
    .data {
      display: flex;
      flex-direction: column;
    }
    
    span {
      font-weight: 600;
      color: #00f7df;
    }
  }

  .genres {
   display: flex;
   gap: .8rem;
    margin: 1.25rem 0;
    font-weight: 700;


    span {
      padding: .6rem .4rem;
      border: 2px solid var(--logo-color);
      border-radius: 10px;
      text-align: center;
    }

    @media(max-width: 468px) {
      flex-direction: column;
      margin-right: 0;
      gap: .8rem;
    }
  }

  .description {
    margin: 3rem 0;
    flex: 0.8;
    max-width: 40rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }
  }

`
