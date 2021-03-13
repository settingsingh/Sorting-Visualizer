let divId = document.getElementById('bars');
let arr = [];
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

const newArrayBtn = document.getElementById('new-array');
newArrayBtn.addEventListener('click', barFunction);

function barFunction() {
  for (let i = 0; i < 100; i++) {
    let barDiv = document.createElement('div');
    barDiv.classList.add('bar');
    divId.appendChild(barDiv);
  }
}
