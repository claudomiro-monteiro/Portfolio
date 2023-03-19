import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 2rem;

  width: 100%;
`
export const HomeText = styled.div`
  width: 35%;

  h4 {
    color: ${(props) => props.theme['green-500']};
  }

  h1 {
    font-size: 3.6rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`

export const HomeImage = styled.div`
  display: flex;

  img {
    width: 40rem;
    height: auto;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    img {
      width: 26rem;
      height: auto;
      padding: 0.5rem;
    }
  }
`
