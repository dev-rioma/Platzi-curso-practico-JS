// const priceOriginal = 120
// const descount = 18

function calculatePriceWithDescount (price, descount) {
  const percentegePriceWithDescount = 100 - descount
  const priceWithDescount = (price * percentegePriceWithDescount)/100

  return priceWithDescount
}

// const coupons = [
//   "JMA92",
//   "%OFF%",
//   "SAVE_YOU33"
// ]

const coupons = [
  {
    name: "JMA92",
    discount: 15
  },
  {
    name: "%OFF%",
    discount: 30
  },
  {
    name: "SAVE_YOU33",
    discount: 25
  },
]

function onClickDiscount () {
  const inputPrice = document.getElementById("InputPrice")
  const priceValue = inputPrice.value

  const inputCoupon = document.getElementById("InputCoupon")
  const couponValue = inputCoupon.value

  // let discount

  // if (!coupons.includes(couponValue)) {
  //   alert(`El cupon ${couponValue} no es valido`)
  // } else if (couponValue === "JMA92"){
  //   descount = 15
  // } else if (couponValue === "%OFF%") {
  //   discount = 30
  // } else if (couponValue === "SAVE_YOU33") {
  //   discount = 25
  // }

  // switch (couponValue) {
  //   case coupons[0]:
  //     //JMA92
  //     discount = 15
  //     break
  //   case coupons[1]:
  //     //%OFF%
  //     discount = 30
  //     break
  //   case coupons[2]:
  //     //SAVE_YOU33
  //     discount = 25
  //     break;
  // }

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue
  }

  const userCoupon = coupons.find(isCouponValueValid)

  if (!userCoupon) {
    alert(`El cupon ${couponValue} no es valido`)
  } else {
    const discount = userCoupon.discount
    const priceWithDescount = calculatePriceWithDescount(priceValue, discount)

    const resultP = document.getElementById("ResultPrice")
  resultP.innerText = `El 💲💲 con descuento son: $ ${priceWithDescount}`
  }
  
}



// console.log({
//   priceOriginal,
//   descount,
//   percentegePriceWithDescount,
//   priceWithDescount,
// })