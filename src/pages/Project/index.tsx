// import axios from 'axios'
// import { useState } from 'react'
import { Projects } from './project'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
// import developer from '../../assets/developer-image.svg'
import { ProjectCard, ProjectContainer, ProjectContent } from './styles'

// type Repository = {
//   id: number
//   description: string
// }

export function Project() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 320px)': {
        slides: {
          origin: 'center',
          perView: 1,
          spacing: 15,
        },
      },
      '(min-width: 700px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      '(min-width: 1130px)': {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
  })
  // const api = axios.create({
  //   baseURL: 'https://api.github.com/users/claudomiro-monteiro/repos',
  // })
  // const [repositories, setRepositories] = useState<Repository[]>([])
  // axios
  //   .get('https://api.github.com/users/claudomiro-monteiro/repos')
  //   .then((response) => {
  //     setRepositories(response.data)
  //   })

  return (
    <ProjectContainer id="projects">
      <h1>Projetos</h1>
      <ProjectContent ref={ref} className="keen-slider">
        {Projects.map((repo) => {
          return (
            <ProjectCard key={repo.id} className="keen-slider__slide">
              {repo.title}
              <img src={repo.img} alt="" />
              {repo.description}
              <a href={repo.rote}> Saiba mais...</a>
            </ProjectCard>
          )
        })}
      </ProjectContent>
    </ProjectContainer>
  )
}
