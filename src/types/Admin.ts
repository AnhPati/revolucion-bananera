import { TabValues } from "./Tab"

export type AdminModeInfos = {
    isAdminMode: boolean,
    adminPanel: AdminPanelInfos
}

export type AdminPanelInfos = {
    isOpen: boolean,
    tabSelected: TabValues,
    cardSelected: string | null
}