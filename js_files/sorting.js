let divId = document.getElementById('bars');
let arr = [];
let marginSize;
let divs = [];
let divBar;
const arrSize = 100;

for (var i = 0; i < arrSize; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(arr);

const newArrayBtn = document.getElementById('new-array');
newArrayBtn.addEventListener('click', barFunction);

function barFunction() {
  divId.innerHTML = '';
  for (let i = 0; i < arrSize; i++) {
    divBar = document.createElement('div');
    marginSize = 0.1;
    divBar.style =
      ' margin:0% ' +
      marginSize +
      '%; background-color:#fff; width:' +
      (100 / arrSize - 2 * marginSize) +
      '%; height:' +
      arr[i] +
      '%;';
    divId.appendChild(divBar);
    console.log(divId);
  }
}
console.log('divBar', divBar);
