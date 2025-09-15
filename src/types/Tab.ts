import { IconType } from "react-icons"

export type TabValues = "tab-collapse" | "tab-add" | "tab-update" | "tab-orders"

export type TabType = {
    id: TabValues,
    label?: string,
    Content?: JSX.Element,
    className?: string,
    Icon?: IconType,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}