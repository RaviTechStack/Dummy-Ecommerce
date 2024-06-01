const img = document.querySelector(".icontainer")
let lp_image = document.querySelector(".lpro-image")
let lp_title = document.querySelector(".lpro-title")
let lp_price = document.querySelector(".lpro-price")
const menu = document.querySelectorAll(".pro-menu")
let prod_image = document. querySelectorAll(".prod-image")
let products = document.querySelectorAll(".prod-list")
let indi = 0
let prod_count = 0
let rev_card = document.querySelectorAll(".review-card")
let prod_info = document.querySelectorAll(".prod-info")
menu.forEach((li, index)=>{
    li.addEventListener('click', ()=> {
        indi = index
        prod_image.forEach((div, index1)=>{
            div.src = arr[index][index1].p_img
            lp_image.src = arr[index][0].p_img
            
        })
        if(window.matchMedia("(max-width: 1150px)").matches){
            img.style.transform = `translateX(${-80 * index}vw)`
        }
        else{
            img.style.transform = `translateX(${-60 * index}vw)`
        }
        
    })
})


 let log = document.querySelector(".log-in")
 let logbtn = document.querySelector(".logbtn").addEventListener("click", ()=>{
    log.style.transform = "translateY(1vh)"
 })

let log_cancel =document.querySelector(".log-cancel").addEventListener("click", ()=>{
    log.style.transform ="translateY(-45vh)"
})
let mb_menu = document.querySelector(".mobile-menu-des")
let ham = document.querySelector(".ham").addEventListener("click", ()=>{
    mb_menu.style.transform = "translate(0vw)"
})

let cancel = document.querySelector(".cancel").addEventListener("click", ()=>{
    mb_menu.style.transform = "translate(-82vw)"
})





let arr = [
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/shirt (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/shirt (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/shirt (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/shirt (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/shirt (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/shirt (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/shirt (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/shirt (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/specs (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/specs (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/specs (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/specs (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/specs (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/specs (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/specs (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/specs (8).webp",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/watch (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/watch (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/watch (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/watch (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/watch (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/watch (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/watch (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/watch (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/sjeans (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/sjeans (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/sjeans (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/sjeans (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/sjeans (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/sjeans (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/sjeans (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/sjeans (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/tshirt (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/tshirt (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/tshirt (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/tshirt (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/tshirt (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/tshirt (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/tshirt (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/tshirt (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/hoddies (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/hoddies (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/hoddies (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/hoddies (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/hoddies (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/hoddies (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/hoddies (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/hoddies (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/sneakers (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/sneakers (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/sneakers (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/sneakers (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/sneakers (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/sneakers (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/sneakers (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/sneakers (8).jpg",
            p_price : 1999
        },
    ],
    [
        {
            title : "Lavie Women's Zarya Tote Bag | Ladies Purse Handbag",
            p_img : "./newimg/jeans (1).jpg",
            p_price : 1999
        },
        {
            title : "Women's Ushawu Satchel Bag | Ladies Purse Handbag",
            p_img : "./newimg/jeans (2).jpg",
            p_price : 1999
        },
        {
            title : "Ralph Lauren Corporation T-Shirt",
            p_img : "./newimg/jeans (3).jpg",
            p_price : 1999
        },
        {
            title : "Levi Strauss & Co. T-shirt",
            p_img : "./newimg/jeans (4).jpg",
            p_price : 1999
        },
        {
            title : "Brown and Beige Stripes Weave Pure Cotton Kurta for Men - Kurta",
            p_img : "./newimg/jeans (5).jpg",
            p_price : 1999
        },
        {
            title : "Janasya Women's Pure Cotton Straight Kurta",
            p_img : "./newimg/jeans (6).jpg",
            p_price : 1999
        },
        {
            title : "Kuons Avenue Men's Regular Denim Kurta",
            p_img : "./newimg/jeans (7).jpg",
            p_price : 1999
        },
        {
            title : "Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta",
            p_img : "./newimg/jeans (8).jpg",
            p_price : 1999
        },
    ],
]



products.forEach((prod, index2)=>{
    prod.addEventListener("mouseover", ()=>{
        lp_image.src = arr[indi][index2].p_img
    })
    prod.addEventListener("click", ()=>{
        prod_count = index2
    })
    
})







    