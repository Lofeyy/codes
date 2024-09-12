function triggerMode(){
    const distance = parseFloat(document.getElementById('distance').value)
    const rate = parseFloat(document.getElementById('rate').value)
    const tax = parseFloat(document.getElementById('tax').value)

    const fare = distance*rate
    const taxAmount = (tax/100) * fare
    const result = fare + taxAmount
    document.getElementById('result').innerHTML = `${result} Pesos`
}