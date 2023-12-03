import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { PrimaryButton } from '../../../ui/PrimaryButton'
import { theme } from "../../../../theme";

export const MenuOrder = () => {
    const [products, setProducts] = useState(fakeMenu2)

    return (
        <MenuOrderStyled>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id} className={'card'}>
                            <div className={'card-img'}>
                                <img src={product.imageSource} alt={product.title} />
                            </div>
                            <h3 className={'card-title'}>{product.title}</h3>
                            <div className={'card-description'}>
                                <p>
                                    {product.price} €
                                </p>
                                <div className={'add_button-container'}>
                                    <PrimaryButton label={'Ajouter'} />
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </MenuOrderStyled>
    )
}

const MenuOrderStyled = styled.section`
    flex: 1;
    padding-top: 50px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 85px 60px;
        list-style: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 330px;
        width: 240px;
        background: ${theme.colors.white};
        padding: 50px 20px 10px 20px;
        box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);
        border-radius: ${theme.borderRadius.extraRound};

        .card-img {
            height: 145px;
            width: 200px;
            text-align: center;

            img {
                max-width: 100%;
                max-height: 100%;
            }
        }

        .card-title {
            width: 100%;
            margin: 15px 0 0 0;
            color: #17161A;
            font-size: 36px;
            font-weight: 700;
            text-align: start;
        }

        .card-description {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            margin-top: 7.5px;

            p {
                margin: 0;
                color: #FFA01B;
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
            }

            .add_button-container {
                width: 95px;

                button {
                    padding-top: ${theme.gridUnit * 1.5}px;
                    padding-bottom: ${theme.gridUnit * 1.5}px;
                }
            }
        }
    }
`;