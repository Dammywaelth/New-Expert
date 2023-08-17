const advert_div = document.querySelector(".advart_fixed");
const removeAd = document.querySelector(".img_cancel");
const body = document.querySelector("body");
const nav_barLinks = document.querySelector(".navbar_links");
const hambuger = document.querySelector(".hambuger");
const accordionHeaders = document.querySelectorAll('.accordion_header');
// console.log(accordionHeaders)


function ad_code(){
    advert_div.style.display = 'block';
}

removeAd.addEventListener('click', ()=>{
    advert_div.style.display = 'none';
})

hambuger.addEventListener("click", ()=>{
    nav_barLinks.classList.toggle('active');
})

accordionHeaders.forEach((accordionHeader)=>{
    accordionHeader.addEventListener('click', ()=>{
        accordionHeader.classList.toggle('active')
    })
})

