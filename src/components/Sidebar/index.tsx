import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { Link } from 'react-scroll'

import { Contact } from '../../pages/Contact'
import { MobileContext } from '../Header'

import { SidebarContainer, SidebarNav } from './styles'

export function Sidebar() {
  const { openSidebar, handleButtonMobile } = useContext(MobileContext)

  return (
    <SidebarContainer open={openSidebar}>
      <SidebarNav>
        <Link to="/" onClick={handleButtonMobile}>
          Inicio
        </Link>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={10}
          duration={500}
          delay={200}
          onClick={handleButtonMobile}
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
          delay={200}
          onClick={handleButtonMobile}
        >
          Skills
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <a href="#" onClick={handleButtonMobile}>
              Contato
            </a>
          </Dialog.Trigger>

          <Contact />
        </Dialog.Root>
      </SidebarNav>
    </SidebarContainer>
  )
}
