import styled from "styled-components"
import { TextInput } from "../../../../../ui/TextInput"
import { ImgPreview } from "./ImgPreview"
import { getSelectInputsConfig, getTextInputsConfig } from "../helpers/getInputsConfig"
import { theme } from "../../../../../../theme"
import { forwardRef } from "react"
import { SelectInput } from "../../../../../ui/SelectInput"

export const ProductForm = forwardRef(({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(product)
    const selectInputs = getSelectInputsConfig(product)

    return (
        <ProductFormStyled action='submit' onSubmit={onSubmit}>
            <ImgPreview
                src={product.imageSource}
                alt={product.title}
            />
            <div className='inputs-container'>
                {textInputs.map(textInput => (
                    <TextInput
                        key={textInput.id}
                        {...textInput}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        variant={'secondary'}
                        ref={ref && textInput.name === 'title' ? ref : null}
                    />
                ))}
                {selectInputs.map(selectInput => (
                    <SelectInput
                        {...selectInput}
                        key={selectInput.id}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                ))}
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
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;

        .input-title {
            grid-area: 1/1/2/4;
        }
        
        .input-img {
            grid-area: 2/1/3/4;
        }

        .input-price {
            grid-area: 3/1/4/2;
        }
    }

    .form-footer {
        display: flex;
        align-items: center;
        grid-area: 4 / 2 / 5 / 5;
        margin-top: 10px;
    }
`