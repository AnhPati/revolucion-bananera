type Price = number | string

export const formatPrice = (priceToFormat: Price): string => {
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

export const replaceFrenchCommaWithDot = (price: Price): number => {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}