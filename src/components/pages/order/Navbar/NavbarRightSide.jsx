import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { NavbarProfile } from "./NavbarProfile"
import ToggleButton from "../../../ui/ToggleButton"
import { IoMdInformationCircle } from "react-icons/io";
import styled from "styled-components"
import { AdminToast } from "./AdminToast";
import { useOrderContext } from "../../../../contexts/OrderContext";


export default function NavbarRightSide() {
  const { adminMode, setAdminMode } = useOrderContext()

  const toggleLabelUnchecked = `Activer le mode admin`
  const toggleLabelChecked = `Désactiver le mode admin`

  const displayAdminToast = () => {
    const isAdminMode = adminMode.isAdminMode
    if (!adminMode.isAdminMode) {
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
    }

    setAdminMode({ ...adminMode, isAdminMode: !isAdminMode })
  }

  return (
    <NavbarRightSideStyled>
      <AdminToast />
      <ToggleButton labelIfChecked={toggleLabelChecked} labelIfUnchecked={toggleLabelUnchecked} onToggle={displayAdminToast} />
      <NavbarProfile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
`
