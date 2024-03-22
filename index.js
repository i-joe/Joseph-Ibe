let apiKey = "44b0f90c380aa5e65c5a2af1"
let convertNow = document.getElementById("convertNow")
let modal = document.getElementById("modal")
let cancelIcon = document.getElementById("cancel")
let input = document.getElementById("input")
let convertButtonContainer = document.getElementById("convert-button-container")
let fromCurrency = document.getElementById("drop-down")
let toCurrency = document.getElementById("drop-down-2")
let displayRateContainer = document.getElementById("converted-amount-container")


convertNow.addEventListener("click", function(){
    if(modal.classList.contains("modal-container")){
        modal.classList.remove("modal-container")
        modal.classList.add("modal-container-visible")
    }else if(modal.classList.contains("modal-container-visible")){
        modal.classList.remove("modal-container-visible")
        modal.classList.add("modal-container")
    } 
})

cancelIcon.addEventListener("click", function(){
    if(modal.classList.contains("modal-container-visible")){
        modal.classList.remove("modal-container-visible")
        modal.classList.add("modal-container")
    }
})

// fromCurrency.addEventListener("change", calculate)
// toCurrency.addEventListener("change", calculate)
// input.addEventListener("input", calculate)
convertButtonContainer.addEventListener("click", calculate)

function calculate(){
    let currency1 = fromCurrency.value
    let currency2 = toCurrency.value
    let amount = input.value
    let currencySymbol = document.getElementById("currency-symbol")

    let url = `https://v6.exchangerate-api.com/v6/44b0f90c380aa5e65c5a2af1/latest/${currency1}`

    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
       let rate = data.conversion_rates[currency2]

        if(amount.length == 0){
            displayRateContainer.innerHTML = " "
        }else{
            // currencySymbol.textContent = currency1
            let calculatedRate = (amount * rate).toFixed(2)
            displayRateContainer.innerText = `${currency2} ${calculatedRate}`
        }
    })
}
calculate()