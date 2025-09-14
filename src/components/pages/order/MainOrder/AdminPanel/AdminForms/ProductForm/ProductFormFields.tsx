import { forwardRef } from "react"
import styled from "styled-components"
import { getSelectInputsConfig, getTextInputsConfig } from "./helpers/getInputsConfig"
import { TextInput } from "@/components/ui/TextInput"
import { SelectInput } from "@/components/ui/SelectInput"
import { theme } from "@/theme/theme"
import { ProductFormData } from "@/types/Product"

export type ProductFormFieldsProps = {
    product: ProductFormData,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>
}

const ProductFormFields = forwardRef<HTMLInputElement, ProductFormFieldsProps>(({
    product,
    onChange,
    onFocus,
    onBlur
}, ref) => {

    const textInputs = getTextInputsConfig(product)
    const selectInputs = getSelectInputsConfig(product)

    return (
        <ProductFormFieldsStyled>
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
        </ProductFormFieldsStyled>
    )
})
ProductFormFields.displayName = "ProductFormFields"

export default ProductFormFields

const ProductFormFieldsStyled = styled.div`
    grid-area: 1 / 2 / 4 / 5;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xs};

    .input-title {
        grid-area: 1/1/2/4;
    }
    
    .input-img {
        grid-area: 2/1/3/4;
    }

    .input-price {
        grid-area: 3/1/4/2;
    }
`;