import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

export const CardInfos = ({ title, leftDescription }) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} />
        </>
    )
}