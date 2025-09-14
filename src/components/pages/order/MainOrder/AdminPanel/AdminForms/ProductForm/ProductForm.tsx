import styled from "styled-components"
import { ImgPreview } from "./ImgPreview"
import { theme } from "@/theme/theme"
import { forwardRef } from "react"
import ProductFormFields, { ProductFormFieldsProps } from "./ProductFormFields"

type ProductFormProps = {
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    children: React.ReactNode
} & ProductFormFieldsProps

export const ProductForm = forwardRef<HTMLInputElement, ProductFormProps>(({
    product,
    onSubmit,
    onChange,
    children,
    onFocus,
    onBlur
}, ref) => {
    return (
        <ProductFormStyled action='submit' onSubmit={onSubmit}>
            <ImgPreview
                src={product.imageSource}
                alt={product.title}
            />
            <ProductFormFields
                product={product}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
            />
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

    .form-footer {
        display: flex;
        align-items: center;
        grid-area: 4 / 2 / 5 / 5;
        margin-top: 10px;
    }
`