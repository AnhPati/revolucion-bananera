import styled from "styled-components";

const UpdateProductForm = () => {
    return (
        <UpdateProductFormStyled>
            <h2>Cliquer sur un produit pour le modifier</h2>
        </UpdateProductFormStyled>
    )
}

export default UpdateProductForm

const UpdateProductFormStyled = styled.div`
    h2 {
        margin-top: 49px;
        color: #747B91;
        font-weight: 400;
    }
`;