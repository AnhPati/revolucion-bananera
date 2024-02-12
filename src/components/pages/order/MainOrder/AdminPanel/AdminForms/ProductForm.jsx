import styled from "styled-components"
import { TextInput } from "../../../../../ui/TextInput"
import { ImgPreview } from "./ImgPreview"
import { getTextInputsConfig } from "../helpers/getTextInputsConfig"
import { theme } from "../../../../../../theme"
import { forwardRef } from "react"
import { FiPackage } from "react-icons/fi"
import { GoMegaphone } from "react-icons/go"

export const ProductForm = forwardRef(({ product, onSubmit, onChange, isAdding, submitMessageType, children, onFocus, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(product)
    const priceTextInput = textInputs[2]

    return (
        <ProductFormStyled action='submit' onSubmit={onSubmit}>
            <ImgPreview
                src={product.imageSource}
                alt={product.title}
            />
            <div className='inputs-container'>
                {textInputs.map(textInput => {
                    if (textInput.id < 2) {
                        return (
                            <TextInput
                                key={textInput.id}
                                {...textInput}
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                variant={'secondary'}
                                ref={ref && textInput.name === 'title' ? ref : null}
                            />
                        )
                    }
                })}
                <div className='last-inputs-container'>
                    <TextInput
                        {...priceTextInput}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        variant={'secondary'}
                        ref={null}
                    />
                    <div className="input-select">
                        <FiPackage />
                        <select
                            onChange={onChange}
                            name="isAvailable"
                            id="stock"
                            value={product.isAvailable ? product.isAvailable : true}
                        >
                            <option value={true}>En stock</option>
                            <option value={false}>En rupture</option>
                        </select>
                    </div>
                    <div className="input-select">
                        <GoMegaphone />
                        <select
                            onChange={onChange}
                            name="isPublicised"
                            id="advertising"
                            value={product.isPublicised ? product.isPublicised : false}
                        >
                            <option value={false}>Sans pub</option>
                            <option value={true}>Avec pub</option>
                        </select>
                    </div>
                </div>
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

        .last-inputs-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;

            .input-select {
                display: inline-flex;
                padding: 8px 16px;
                align-items: center;
                gap: 13px;
                background-color: #F5F5F7;
                border-radius: 5px;

                select {
                    width: 100%;
                    background-color: #F5F5F7;
                    border: none;
                    color: #17161A;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    &:focus-visible {
                        outline: none;
                    }
                }

                svg {
                    font-size: 16px;
                    color: #747B91;
                }
            }
        }
    }

    .form-footer {
        display: flex;
        align-items: center;
        grid-area: 4 / 2 / 5 / 5;
        margin-top: 10px;
    }
`