const counter = document.querySelectorAll('.count-number');
const speed = 100;
counter.forEach((curEle) => {

    const updateNumber = () => {
        const targetNumber = parseInt(curEle.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curEle.innerText);
        // console.log(initialNum);
        const increament = Math.trunc(targetNumber / speed);
        // console.log(increament);
        if (initialNum < targetNumber) {
            curEle.innerText = `${initialNum + increament}+`;
            setTimeout(updateNumber, 10)
        }
    }




    updateNumber();
})



//app screen 

var swiper = new Swiper(".app-swiper", {
    effect: "coverflow",
    loop: true,
    autoplaySpeed: 3000,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },

    paginationClickable: true,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    }

})





// let counterNumber = document.querySelectorAll('.counter-numbers');
// const speed = 200;

// counterNumber.forEach((curEle) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curEle.dataset.number);
//         // console.log(targetNumber);
//         const initialNum = parseInt(curEle.innerText);
//         // console.log(initialNum);
//         const increament = targetNumber / speed;
//         // console.log(increament);
//         if (initialNum < targetNumber) {
//             curEle.innerText = initialNum + increament;
//             setTimeout(updateNumber, 20)
//         }
//     }


//     updateNumber();
// })

function sum(a, b) {
    return a + b;
}
let obj = sum(5, 7);
console.log(obj);