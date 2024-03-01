const searchTabBtn=document.querySelector("#searchicon");
const homeTabBtn=document.querySelector("#homeicon");
let stylingForTabs = document.createElement("style");
document.querySelector("head").append(stylingForTabs);

function tabUpdateForSearch(){
    stylingForTabs.innerText="";
    homeTabContainer.style.display="none";
    searchTabContainer.style.display="initial";
    mainWindow.style.backgroundImage=mainWindowBg[5];
    searchTabBtn.querySelector("span").style.color="white";
    searchTabBtn.querySelector("p").style.color="white";
    stylingForTabs.innerText=stylingForSearchTab;

}
function tabUpdateForHome(){
    stylingForTabs.innerText="";
   homeTabContainer.style.display="initial";
   searchTabContainer.style.display="none";
    searchTabBtn.querySelector("span").style.color=" grey";
    searchTabBtn.querySelector("p").style.color=" grey";
    stylingForTabs.innerText=stylingForHomeTab;

}



searchTabBtn.addEventListener("click",()=>{
    tabUpdateForSearch();
    history.pushState({},null,"/search");
});

homeTabBtn.addEventListener("click",()=>{
    tabUpdateForHome();
    history.pushState({},null,null);

})
