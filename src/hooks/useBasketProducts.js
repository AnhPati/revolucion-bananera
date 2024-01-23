import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"

export const useBasketProducts = () => {
    const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)

    return { basketProducts }
}
