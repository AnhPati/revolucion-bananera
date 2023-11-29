import { Link } from "react-router-dom"

export const Button = ({ text, url }) => {
    return (
        <Link to={url}>
            <button>{text}</button>
        </Link>
    )
}
