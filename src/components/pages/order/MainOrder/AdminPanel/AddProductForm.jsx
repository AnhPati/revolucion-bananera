import { useContext, useState } from "react"
import { TextInput } from "../../../../ui/TextInput"
import { FiCheck } from "react-icons/fi"
import { Button } from "../../../../ui/Button"
import AdminContext from "../../../../../contexts/AdminContext"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import { ImgPreview } from "./ImgPreview"
import { SubmitMessage } from "./SubmitMessage"
import { getTextInputsConfig } from "./helpers/getTextInputsConfig"
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths"

const EMPTY_PRODUCT = {
    id: '',
    title: '',
    imageSource: '',
    price: ''
}

const AddProductForm = () => {
    const [productValues, setProductValues] = useState(EMPTY_PRODUCT)
    const [isAdding, setIsAdding] = useState(false)
    const { handleAddProduct } = useContext(AdminContext)

    const handleChange = (e) => {
        const { name, value } = e.target

        setProductValues({ ...productValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProductPrice = replaceFrenchCommaWithDot(productValues.price)
        if (isNaN(newProductPrice)) {
            setProductValues({ ...productValues, price: '' })

        } else {
            const newProduct = {
                ...productValues,
                id: crypto.randomUUID()
            }

            displaySuccesMessage()
            handleAddProduct(newProduct)
            setProductValues(EMPTY_PRODUCT)
        }
    }

    const displaySuccesMessage = () => {
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 2000)
    }

    const textInputs = getTextInputsConfig(productValues)

    return (
        <AddProductFormStyled action='submit' onSubmit={handleSubmit}>
            <ImgPreview
                src={productValues.imageSource}
                alt={productValues.title}
            />
            <div className='inputs-container'>
                {textInputs.map(textInput => {
                    console.log(typeof textInput.value)
                    return (
                        <TextInput
                            key={textInput.id}
                            {...textInput}
                            onChange={handleChange}
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
                {isAdding && (
                    <SubmitMessage
                        label={'Ajouté avec succès !'}
                        Icon={<FiCheck />}
                    />
                )}
            </div>
        </AddProductFormStyled>
    )
}

export default AddProductForm

const AddProductFormStyled = styled.form`
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
`;