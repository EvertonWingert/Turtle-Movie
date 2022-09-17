import styled from 'styled-components'

export const Nav = styled.header`
  background: var(--background);
  z-index: 100;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  padding: 0 2.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Logo = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
  display: none;
}

img{
  width: 4rem;
  
  @media (max-width: 994px) {
  display: none;
}
}

span {
  color: var(--logo-color);
}

`

export const NavMenu = styled.div`

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
  }

    a {
      display: flex;
      gap: 3px;

      font-weight: bold;

      color: var(--text-primary);
      height: 1rem;

      cursor: pointer;

      span {
        color: var(--text-primary);
        font-size: 1rem;
        line-height: 1.08;
        white-space: nowrap;
        position: relative;

        &:before {
          content: '';
          height: 2px;
          width: auto;
          background-color: var(--text-primary);
          border-radius: 0px 0px 4px 4px;

          position: absolute;
          bottom: -6px;
          left: 0px;
          right: 0px;
          opacity: 0;

          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
        }
      }

      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
  }
` 

export const Form = styled.form`
  display: flex;
  gap: 10px;

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
