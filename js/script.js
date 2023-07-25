let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let phonePlusBtn = document.getElementById('iphone-plus');
let phoneMinacBtn = document.getElementById('iphone-minac');
let macPlusBtn = document.getElementById('mac-plus');
let macMinacBtn = document.getElementById('mac-minac');
let subTotalprice = document.getElementById('sub-total');
let taxAmount = document.getElementById('tax-ammount');
let totalPrice = document.getElementById('total-price');
let phonePlusBtn2 = document.getElementById('iphone-plus2');
let phoneMinacBtn2 = document.getElementById('iphone-minac2');
let macPlusBtn2 = document.getElementById('mac-plus2');
let macMinacBtn2 = document.getElementById('mac-minac2');


function showTime(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let Hrotation = 30*hours + minutes/2;
    let Mrotation = 6*minutes;
    let Srotation = 6*seconds;


    hour.style.transform = `rotate(${Hrotation}deg)`;
    minute.style.transform = `rotate(${Mrotation}deg)`;
    second.style.transform = `rotate(${Srotation}deg)`;

}

setInterval(showTime, 1000);




function inputId(Id, added, priceId, itemPrice) {

    let inputBox = document.getElementById(Id);
    let InputValue = inputBox.innerText;
    let inputValueToNumbr = parseInt(InputValue);
    if(added == true){
        inputBox.innerText = inputValueToNumbr + 1;
    }else if(added == false && inputValueToNumbr > 0){

        inputBox.innerText = inputValueToNumbr - 1;
    }

    let inputBoxValue = parseInt(inputBox.innerText);

    document.getElementById(priceId).innerText = inputBoxValue*itemPrice;

    calculate();

}


function productUpdate(Id){

    let productInput = document.getElementById(Id);
    let productInputNumber = parseInt(productInput.innerText);

    return productInputNumber;
}

function calculate(){

    let phoneprice = productUpdate('iphone-number')*50;
    let macprice = productUpdate('mac-number')*250;
    let phoneprice2 = productUpdate('iphone-number2')*150;
    let macprice2 = productUpdate('mac-number2')*200;
    let subTotal = phoneprice + macprice + phoneprice2 + macprice2;
    let tax = subTotal/100;
    let taxOutput = tax*12;
    let total = subTotal+taxOutput;

    subTotalprice.innerText = subTotal;
    taxAmount.innerText = taxOutput;
    totalPrice.innerText = total;
}





phonePlusBtn.addEventListener('click', function(){

    inputId('iphone-number', true, 'iphone-price', 50);

});

phoneMinacBtn.addEventListener('click', function(){

    inputId('iphone-number', false, 'iphone-price', 50);

});

macPlusBtn.addEventListener('click', function(){

    inputId('mac-number', true, 'mac-price', 250);

});

macMinacBtn.addEventListener('click', function(){

    inputId('mac-number', false, 'mac-price', 250);

});


phonePlusBtn2.addEventListener('click', function(){

    inputId('iphone-number2', true, 'iphone-price2', 150);

});

phoneMinacBtn2.addEventListener('click', function(){

    inputId('iphone-number2', false, 'iphone-price2', 150);

});

macPlusBtn2.addEventListener('click', function(){

    inputId('mac-number2', true, 'mac-price2', 200);

});

macMinacBtn2.addEventListener('click', function(){

    inputId('mac-number2', false, 'mac-price2', 200);

});




