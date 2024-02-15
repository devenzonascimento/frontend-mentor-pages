const rangeInput = document.getElementById('range-input');
rangeInput.addEventListener('input', () => {

  sliderBarEffect(rangeInput)
  showValues()
});

const checkbox = document.querySelector("#checkbox")
checkbox.addEventListener("change", () => {

  showValues()
})



function showValues() {
  const valuesMap = {
    "8": "10K",
    "12": "50K",
    "16": "100K",
    "20": "250K",
    "24": "500k",
    "28": "700K",
    "32": "900K",
    "36": "1M"
  }

  const pageviewsElement = document.querySelector("#pageviews")
  pageviewsElement.textContent = (valuesMap[rangeInput.value])

  const valueElement = document.querySelector("#value")
  valueElement.textContent = `$${checkedDiscount(checkbox)}.00`
}

function checkedDiscount(inputCheckbox) {
  let value = rangeInput.value
  if (inputCheckbox.checked) {
    value = rangeInput.value * 0.75
  }

  return value
}

function sliderBarEffect(rangeInput) {
  const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100; 
    rangeInput.style.setProperty('--value', `${value}%`);
}


  