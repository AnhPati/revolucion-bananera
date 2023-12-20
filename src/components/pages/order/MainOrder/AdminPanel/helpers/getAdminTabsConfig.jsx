import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"

export const getAdminTabsConfig = (isOpen, tabSelected, onClickDisplayTab, onClickMenuTabs) => [
    {
        className: isOpen ? 'tab-control' : 'tab-control tab-active',
        Icon: isOpen ? <FiChevronDown /> : <FiChevronUp />,
        onClick: onClickDisplayTab
    },
    {
        id: 'tab-add',
        label: 'Ajouter un produit',
        Icon: <AiOutlinePlus />,
        onClick: onClickMenuTabs,
        tabSelected: tabSelected
    },
    {
        id: 'tab-update',
        label: 'Modifier un produit',
        Icon: <MdModeEditOutline />,
        onClick: onClickMenuTabs,
        tabSelected: tabSelected
    }
]