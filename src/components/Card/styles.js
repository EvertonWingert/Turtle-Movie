import styled from "styled-components"

export const Card = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  transition: transform .3s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.5rem;
  cursor: pointer;
  min-width:200px; 
  height:300px; 
  border: 1px solid transparent;

  &:hover{
    transform: scale(1.1);
    z-index: 15;
  }

  img {
    height: 18.750rem;
  }

`

export const CardContent = styled.div`
  position: absolute;
  padding: 0 1rem 1rem 1rem;
  bottom: 0;
  height: 18.125rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1)); 
  opacity: 0;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  h2 {
    font-weight: 900;
    font-size: 1rem;
  }

  span {
    font-size: .85rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    gap: .2rem;
  }

  p {
    font-style: italic;
    font-size: .75rem;
    margin-bottom: 0.25rem;
  }
`