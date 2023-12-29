// const btn = document.querySelector(".f-t-map");


// val1();
// let val1 = function(){
    //   window.location.href="https://w3docs.com";
//         console.log('hi');
//     }
// const abc = document.querySelector(".f-t-map");
// abc.addEventListener("click",val1);


/*============================================================ */
const mainHeader = document.querySelector(".mainH");
const scrollLogo = document.querySelector(".scroll-logo");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
        mainHeader.style.backgroundColor="#303030";
        mainHeader.style.top=0;
        mainHeader.style.transition="all .2s ease";
        scrollLogo.style.height=85+"px";
    }
    else{
        mainHeader.style.backgroundColor="transparent";
        mainHeader.style.top=33+"px";
        scrollLogo.style.height="100%";
    }
})

const hamImg = document.querySelector(".ham-img img");
const navUlitem = document.querySelector(".nav-mobile-lower")
hamImg.addEventListener("click",()=>{
    navUlitem.classList.toggle("translateCss");
});

