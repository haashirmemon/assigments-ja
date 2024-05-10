function appendToResult(value) {
    document.getElementById("result").value += value
}
function clearresult() {
    document.getElementById("result").value = ""
}
function calculateresult() {
    var result = document.getElementById("result").value
    var calculatedresult = eval(result)
    document.getElementById ("result").value = calculatedresult
}
