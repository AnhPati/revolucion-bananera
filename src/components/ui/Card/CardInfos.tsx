import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

type CardInfosPropsType = {
    title: string,
    leftDescription: string,
    onAdd: () => void,
    onRemove: () => void,
    isUnavailable: boolean,
    quantity: number
}

export const CardInfos = ({ title, leftDescription, onAdd, onRemove, isUnavailable, quantity }: CardInfosPropsType) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} onAdd={onAdd} onRemove={onRemove} isUnavailable={isUnavailable} quantity={quantity} />
        </>
    )
}