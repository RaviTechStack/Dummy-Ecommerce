let blur = document.querySelector("main")
let buy = document.querySelector(".buy-now")
let buy_menu = document.querySelector(".payment")
let pay_done = document.querySelector(".done")
let loder = document.querySelector(".pre-loder")
buy.addEventListener("click", ()=>{
    if(window.matchMedia("(max-width:1150px)").matches){
        buy_menu.style.transform = "translate(-50%, -0%)"
        blur.style.filter = "blur(10px)"}
    else if(window.matchMedia("(max-width:750px)").matches){
        buy_menu.style.transform = "translate(-50%, -10%)"
        blur.style.filter = "blur(10px)"}
    
    else{
        buy_menu.style.transform = "translate(-50%, -40%)"
        blur.style.filter = "blur(10px)"
    }
})

let cross = document.querySelector(".can-btn").addEventListener("click", ()=>{
    buy_menu.style.transform = "translate(-50%, -200vh)"
    blur.style.filter = "blur(0px)"
})

document.querySelector(".purchase").addEventListener("click", ()=>{
    
        blur.style.filter = "blur(10px)"
        buy_menu.style.display = "none"
        loder.style.display = "flex"
        setTimeout(()=>{
        loder.style.display = "none"
        pay_done.style.display = "flex"
   }, 1000)
    
})
