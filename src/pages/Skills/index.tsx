import { ShildsContent, SkillContainer } from './styles'

export function Skills() {
  return (
    <SkillContainer id="skills">
      <h1>Skills</h1>
      <p>
        Eu crio sites responsivos fáceis de usar e construidos com as melhores
        práticas. Minha área de especialização é Desenvolvimento Web Front-End,
        utilizando as melhores ferramentas disponiveis no mercado atualmente,
        HTML, CSS, Sass, Styled-components, Javascript, Typescript, ReactJs...
      </p>
      <ShildsContent>
        <section>
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="html"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
            alt="Sass"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
            alt="Styled-components"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="Javascript"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="ReactJs"
          />
        </section>
        <section>
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            alt="Typescript"
          />
        </section>
      </ShildsContent>

      {/* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
      <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" /> */}
    </SkillContainer>
  )
}
