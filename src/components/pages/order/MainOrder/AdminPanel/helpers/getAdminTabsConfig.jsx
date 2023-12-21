import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"

export const getAdminTabsConfig = (
    isOpen,
    onClickOpenPanel,
    onClickSelectTab
) => [
        {
            id: 'tab-collapse',
            className: isOpen ? 'tab-control' : 'tab-control tab-active',
            Icon: isOpen ? <FiChevronDown /> : <FiChevronUp />,
            onClick: onClickOpenPanel
        },
        {
            id: 'tab-add',
            label: 'Ajouter un produit',
            Icon: <AiOutlinePlus />,
            onClick: onClickSelectTab
        },
        {
            id: 'tab-update',
            label: 'Modifier un produit',
            Icon: <MdModeEditOutline />,
            onClick: onClickSelectTab
        }
    ]

export const getCurrentTabSelected = (tabs, tabSelected) => {
    const tab = tabs.find((tab) => tab.id ? tab.id === tabSelected : null)

    return tab
}