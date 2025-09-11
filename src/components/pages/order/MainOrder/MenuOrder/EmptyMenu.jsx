import styled from "styled-components";
import { Button } from "../../../../ui/Button"
import { useOrderContext } from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../theme";

const EmptyMenu = () => {
    const { adminMode, handleGenerateNewProducts, userId } = useOrderContext()
    const isAdminMode = adminMode.isAdminMode

    return (
        <EmptyMenuStyled>
            {isAdminMode ? (
                <>
                    <h1>
                        Le menu est vide ?
                    </h1>
                    <h2>
                        Cliquez ci-dessous pour le réinitialiser
                    </h2>
                    <Button
                        label={'Générer de nouveaux produits'}
                        onClick={() => handleGenerateNewProducts(userId)}
                    />
                </>
            ) : (
                <>
                    <h1>
                        Victime de notre succès ! :D
                    </h1>
                    <h2>
                        De nouvelles recettes sont en cours de préparation.
                    </h2>
                    <h2>
                        À très vite !
                    </h2>
                </>
            )}
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
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        margin: 0;
    }

    h2 {
        font-weight: ${theme.fonts.weights.regular};
    }

    button {
        width: auto;
        padding-left: 25px;
        padding-right: 25px;
        margin: 10px 0;
    }
`;