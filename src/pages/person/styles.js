import styled from "styled-components"

export const ContainerPerson = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 2rem;
 padding-top: 8rem;

 @media(max-width: 994px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
`

export const Description = styled.div`


img {
  width: 10rem;
  border-radius: 1rem;
  margin-bottom: 2rem;

  @media(min-width: 768px) {
    width: 20rem;
  } 
}
 
`

export const Info = styled.div`
  h3{
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  article {
    h4{
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: .3rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
      color: #00f7df;
    }
  }
`

export const Bio = styled.div`
 
 text-align: left;
 margin-bottom: 40rem;
 margin-left: 1rem;
 margin-right: 1rem;


 @media(min-width: 768px){ 
  width: 30rem;
 }


 h2 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
 }

 p {
  font-size: 1.1rem;
  font-weight: 500;
 
 }


`