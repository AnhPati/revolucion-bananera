import { Link } from "react-router-dom"

export const ErrorButton = ({ text, url }) => {
    return (
        <Link to={url}>
            <button>{text}</button>
        </Link>
    )
}
