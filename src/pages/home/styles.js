import styled from "styled-components"

export const Title = styled.h2`
  margin-top: 5.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 900;

  @media(max-width: 768px) {
    font-size: 1.5rem;
  }
  
  span {
    color: var(--logo-color);
  }
`
