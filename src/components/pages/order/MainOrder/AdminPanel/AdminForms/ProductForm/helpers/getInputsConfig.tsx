import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
import { FiPackage } from "react-icons/fi"
import { GoMegaphone } from "react-icons/go"
import { MdOutlineEuro } from "react-icons/md"
import { isAvailableOptions, isPublicisedOptions } from "@/constants/select"
import { Product } from "@/types/Product"
import { convertBooleanToString } from "@/utils/string"

export const getTextInputsConfig = (productValues: Product) => [
    {
        id: "0",
        name: 'title',
        value: productValues.title,
        placeholder: 'Nom du produit (ex: Super Burger)',
        Icon: FaHamburger,
        className: 'input-title'
    },
    {
        id: "1",
        name: 'imageSource',
        value: productValues.imageSource,
        placeholder: `Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`,
        Icon: BsFillCameraFill,
        className: 'input-img'
    },
    {
        id: "2",
        name: 'price',
        value: productValues.price,
        placeholder: 'Prix',
        Icon: MdOutlineEuro,
        className: 'input-price'
    }
]

export const getSelectInputsConfig = (productValues: Product) => [
    {
        id: "3",
        name: "isAvailable",
        value: convertBooleanToString(productValues.isAvailable),
        options: isAvailableOptions.map(option => ({
            ...option,
            value: convertBooleanToString(option.value)
        })),
        Icon: FiPackage
    },
    {
        id: "4",
        name: "isPublicised",
        value: convertBooleanToString(productValues.isPublicised),
        options: isPublicisedOptions.map(option => ({
            ...option,
            value: convertBooleanToString(option.value)
        })),
        Icon: GoMegaphone
    }
]