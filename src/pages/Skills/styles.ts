import styled from 'styled-components'

export const SkillContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2rem;

  h1 {
    padding: 2rem 0;
  }

  p {
    /* text-align: justify; */
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`
export const ShildsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  section {
    display: flex;
    padding: 0 2rem;
    margin: 2rem 0;

    img {
      height: 3rem;
      width: auto;
      border-radius: 0.5rem;
    }
  }
`
