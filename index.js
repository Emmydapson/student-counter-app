let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById('save-el')


function increment(params) {
    count = count + 1
    countEl.textContent = count
    
}


function save(params) { 
    let countStr = count + '- '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}


