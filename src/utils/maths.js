import { findObjectById } from "./array"

export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export const calculateAmountToPay = (basketProducts, products) => {
  return basketProducts.reduce((amount, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, products)
    let productPrice = menuProduct.price

    if (isNaN(menuProduct.price)) {
      productPrice = 0
    }

    amount += basketProduct.quantity * productPrice

    return amount;
  }, 0);
}