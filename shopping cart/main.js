//1
const price = document.getElementsByClassName('price');

let num1 = price[0].innerText.replace(/[^0-9]/g, '');
let num2 = price[1].innerText.replace(/[^0-9]/g, '');
let num3 = price[2].innerText.replace(/[^0-9]/g, '');


num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const sum = num1 + num2 + num3;

function numSum() {
document.querySelector('.total').innerHTML = sum;
}

//2

const oldPrice = document.getElementsByClassName('old-price');

let num4 = oldPrice[0].innerText.replace(/[^0-9]/g, '');
let num5 = oldPrice[1].innerText.replace(/[^0-9]/g, '');
let num6 = oldPrice[2].innerText.replace(/[^0-9]/g, '');


num4 = Number(num4);
num5 = Number(num5);
num6 = Number(num6);

const sum2 = num4 + num5 + num6;

function numSum2() {
document.querySelector('.totalWithoutSale').innerHTML = sum2;
}