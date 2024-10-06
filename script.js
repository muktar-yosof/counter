var jsVal = 0;
const val = document.querySelector('h1')
const increaseBtn = document.querySelector('.btn3')
const resetBtn = document.querySelector('.btn2')
const decrease = document.querySelector('.btn1')

increaseBtn.addEventListener('click', () => {
    jsVal += 1
    val.innerHTML = jsVal
})
resetBtn.addEventListener('click', () =>{
    jsVal = 0
    val.innerHTML = jsVal
})
decrease.addEventListener('click', () =>{
    jsVal -= 1
    val.innerHTML = jsVal
})