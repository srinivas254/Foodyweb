var menuBtn = document.querySelector(".navbar-toggler");
var menuCls = document.querySelector(".cls");
var menu = document.querySelector(".menu-items");

menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active");
});

menuCls.addEventListener("click",function(){
    menu.classList.toggle("active");
});