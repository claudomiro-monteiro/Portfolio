import styled from 'styled-components'

interface OpenSidebarProps {
  open: boolean
}

export const SidebarContainer = styled.div<OpenSidebarProps>`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${({ open }) => (open ? '100%' : '0')};
    height: calc(100% - 4rem);
    display: flex;
    background: ${(props) => props.theme['green-500']};
    transition: all 0.3s;
    overflow-x: hidden;

    z-index: 2;
  }
`

export const SidebarNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
  /* line-height: 5rem; */

  a {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    line-height: 5rem;
  }
`
