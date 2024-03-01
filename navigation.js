const searchTabBtn=document.querySelector("#searchicon");
const homeTabBtn=document.querySelector("#homeicon");

searchTabBtn.addEventListener("click",()=>{
    document.querySelector(".mainwindow-cont-wrapper").innerHTML="";
    searchTabBtn.setAttribute("class","")
    history.pushState({},null,"/search");
})