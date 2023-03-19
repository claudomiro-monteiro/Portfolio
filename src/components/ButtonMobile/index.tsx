import { useContext } from 'react'
import { MobileContext } from '../Header'
import { Button, ButtonContainer } from './styles'

export function ButtonMobile() {
  const { openSidebar, handleButtonMobile } = useContext(MobileContext)
  // const [openMenuMobile, setOpenMenuMobile] = useState(false)

  return (
    <ButtonContainer>
      <Button open={openSidebar} onClick={handleButtonMobile} />
    </ButtonContainer>
  )
}
