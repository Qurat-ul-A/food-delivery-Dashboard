menuBar=document.querySelector(".menu_bar")
asideBar=document.querySelector(".left")
closeBar=document.querySelector(".close")

menuBar.addEventListener('click',function(){
    asideBar.classList.remove("aside")
})
closeBar.addEventListener('click',function(){
    asideBar.classList.add("aside")
})
