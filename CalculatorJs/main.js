const display = document.querySelector(".display");
const controlsButton = document.querySelector(".controls").children;
const allsymbols = ['+', '⬅️', '-','x','%', 'C', '+', '='];
let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''
const calculate = () => {
firstValue = parseFloat(firstValue)
secondValue = parseFloat(secondValue) 


if (symbol === '+') result = firstValue + secondValue
if (symbol === '-') result = firstValue - secondValue
if (symbol === 'x') result = firstValue * secondValue
if (symbol === '÷') result = firstValue / secondValue
if (symbol === '%') result = firstValue % secondValue
display.innerText = result
firstValue = result
secondValue = ''
}
for (let button of controlsButton) {
button.addEventListener('click', () => {
const { innerText: btnValue } = button



const btnValueIsSymbol = allsymbols.includes(btnValue)
if (!firstValue && btnValue ==='=' ) return null
if (btnValue === 'C') {
  firstValue = secondValue = symbol = ''
  return display.innerText = ''
}
if (btnValue === '⬅️') {
  firstValue = secondValue = symbol = ''
  return   display.innerText = display.innerText.slice(0, -1);
  
}


if(firstValue && btnValueIsSymbol ){
  secondValue && calculate ()
  symbol = btnValue
}

else if (!symbol) firstValue += btnValue 
else if (symbol) secondValue += btnValue

if (btnValue !== '=') display.innerText += btnValue;
});
}

