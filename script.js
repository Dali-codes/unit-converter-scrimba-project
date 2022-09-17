const convertBtn = document.getElementById("convert-btn")
const unitInputEl = document.getElementById("unit-input-number")
let lengthConversionValue = document.getElementById("length-conversion-value")
let volumeConversionValue = document.getElementById("volume-conversion-value")
let massConversionValue = document.getElementById("mass-conversion-value")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = unitInputEl.value
    if(Number(baseValue) === 1) {
        lengthConversionValue.textContent = `${baseValue} meter = ${Number(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} foot = ${Number(baseValue / meterToFeet).toFixed(3)} meters` 
        volumeConversionValue.textContent = `${baseValue} liter = ${Number(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallon = ${Number(baseValue / literToGallon).toFixed(3)} liters`
        massConversionValue.textContent = `${baseValue} kilo = ${Number(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pound = ${Number(baseValue / kiloToPound).toFixed(3)} kilos`
    } else {
        lengthConversionValue.textContent = `${baseValue} meters = ${Number(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(3)} meters` 
        volumeConversionValue.textContent = `${baseValue} liters = ${Number(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${Number(baseValue / literToGallon).toFixed(3)} liters`
        massConversionValue.textContent = `${baseValue} kilos = ${Number(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${Number(baseValue / kiloToPound).toFixed(3)} kilos`
    }
})


  