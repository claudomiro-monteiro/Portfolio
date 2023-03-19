import styled from 'styled-components'

export const ProjectContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-flow: column;
  /* flex-wrap: wrap; */
  padding: 2rem;
`
export const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* justify-content: space-evenly; */
  margin-top: 2rem;
`

export const ProjectCard = styled.div`
  min-width: initial !important;
  padding: 1.5rem;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 0.5rem;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  overflow: initial !important;

  margin-bottom: 10rem;

  img {
    height: 10rem;
    width: auto;
  }

  p {
    text-align: justify;
  }

  a {
    display: flex;
    align-items: center;
    padding: 1rem 2.5rem;
    font-weight: 600;
    outline: none;
    border: 0;
    border-radius: 0.5rem;
    background: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['gray-900']};

    cursor: pointer;

    &:hover {
      filter: brightness(0.7);
      /* background: ${(props) => props.theme['blue-500']}; */
      /* color: ${(props) => props.theme['gray-100']}; */
    }
  }
`
