'use strict'


const validCountInput = document.querySelectorAll('.popup__count-label')
for (let i = 0; i < validCountInput.length; i++) {
    let inp = validCountInput[i]
    inp.setAttribute('maxlength', 2);
    inp.addEventListener('keydown', function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}

const buttonsPlus = document.querySelectorAll('.popup__count-plus')
for (let i = 0; i < buttonsPlus.length; i++) {
    buttonsPlus[i].addEventListener('click', function(e) {
        // let child = e.parentNode.child
        const inp = e.target.parentNode.querySelector('.popup__count-label');
        let tempValue = Number(inp.value);
        if (tempValue + 1 <= 30) {
            tempValue += 1;
        }
        inp.value = tempValue;
        changeTotal(e, inp.value);
    })
}

const buttonsMinus = document.querySelectorAll('.popup__count-minus')
for (let i = 0; i < buttonsPlus.length; i++) {
    buttonsMinus[i].addEventListener('click', function(e) {
        // let child = e.parentNode.child
        const inp = e.target.parentNode.querySelector('.popup__count-label');
        let tempValue = Number(inp.value);
        if (tempValue - 1 >= 0) {
            tempValue -= 1;
        } else {
            return
        }
        inp.value = tempValue;
        changeTotal(e, inp.value);
    })
}

function changeTotal(e, count) {
    const total = e.target.closest('.popup__product').querySelector('.popup__product-total');
    const price = e.target.closest('.popup__product').querySelector('.popup__product-price').innerHTML;
    let intPrice = parseInt(String(price).replace(/ /g, ''));
    let tempTotal = count * intPrice;
    total.innerHTML = tempTotal;
    formatTotal(total)
}

function formatTotal(total) {
    const strTotal = total.innerHTML;
    let formattedTotal = strTotal.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    total.innerHTML = formattedTotal;
}