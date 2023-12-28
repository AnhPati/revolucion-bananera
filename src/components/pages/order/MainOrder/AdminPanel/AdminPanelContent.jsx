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

const EMPTY_PRODUCT = {
    id: '',
    title: '',
    imageSource: '',
    price: 0
}

const AdminPanelContent = () => {
    const [productValues, setProductValues] = useState(EMPTY_PRODUCT)
    const { adminMode, handleAddProduct } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const handleChange = (e) => {
        const newProductValues = { ...productValues }
        const inputName = e.target.name
        setProductValues({ ...newProductValues, [inputName]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            ...productValues,
            id: new Date().getTime()
        }
        console.log(newProduct)
        handleAddProduct(newProduct)
        setProductValues({ id: '', title: '', imageSource: '', price: 0 })
    }

    const tabs = getAdminTabsConfig().slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)
    const imgUrl = null
    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {/*currentTabSelected.label*/}
            <form action='submit' onSubmit={handleSubmit}>
                <div className='img-container'>
                    {imgUrl ? (
                        <img src="" alt="" />
                    ) : (
                        <p>Aucune image</p>
                    )}
                </div>
                <div className='inputs-container'>
                    <TextInput
                        name={'title'}
                        value={productValues.title}
                        onChange={handleChange}
                        placeholder={'Nom du produit (ex: Super Burger)'}
                        Icon={<FaHamburger />}
                    />
                    <TextInput
                        name={'imageSource'}
                        value={productValues.imageSource}
                        onChange={handleChange}
                        placeholder={`Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`}
                        Icon={<BsFillCameraFill />}
                    />
                    <TextInput
                        name={'price'}
                        value={productValues.price > 0 ? productValues.price : ''}
                        onChange={handleChange}
                        placeholder={'Prix'}
                        Icon={<MdOutlineEuro />}
                    />
                </div>
                <div className='button-container'>
                    <PrimaryButton
                        label={'Ajouter un nouveau produit au menu'}
                    />
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
        overflow: hidden;
    }

    form {
        display: grid;
        grid-column-gap: ${theme.spacing.md};
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        width: 100%;

        .img-container {
            grid-area: 1 / 1 / 4 / 2;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
            }

            p {
                font-size: 16px;
                color: #93A2B1;
            }
        }

        .inputs-container {
            grid-area: 1 / 2 / 4 / 5;
            display: grid;
            grid-template-rows: repeat(3, 1fr);
        }

        .input-container {
                margin: 0;

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
            grid-area: 4 / 2 / 5 / 4;
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