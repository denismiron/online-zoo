const input = document.querySelector('.donate-amount-input-input');
const amountNums = document.querySelectorAll('.pick-feed-values-item');
const amountLine = document.querySelectorAll('.pick-feed-slider-dot');

amountLine.forEach(item => {
    item.checked = false;
    if (input.value === item.attributes.id.value)
        item.checked = true;
});

function setValueOnAmountLine(event) {
    if (input.value > 9999)
        input.value = input.value.slice(0, 4);
    amountNums.forEach(num => {
        num.classList.remove('.pick-feed-values-item-active');
        if (event.target.value === num.textContent.slice(1))
            num.classList.add('.pick-feed-values-item-active');
        amountLine.forEach(item => {
            item.checked = false;
            if (event.target.value === item.attributes.id.value)
                item.checked = true;
        });
    });
}

function setValueInInput(event) {
    event.target.checked = true;
    amountNums.forEach(num => {
        num.classList.remove('.pick-feed-values-item-active');
        if (event.target.attributes.id.value === num.textContent.slice(1))
            num.classList.add('.pick-feed-values-item-active');
    });
    input.value = event.target.attributes.id.value;
}




input.addEventListener('input', setValueOnAmountLine);
amountLine.forEach(lineItem => lineItem.addEventListener('click', setValueInInput));