import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"

export const getAdminTabsConfig = (isOpen, tabSelected, onClickOpenPanel, onClickSelectTab) => [
    {
        id: 'tab-collapse',
        className: isOpen ? 'tab-control' : 'tab-control tab-active',
        Icon: isOpen ? <FiChevronDown /> : <FiChevronUp />,
        onClick: onClickOpenPanel
    },
    {
        id: 'tab-add',
        label: 'Ajouter un produit',
        className: tabSelected === "tab-add" ? 'tab-active' : '',
        Icon: <AiOutlinePlus />,
        onClick: onClickSelectTab,
        tabSelected: tabSelected
    },
    {
        id: 'tab-update',
        label: 'Modifier un produit',
        className: tabSelected === "tab-update" ? 'tab-active' : '',
        Icon: <MdModeEditOutline />,
        onClick: onClickSelectTab,
        tabSelected: tabSelected
    }
]

export const getCurrentTabSelected = (tabs, tabSelected) => {
    const tab = tabs.find((tab) => tab.id ? tab.id === tabSelected : null)

    return tab
}