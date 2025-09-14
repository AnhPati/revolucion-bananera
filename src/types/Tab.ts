import { IconType } from "react-icons"

export type TabValues = "tab-collapse" | "tab-add" | "tab-update" | "tab-orders"

export type Tab = {
    id: TabValues,
    label?: string,
    Content?: JSX.Element,
    className?: 'tab-control' | 'tab-control tab-active',
    Icon?: IconType,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}