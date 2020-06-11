const cards = document.querySelectorAll('.card'); // querySelectorAll - взять все елементы
// console.log(card);
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate ); //mousemove - наведена мышка
    card.addEventListener('mouseout',  stopRotate); // mouseout - когда мышка не наведена
}


function startRotate(event) {
    // console.log('Mouse');
    const itemCard = this.querySelector('.item_card');
    // itemCard.innerText = event.offsetX + "      " + event.offsetY; //(координаты мышки) 
    const halfHeight = itemCard.offsetHeight/2; // найти цэнтэр карточки
    // console.log(halfHeight);
    
    itemCard.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 + 'deg) rotateY('+(event.offsetX - halfHeight) / 5 +'deg)';
}

function stopRotate(event) {
   
    const itemCard = this.querySelector('.item_card');
    itemCard.style.transform = 'rotateX(0)';
}