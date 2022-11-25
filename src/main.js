import imask from 'imask';

const bgColorCircle = document.querySelector(".cc-front .circle-1")
const bgColorShadow = document.querySelector(".cc-front .circle-2")

function setCardType(flag) {
    const colors = {
      visa: ["red", "purple"],
      mastercard: ["blue", "green"],
      american: ["white", "white"],
    }

    // bgColorCircle.style.backgroundColor = colors[flag[0]]
    // bgColorShadow.style.backgroundColor = colors[flag[1]]
}

globalThis.setCardType = setCardType

const cvcCode = document.getElementById("card-cvc")
const cvcCodePattern = {
    mask: "000"
}

const cvcCodeMasked = imask(cvcCode, cvcCodePattern)

const expirationMonth = document.getElementById('card-month')
const expirationMonthPattern = {
    mask: imask.MaskedRange,
    from: 1,
    to: 12
}

const expirationMonthMasked = imask(expirationMonth, expirationMonthPattern)

const expirationYear = document.getElementById('card-year')
const expirationYearPattern = {
  mask: "YY",
  blocks: {
    YY: {
      mask: imask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}

const expirationYearMasked = imask(expirationYear, expirationYearPattern)

const cardNumber = document.getElementById('card-number')
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: 'visa',
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '')
    const foundMask = dynamicMasked.compiledMasks.find(function(item) {
      return number.match(item.regex)
    })

    return foundMask
  }
}

const cardNumberMasked = imask(cardNumber, cardNumberPattern)
