import styled from "styled-components";
import { ErrorLogo } from "./ErrorLogo";

export const ErrorContent = () => {
    return (
        <ErrorContentStyled>
            <ErrorLogo />
            <div className="error-text-container">
                <h2>Il semblerait que tu tourne en rond après une frite...</h2>
                <p>Je te propose de remettre les pieds dans le plat.</p>
            </div>
        </ErrorContentStyled>
    )
}

const ErrorContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .error-text-container {
        margin: 50px 0;
        text-align: center;

        h2 {
            font-size: 30px;
        }
    }
`;