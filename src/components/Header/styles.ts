import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 2rem; */
  font-size: 1.125rem;
  width: 100%;

  background: ${(props) => props.theme['blue-100']};

  img {
    height: 4rem;
    padding: 0 2rem;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 0.5rem;

  a {
    height: 5rem;
    width: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['blue-500']};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const NewFormButton = styled.button`
  margin-right: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 0;
  border-radius: 0.8rem;
  outline: none;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['blue-100']};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
