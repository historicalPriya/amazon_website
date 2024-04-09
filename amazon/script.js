// const leftbtn = document.querySelector(".1-btn");
// const rightbtn = document.querySelector(".r-btn");

// rightbtn.addEventListener('click',function(event){
//     console.log('do0ne');
//     const conent = document.querySelector('.product-slide');
//     conent.scrollLeft +=1100;
//     event.preventDefault();
// })

const backtop = document.querySelector(".backtop");
backtop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.add("stop-scroll");
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.add("stop-scroll");

})