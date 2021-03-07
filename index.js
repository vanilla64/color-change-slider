const bgColorValues = {
  red: 50,
  green: 50,
  blue: 50
}

const textColorValues = {
  red: 50,
  green: 50,
  blue: 50
}

let bgColorChange = true

const sliderTitle = $('.slider__title')

const btnText = $('.slider__btn_type_color')
const btnBgColor = $('.slider__btn_type_bg')

const bgColorText = $('.slider__texts')
const text = $('.slider__paragraph')

const arrayOfInputs = Array.from($('.slider__input'))

sliderTitle.text(
  bgColorChange
    ? 'Background color change'
    : 'Text color change'
)

const setEvtListeners = (arr) => {
  arr.forEach(item => {
    $('#' + item.id).slider({
      min: 0,
      max: 255,
      step: 1,
      value: bgColorChange
        ? bgColorValues[item.id]
        : textColorValues[item.id],
      // value: 50
    }).on('slide', function ( event, ui ) {
      bgColorChange
        ? bgColorValues[item.id] = ui.value
        : textColorValues[item.id] = ui.value

      bgColorChange
        ?
        bgColorText.css(
          'background',
          `rgb(${bgColorValues.red}, ${bgColorValues.green}, ${bgColorValues.blue})`
        )
        :
        text.css(
          'color',
          `rgb(${textColorValues.red}, ${textColorValues.green}, ${textColorValues.blue})`
        )
    })
  })
}

setEvtListeners(arrayOfInputs)

btnText.on('click', function () {
  bgColorChange = false
  sliderTitle.text('Text color change')
  arrayOfInputs.forEach(item => {
    $('#' + item.id).slider('option', 'value', textColorValues[item.id])
  })
})

btnBgColor.on('click', function () {
  bgColorChange = true
  sliderTitle.text('Background color change')
  arrayOfInputs.forEach(item => {
    $('#' + item.id).slider('option', 'value', bgColorValues[item.id])
  })
})
