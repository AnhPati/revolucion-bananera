import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
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
        value: productValues.price > 0 ? productValues.price : '',
        placeholder: 'Prix',
        Icon: <MdOutlineEuro />,
    }
]