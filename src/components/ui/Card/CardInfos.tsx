import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

type CardInfosProps = {
    title: string,
    leftDescription: string,
    onAdd?: React.MouseEventHandler<HTMLButtonElement>,
    onRemove?: React.MouseEventHandler<HTMLButtonElement>,
    isUnavailable: boolean,
    quantity: number
}

export const CardInfos = ({ title, leftDescription, onAdd, onRemove, isUnavailable, quantity }: CardInfosProps) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} onAdd={onAdd} onRemove={onRemove} isUnavailable={isUnavailable} quantity={quantity} />
        </>
    )
}