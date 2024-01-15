import styled from "styled-components"
import { TextInput } from "../../../../ui/TextInput"
import { ImgPreview } from "./ImgPreview"
import { getTextInputsConfig } from "./helpers/getTextInputsConfig"
import { theme } from "../../../../../theme"
import { forwardRef } from "react"

export const ProductForm = forwardRef(({ product, onSubmit, onChange, isAdding, submitMessageType, children }, ref) => {
    const textInputs = getTextInputsConfig(product)

    return (
        <ProductFormStyled action='submit' onSubmit={onSubmit}>
            <ImgPreview
                src={product.imageSource}
                alt={product.title}
            />
            <div className='inputs-container'>
                {textInputs.map(textInput => {
                    return (
                        <TextInput
                            key={textInput.id}
                            {...textInput}
                            onChange={onChange}
                            variant={'secondary'}
                            ref={ref && textInput.name === 'title' ? ref : null}
                        />
                    )
                })}
            </div>
            <div className='form-footer'>
                {children}
            </div>
        </ProductFormStyled>
    )
})
ProductForm.displayName = "ProductForm"

const ProductFormStyled = styled.form`
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

    .form-footer {
        display: flex;
        align-items: center;
        grid-area: 4 / 2 / 5 / 5;
        margin-top: 10px;
    }
`