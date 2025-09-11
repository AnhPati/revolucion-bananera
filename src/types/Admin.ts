import { TabValues } from "./Tab"

export type AdminModeInfos = {
    isAdminMode: boolean,
    adminPanel: AdminPanelInfos,
    cardSelected: string | null
}

export type AdminPanelInfos = {
    isOpen: boolean,
    tabSelected: TabValues
}