import { createContext, useState } from 'react'
import { Contact } from '../../pages/Contact'
import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-scroll'

import { ButtonMobile } from '../ButtonMobile'
import { Sidebar } from '../Sidebar'

import Logo from '../../assets/logo1.svg'
import { HeaderContainer, NavContainer, NewFormButton } from './styles'

interface handleButtonMobileProps {
  openSidebar: boolean
  handleButtonMobile: () => void
}

export const MobileContext = createContext({} as handleButtonMobileProps)

export function Header() {
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleButtonMobile() {
    setOpenSidebar(!openSidebar)
  }

  return (
    <MobileContext.Provider value={{ openSidebar, handleButtonMobile }}>
      <HeaderContainer>
        <img src={Logo} alt="" />

        <ButtonMobile />
        <Sidebar />

        <NavContainer>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={10}
            duration={500}
            // delay={1000}
          >
            Sobre
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={10}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={10}
            duration={500}
          >
            Projetos
          </Link>
        </NavContainer>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewFormButton>Contato</NewFormButton>
          </Dialog.Trigger>

          <Contact />
        </Dialog.Root>
      </HeaderContainer>
    </MobileContext.Provider>
  )
}
