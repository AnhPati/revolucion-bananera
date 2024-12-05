import { Link } from "react-router-dom"

type ErrorButtonPropsType = {
    text: string,
    url: string
}

export const ErrorButton = ({ text, url }: ErrorButtonPropsType) => {
    return (
        <Link to={url}>
            <button>{text}</button>
        </Link>
    )
}
