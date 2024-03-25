"use strict"
function __dom__(tag){
    return document.querySelector(tag)
}

var preview = __dom__(".preview")
var addBtn = __dom__(".add-btn");
var crossBtn = __dom__("#cross");
addBtn.onclick=(e)=>{
    e.preventDefault()
    let img = document.createElement("img")
    img.src = "img/ghs.png"
    preview.appendChild(img)
}
crossBtn.onclick=(e)=>{
    e.preventDefault()
    var imgs = document.querySelectorAll(".preview")
    preview.lastChild.remove()
    console.log(imgs)
}