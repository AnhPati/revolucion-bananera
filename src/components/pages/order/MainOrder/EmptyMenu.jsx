import styled from "styled-components";
import { PrimaryButton } from "../../../ui/PrimaryButton"
import AdminContext from "../../../../contexts/AdminContext";
import { useContext } from "react";

const EmptyMenu = () => {
    const { handleAddProduct } = useContext(AdminContext)

    return (
        <EmptyMenuStyled>
            <h1>
                Le menu est vide ?
            </h1>
            <h2>
                Cliquez ci-dessous pour le réinitialiser
            </h2>
            <PrimaryButton
                label={'Générer de nouveaux produits'}
                onClick={handleAddProduct}
            />
        </EmptyMenuStyled>
    )
}

export default EmptyMenu

const EmptyMenuStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;

    h1, h2 {
        text-align: center;
        color: #747B91;
        font-size: 36px;
        margin: 0;
    }

    h2 {
        font-weight: 400;
    }

    button {
        width: auto;
        padding-left: 25px;
        padding-right: 25px;
        margin: 10px 0;
    }
`;