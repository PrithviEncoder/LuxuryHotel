
//***************************************************
//variables
const btnEle = document.querySelector('.offer-bookbox__btn2');
const track = document.querySelector('.testimonials__carousel');
const track2 = document.querySelector('.location-carousel')

//***************************************************
//AUTO scroll function
const autoScroll = (id, cardWidth) => {
    let isAnimating = false;

    setInterval(() => {
        if (isAnimating) return;
        isAnimating = true;

        id.style.transition = 'transform 0.5s linear';
        id.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            const firstCard = id.children[0];
            id.appendChild(firstCard);

            id.style.transition = 'none';
            id.style.transform = 'translateX(0)';

            isAnimating = false;
        }, 500);
    }, 4000);
}
//******************************************************
autoScroll(track, 400);
autoScroll(track2, 250);
//***************************************************** 

//btn auto scale up .
setInterval(() => {
    setTimeout(() => {
        btnEle.style.transform = "scale(1.1)"
        btnEle.style.transition = "transform 0.8s ease"
    }, 0)

    setTimeout(() => {
        btnEle.style.transform = "scale(1)"
        btnEle.style.transition = "transform 0.8s ease"
    }, 800);

}, 2000);

//****************************************************** 