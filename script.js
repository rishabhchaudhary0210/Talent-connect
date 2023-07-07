
let fCard = document.querySelectorAll('.f-card');

let j = 0;

setInterval(()=>{
    for(let i=0; i<4; i++){
        fCard[i].classList.remove('active');
    }
    fCard[j%4].classList.add('active');
    j = j+1;
    console.log("Hello world from j loop " + j);
}, 3000)
