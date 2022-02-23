//1
let price = document.querySelectorAll('div.price');
const array = [];


for (let i of price) {
  array.push(i.innerText.slice(0, -1).split(" ").join() *1);
}

let result = array.reduce(function(sum ,i){
  return sum += i;
});

function numSum() {
document.querySelector('.total').innerHTML = result;
}

//2

let oldPrice = document.querySelectorAll('div.old-price');
const array2 = [];

for (let i of oldPrice) {
  array2.push(i.innerText.slice(0, -1).split(" ").join() *1);
}

let result2 = array2.reduce(function(sum ,i){
  return sum += i;
});

function numSum2() {
document.querySelector('.totalWithoutSale').innerHTML = result2;
}
