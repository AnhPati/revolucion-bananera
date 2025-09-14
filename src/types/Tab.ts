import { IconType } from "react-icons"

export type TabValues = "tab-collapse" | "tab-add" | "tab-update" | "tab-orders"

export type Tab = {
    id: TabValues,
    className: 'tab-control' | 'tab-control tab-active',
    Icon: IconType,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}