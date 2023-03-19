import styled from 'styled-components'

interface OpenMenuMobileProps {
  open: boolean
}

export const ButtonContainer = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  padding: 0 2rem;
  /* background: blue; */

  @media (min-width: 769px) {
    display: none;
  }
`

export const Button = styled.div<OpenMenuMobileProps>`
  border-top: ${({ open }) => (open ? 'none' : '2px solid black')};
  width: 2rem;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 2px;
    background: ${({ open }) =>
      open
        ? (props) => props.theme['green-500']
        : (props) => props.theme['gray-900']};
    transition: 0.3s;
    position: ${({ open }) => (open ? 'relative' : 'initial')};
    margin-top: 7px;
  }

  &::before {
    transform: ${({ open }) => (open ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(0)')};
    top: -9px;
  }
`
