import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  

  @media(max-width: 1100px) {
    display: none;
  }

  input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
  }

  button {
    padding: 0.8rem 1rem;
    font-weight: 500;

    background: transparent;
    color: var(--text-primary);
    text-transform: uppercase;

    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--text-primary);
      color: #000;
      border-color: transparent;
      transition-duration: 500ms;
    }
  }
`