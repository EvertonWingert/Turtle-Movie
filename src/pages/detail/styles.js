import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner{
    width: 100%;

    img {
      width: 100%;
      height: 31rem;
      object-fit: cover;
      object-position: 0 30%;
    }
  }
`

export const ContentDetail = styled.div`
  display: flex;
  position: relative;
  bottom: 225px;
  align-items: center;
  width: 75%;
  bottom: 200px; 
  
  img{
    margin-right: 30px;
    width:300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
  } 
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 1px;

  h2{
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: .4rem;
  }

  .tagline{
    margin-bottom: .7rem;
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
    margin: 1.25rem 0;
    font-weight: 700;

    span {
      padding: .6rem;
      border: 2px solid var(--logo-color);
      border-radius: 10px;
      margin-right: 1rem;
    }
  }

  .description {
    margin: 3rem 0;
    flex: 0.8;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }
  }

`
