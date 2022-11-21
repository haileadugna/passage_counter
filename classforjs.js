const output = document.getElementById("out-put")
const saveel = document.getElementById("save-el")
console.log(output)

let count = 0
function increment() {
    count = count + 1
    output.innerHTML = count
}
function dencrement() {
    count = count - 1
    output.innerText = count
}
function save() {
    let temp = count + "-"
    saveel.innerText += temp
    output.textContent = 0
    count = 0
}