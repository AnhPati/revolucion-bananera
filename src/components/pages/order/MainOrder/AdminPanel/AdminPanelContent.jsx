import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import AdminContext from "../../../../../contexts/AdminContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import { TextInput } from "../../../../ui/TextInput"
import { PrimaryButton } from "../../../../ui/PrimaryButton";
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'

const AdminPanelContent = () => {
    const [inputValue, setInputValue] = useState('')
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
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={'Nom du produit (ex: Super Burger)'}
                        Icon={<FaHamburger />}
                    />
                    <TextInput
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={`Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`}
                        Icon={<BsFillCameraFill />}
                    />
                    <TextInput
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={'Prix'}
                        Icon={<MdOutlineEuro />}
                    />
                    <div className="button-container">
                        <PrimaryButton
                            label={'Ajouter un nouveau produit au menu'}
                        />
                    </div>
                </div>
            </form>
        </AdminPanelContentStyled>
    )
}

export default AdminPanelContent

const AdminPanelContentStyled = styled.div`
    width: 100%;
    height: 250px;
    padding-top: 31px;
    padding-left: 71px;
    background-color: ${theme.colors.white};
    color: #000;
    box-shadow: ${theme.shadows.subtle};

    &.closed {
        height: 0;
        padding: 0;
    }

    form {
        display: grid;
        grid-gap: ${theme.spacing.md};
        grid-template-columns: 1fr 3fr 2fr;

        .input-container {
            margin: 5px;

            > svg {
                top: ${theme.gridUnit}px;
            }

            input {
                font-size: ${theme.fonts.size.SM};
                padding-top: ${theme.gridUnit}px;
                padding-bottom: ${theme.gridUnit}px;

                &::placeholder {
                    color:  ${theme.colors.greyMedium};
                }

                &:focus-visible {
                    &::placeholder {
                        color: transparent;
                    }
                }
            }
        }

        .button-container {
            width: 275.25px;
            margin-top: 10px;

            button {
                height: auto;
                padding-top: 10px;
                padding-bottom: 10px;
                background: #60BD4F;
                border-color: #60BD4F;

                &:hover {
                    color: #60BD4F;
                    background: #FFF;
                }

                &:active {
                    color: ${theme.colors.white};
                    background: #60BD4F;
                    transition: none;
                }
            }
        }
    }
`