import { HomeContainer, HomeImage, HomeText } from './styles'

import developer from '../../assets/developer-image.svg'

export function Home() {
  return (
    <HomeContainer id="/">
      <HomeText>
        <h4>Desenvolvedor Web Front End</h4>
        <h1>Oi, sou o Claudomiro</h1>
        <p>
          Desenvolvedor Web Front End desde 2019, com habilidades em HTML, CSS,
          Styled-Commponents, Javascript, React...
        </p>
      </HomeText>
      <HomeImage>
        <img src={developer} alt="" />
      </HomeImage>
    </HomeContainer>
  )
}
