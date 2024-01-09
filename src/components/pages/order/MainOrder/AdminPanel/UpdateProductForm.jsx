import styled from "styled-components";
import { HiCursorClick } from 'react-icons/hi'

const UpdateProductForm = () => {
    return (
        <UpdateProductFormStyled>
            <h2>Cliquer sur un produit pour le modifier <HiCursorClick /></h2>
        </UpdateProductFormStyled>
    )
}

export default UpdateProductForm

const UpdateProductFormStyled = styled.div`
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