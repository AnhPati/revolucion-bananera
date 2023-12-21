import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../contexts/AdminContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import { TextInput } from "../../../../ui/TextInput"
import { PrimaryButton } from "../../../../ui/PrimaryButton";
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'

const AdminPanelContent = () => {
    const { adminMode } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const tabs = getAdminTabsConfig().slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)
    const imgUrl = null
    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {/*currentTabSelected.label*/}
            <form action="submit" >
                <div>
                    {imgUrl ? (
                        <img src="" alt="" />
                    ) : (
                        <p>Aucune image</p>
                    )}
                </div>
                <div>
                    <TextInput
                        value={''}
                        onChange={handleChange}
                        placeholder={'Nom du produit (ex: Super Burger)'}
                        Icon={<FaHamburger />}
                    />
                    <TextInput
                        value={''}
                        onChange={handleChange}
                        placeholder={`Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`}
                        Icon={<BsFillCameraFill />}
                    />
                    <TextInput
                        value={''}
                        onChange={handleChange}
                        placeholder={'Prix'}
                        Icon={<MdOutlineEuro />}
                    />
                    <PrimaryButton />
                </div>
            </form>
        </AdminPanelContentStyled>
    )
}

export default AdminPanelContent

const AdminPanelContentStyled = styled.div`
    width: 100%;
    height: 250px;
    padding: 17px;
    background-color: ${theme.colors.white};
    color: #000;
    box-shadow: ${theme.shadows.subtle};

    &.closed {
        height: 0;
        padding: 0;
    }
`