import { CardDescription } from "./CardDescription"
import { CardTitle } from "./CardTitle"

export const CardInfos = ({ title, leftDescription, onClick }) => {
    return (
        <>
            <CardTitle title={title} />
            <CardDescription leftDescription={leftDescription} onClick={onClick} />
        </>
    )
}