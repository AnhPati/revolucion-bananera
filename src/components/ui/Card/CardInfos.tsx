import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

export const CardInfos = ({ title, leftDescription, onAdd, onRemove, isUnavailable, quantity }) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} onAdd={onAdd} onRemove={onRemove} isUnavailable={isUnavailable} quantity={quantity} />
        </>
    )
}