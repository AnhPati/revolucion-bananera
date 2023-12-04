import { useState } from "react";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import { NavbarProfile } from "./NavbarProfile"
import ToggleButton from "../../../ui/ToggleButton"
import { IoMdInformationCircle } from "react-icons/io";
import styled from "styled-components"
import { theme } from "../../../../theme"


export default function NavbarRightSide({ username }) {
  const [adminMode, setAdminMode] = useState(false)

  const toggleLabelUnchecked = `Activer le mode admin`
  const toggleLabelChecked = `Désactiver le mode admin`

  const notify = () => {
    if (adminMode) {
      return setAdminMode(!adminMode)
    }

    toast.info("Mode admin activé", {
      icon: <IoMdInformationCircle size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    setAdminMode(!adminMode)
  }

  return (
    <NavbarRightSideStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton labelIfChecked={toggleLabelChecked} labelIfUnchecked={toggleLabelUnchecked} onToggle={notify} />
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

    svg {
      color: #3498DB;
    }
  }
`
