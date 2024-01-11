import styled from "styled-components";
import { Button } from "../../../../../ui/Button";
import { TextInput } from "../../../../../ui/TextInput";
import { theme } from "../../../../../../theme";
import { ImgPreview } from "../ImgPreview";
import { useContext, useState } from "react";
import AdminContext from "../../../../../../contexts/AdminContext";
import { getTextInputsConfig } from "../helpers/getTextInputsConfig";

const UpdateProductForm = ({ productId }) => {
    const { products, titleInputRef } = useContext(AdminContext)
    const productSelected = products.find((product) => product.id === productId)
    const [productValues, setProductValues] = useState(productSelected)

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target)

        setProductValues({ ...productValues, [name]: value })
    }

    const textInputs = getTextInputsConfig(productValues)
    return (
        <UpdateProductFormStyled action='submit'>
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
                            ref={textInput.name === 'title' ? titleInputRef : null}
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
        </UpdateProductFormStyled>
    )
}

export default UpdateProductForm
const UpdateProductFormStyled = styled.form`
    display: grid;
    grid-column-gap: ${theme.spacing.md};
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height: 100%;
    width: 100%;

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

    .test {
        background: red;
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    }
`;