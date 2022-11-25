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

// input masks
const cvcCode = document.getElementById('card-cvc')
const cvcCodePattern = {
    mask: '000'
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
