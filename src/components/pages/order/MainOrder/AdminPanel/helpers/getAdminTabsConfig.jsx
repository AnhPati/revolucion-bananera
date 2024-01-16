import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import AddProductForm from "../AddProductForm"
import UpdateProductForm from "../UpdateProductPanel/UpdateProductForm"
import { HintMessage } from "../UpdateProductPanel/HintMessage"

export const getAdminTabsConfig = ({
    isOpen,
    onClickOpenPanel,
    onClickSelectTab,
    isCardSelected
}) => [
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
            onClick: onClickSelectTab,
            Content: <AddProductForm />
        },
        {
            id: 'tab-update',
            label: 'Modifier un produit',
            Icon: <MdModeEditOutline />,
            onClick: onClickSelectTab,
            Content: isCardSelected ? <UpdateProductForm /> : <HintMessage />
        }
    ]

export const getCurrentTabSelected = (tabs, tabSelected) => {
    const tab = tabs.find((tab) => tab.id ? tab.id === tabSelected : null)

    return tab
}