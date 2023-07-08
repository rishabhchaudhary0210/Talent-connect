
let fCard = document.querySelectorAll('.f-card');
let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav>.navbar>a");

let j = 0;

setInterval(()=>{
    for(let i=0; i<4; i++){
        fCard[i].classList.remove('active');
    }
    fCard[j%4].classList.add('active');
    j = j+1;
    console.log("Hello world from j loop " + j);
}, 3000)


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    nav.classList.toggle("active");
})

navLinks.forEach(element => {
    element.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    })
});