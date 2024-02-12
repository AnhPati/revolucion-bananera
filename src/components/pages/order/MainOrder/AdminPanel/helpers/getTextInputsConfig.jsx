import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
import { FiPackage } from "react-icons/fi"
import { GoMegaphone } from "react-icons/go"
import { MdOutlineEuro } from "react-icons/md"

export const getTextInputsConfig = (productValues) => [
    {
        id: "0",
        name: 'title',
        value: productValues.title,
        placeholder: 'Nom du produit (ex: Super Burger)',
        Icon: <FaHamburger />,
    },
    {
        id: "1",
        name: 'imageSource',
        value: productValues.imageSource,
        placeholder: `Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`,
        Icon: <BsFillCameraFill />,
    },
    {
        id: "2",
        name: 'price',
        value: productValues.price,
        placeholder: 'Prix',
        Icon: <MdOutlineEuro />,
    }
]

export const getSelectInputsConfig = (productValues) => [
    {
        id: "3",
        name: "isAvailable",
        value: productValues.isAvailable,
        options: [
            {
                value: true,
                label: 'En stock'
            },
            {
                value: false,
                label: 'En rupture'
            }
        ],
        Icon: <FiPackage />
    },
    {
        id: "4",
        name: "isPublicised",
        value: productValues.isPublicised,
        options: [
            {
                value: false,
                label: 'Sans pub'
            },
            {
                value: true,
                label: 'Avec pub'
            }
        ],
        Icon: <GoMegaphone />
    }
]