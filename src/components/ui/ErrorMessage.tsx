type ErrorMessageProps = {
    className?: string,
    message: string
}

export const ErrorMessage = ({ className, message }: ErrorMessageProps) => {
    return (
        <span className={className}>
            {message}
        </span>
    )
}