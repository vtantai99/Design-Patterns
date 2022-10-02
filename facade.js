class Discount {
  calc(value) {
    return value * 0.9
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}

class ShoppeFacadePattern {
  constructor() {
    this.discount = new Discount()
    this.shipping = new Shipping()
    this.fees = new Fees()
  }

  calc(price) {
    price = this.discount.calc(price)
    console.log("Tai Vo 🚀 => discount", price)
    price = this.fees.calc(price)
    console.log("Tai Vo 🚀 => fees", price)
    price += this.shipping.calc()
    console.log("Tai Vo 🚀 => shipping", price)

    return price
  }
}

const buy = (price) => {
  const shoppe = new ShoppeFacadePattern()
  console.log("Tai Vo 🚀 => ~ Price shoppe", shoppe.calc(price))
}

buy(120000)
