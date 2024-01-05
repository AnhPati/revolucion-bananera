import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import AdminContext from "../../../../../contexts/AdminContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import { TextInput } from "../../../../ui/TextInput"
import { Button } from "../../../../ui/Button";
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
    id: '',
    title: '',
    imageSource: '',
    price: 0
}

const AdminPanelContent = () => {
    const [productValues, setProductValues] = useState(EMPTY_PRODUCT)
    const [isAdding, setIsAdding] = useState(false)
    const { adminMode, handleAddProduct } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const handleChange = (e) => {
        const { name, value } = e.target

        setProductValues({ ...productValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProduct = {
            ...productValues,
            id: crypto.randomUUID()
        }

        displaySuccesMessage()
        handleAddProduct(newProduct)
        setProductValues({ id: '', title: '', imageSource: '', price: 0 })
    }

    const displaySuccesMessage = () => {
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 2000)
    }

    const tabs = getAdminTabsConfig().slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)

    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {currentTabSelected.id === 'tab-add' ? (
                <form action='submit' onSubmit={handleSubmit}>
                    <div className='img-container'>
                        {productValues.imageSource ? (
                            <img src={productValues.imageSource} alt={productValues.title} />
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
                            variant={'secondary'}
                        />
                        <TextInput
                            name={'imageSource'}
                            value={productValues.imageSource}
                            onChange={handleChange}
                            placeholder={`Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`}
                            Icon={<BsFillCameraFill />}
                            variant={'secondary'}
                        />
                        <TextInput
                            name={'price'}
                            value={productValues.price > 0 ? productValues.price : ''}
                            onChange={handleChange}
                            placeholder={'Prix'}
                            Icon={<MdOutlineEuro />}
                            variant={'secondary'}
                        />
                    </div>
                    <div className='button-container'>
                        <Button
                            label={'Ajouter un nouveau produit au menu'}
                            variant={'success'}
                        />
                        {isAdding && <span className="succes-message"><FiCheck /> Ajouté avec succès !</span>}
                    </div>

                </form>
            ) : (
                <>
                    {currentTabSelected.label}
                </>
            )}
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
            border: solid 1px #E4E5E9;
            border-radius: ${theme.borderRadius.round};

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

        .button-container {
            display: flex;
            align-items: center;
            grid-area: 4 / 2 / 5 / 5;
            margin-top: 10px;

            .succes-message {
                display: flex;
                align-items: center;
                margin-left: 5px;
                padding-left: 10px;
                color: #60BD4F;
                font-size: 15px;

                svg {
                    font-size: 18px;
                    border: solid 1px #60BD4F;
                    border-radius: 50%;
                    margin-right: 5px;
                }
            }
        }
    }
`