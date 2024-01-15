import styled from "styled-components";
import { TextInput } from "../../../../../ui/TextInput";
import { theme } from "../../../../../../theme";
import { ImgPreview } from "../ImgPreview";
import { useContext } from "react";
import AdminContext from "../../../../../../contexts/AdminContext";
import { getTextInputsConfig } from "../helpers/getTextInputsConfig";
import { UpdateFormMessage } from "./UpdateFormMessage";

const UpdateProductForm = () => {
    const { productSelected, titleInputRef, handleUpdateProduct } = useContext(AdminContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        }

        handleUpdateProduct(productBeingUpdated)
    }

    const textInputs = getTextInputsConfig(productSelected)
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
            <div className="submit">
                <UpdateFormMessage />
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

    .submit {
        display: flex;
        align-items: center;
        grid-area: 4 / 2 / 5 / 5;
        margin-top: 10px;
    }
`;