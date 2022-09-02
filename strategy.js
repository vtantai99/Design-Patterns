const preOrderPrice = (originalPrice) => {
  return originalPrice * 0.8
}

const promotionPrice = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30
}

const defaultPrice = (originalPrice) => {
  return originalPrice
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  default: defaultPrice
}

const getPrice = (originalPrice, typePromotion) => {
  return getPriceStrategies[typePromotion](originalPrice)
}

console.log('Boy 🚀 ~> getPrice', getPrice(200, 'preOrder'))
