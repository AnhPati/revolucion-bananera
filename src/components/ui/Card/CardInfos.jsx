import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

export const CardInfos = ({ title, leftDescription, onClick, isUnavailable, quantity }) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} onClick={onClick} isUnavailable={isUnavailable} quantity={quantity} />
        </>
    )
}