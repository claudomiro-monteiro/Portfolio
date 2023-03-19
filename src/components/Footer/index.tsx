import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { FooterContainer, FooterContent } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent href="https://github.com/claudomiro-monteiro/claudomiro-monteiro">
        <FaGithub size={32} />
        Github
      </FooterContent>
      <FooterContent href="https://www.linkedin.com/in/claudomiro-monteiro-3ab959a6">
        <FaLinkedin size={32} />
        Linkedin
      </FooterContent>
      <FooterContent href="https://www.instagram.com/claudomiro_monteiro">
        <FaInstagram size={32} />
        Instagram
      </FooterContent>
      <FooterContent href="mailto:claudomiromonteiro@gmail.com?subject=Contato do portfólio&">
        <FaMailBulk size={32} />
        Email
      </FooterContent>
    </FooterContainer>
  )
}
