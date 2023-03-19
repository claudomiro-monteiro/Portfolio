import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 8rem;
`
export const FooterContent = styled.a`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    color: ${(props) => props.theme['gray-500']};
  }
`
