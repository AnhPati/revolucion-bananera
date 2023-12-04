import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../../theme"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { NavbarProfile } from "./NavbarProfile"
import ToggleButton from "../../../ui/ToggleButton"

export default function NavbarRightSide({ username }) {
  const toggleLabelUnchecked = `Activer le mode admin`.toUpperCase()
  const toggleLabelChecked = `Désactiver le mode admin`.toUpperCase()

  return (
    <NavbarRightSideStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton labelIfChecked={toggleLabelChecked} labelIfUnchecked={toggleLabelUnchecked} />
      <NavbarProfile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
