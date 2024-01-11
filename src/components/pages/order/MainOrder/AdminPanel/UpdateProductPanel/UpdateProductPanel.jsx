import styled from "styled-components";
import { HiCursorClick } from 'react-icons/hi'
import AdminContext from "../../../../../../contexts/AdminContext";
import { useContext, useState } from "react";
import { ImgPreview } from "../ImgPreview";
import { getTextInputsConfig } from "../helpers/getTextInputsConfig";
import { TextInput } from "../../../../../ui/TextInput";
import { Button } from "../../../../../ui/Button";
import { theme } from "../../../../../../theme";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const UpdateProductPanel = () => {
    const { adminMode, products } = useContext(AdminContext)
    console.log
    const cardSelected = adminMode.adminPanel.cardSelected
    const productSelected = cardSelected ? products.find((product) => product.id === cardSelected) : EMPTY_PRODUCT
    const [productValues, setProductValues] = useState(productSelected)

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target)

        setProductValues({ ...productValues, [name]: value })
    }

    const textInputs = cardSelected && getTextInputsConfig(productValues)
    return (
        <UpdateProductPanelStyled>
            {cardSelected ? (
                <form action='submit'>
                    <ImgPreview
                        src={productSelected.imageSource}
                        alt={productSelected.title}
                    />
                    <div className='inputs-container'>
                        {textInputs.map(textInput => {
                            return (
                                <TextInput
                                    key={textInput.id}
                                    onChange={handleChange}
                                    {...textInput}
                                    variant={'secondary'}
                                />
                            )
                        })}
                    </div>
                    <div className='button-container'>
                        <Button
                            label={'Ajouter un nouveau produit au menu'}
                            variant={'success'}
                        />
                    </div>
                </form>
            ) : (
                <h2>Cliquer sur un produit pour le modifier <HiCursorClick /></h2>
            )}
        </UpdateProductPanelStyled>
    )
}

export default UpdateProductPanel

const UpdateProductPanelStyled = styled.div`
    form {
        display: grid;
        grid-column-gap: ${theme.spacing.md};
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        width: 100%;
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
    }

    h2 {
        margin-top: 49px;
        color: #747B91;
        font-weight: 400;

        svg {
            margin-bottom: -3.195px;
            margin-left: 3.875px;
        }
    }
`;