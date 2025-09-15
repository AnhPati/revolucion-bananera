import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import { PiNotepad } from "react-icons/pi";
import AddProductForm from "../AdminForms/AddProductForm/AddProductForm"
import UpdateProductForm from "../AdminForms/UpdateProductForm/UpdateProductForm"
import { HintMessage } from "../AdminForms/UpdateProductForm/HintMessage"
import { AdminOrders } from "../AdminOrders/AdminOrders"
import { TabType, TabValues } from "@/types/Tab";

type getAdminTabsConfigParameters = {
    isOpen?: boolean,
    onClickOpenPanel?: React.MouseEventHandler<HTMLButtonElement>,
    onClickSelectTab?: React.MouseEventHandler<HTMLButtonElement>,
    isCardSelected?: boolean
}

export const getAdminTabsConfig = ({
    isOpen,
    onClickOpenPanel,
    onClickSelectTab,
    isCardSelected
}: getAdminTabsConfigParameters): TabType[] => [
        {
            id: 'tab-collapse',
            className: isOpen ? 'tab-control' : 'tab-control tab-active',
            Icon: isOpen ? FiChevronDown : FiChevronUp,
            onClick: onClickOpenPanel
        },
        {
            id: 'tab-add',
            label: 'Ajouter un produit',
            Icon: AiOutlinePlus,
            onClick: onClickSelectTab,
            Content: <AddProductForm />
        },
        {
            id: 'tab-update',
            label: 'Modifier un produit',
            Icon: MdModeEditOutline,
            onClick: onClickSelectTab,
            Content: isCardSelected ? <UpdateProductForm /> : <HintMessage />
        },
        {
            id: 'tab-orders',
            label: 'Commandes en cours',
            Icon: PiNotepad,
            onClick: onClickSelectTab,
            Content: <AdminOrders />
        }
    ]



export const getCurrentTabSelected = (tabs: TabType[], tabSelected: TabValues) => {
    const tab = tabs.find((tab) => tab.id ? tab.id === tabSelected : null)

    return tab
}