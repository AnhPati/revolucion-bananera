import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

export const CardInfos = ({ title, price }) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription price={price} />
        </>
    )
}