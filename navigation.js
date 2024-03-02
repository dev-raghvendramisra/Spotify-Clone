const searchTabBtn = document.querySelector("#searchicon");
const homeTabBtn = document.querySelector("#homeicon");
let stylingForTabs = document.createElement("style");
document.querySelector("head").append(stylingForTabs);

function tabUpdateForSearch() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "none";
  searchTabContainer.style.display = "initial";
  mainWindow.style.backgroundImage = mainWindowBg[5];
  searchTabBtn.querySelector("span").style.color = "white";
  searchTabBtn.querySelector("p").style.color = "white";
  stylingForTabs.innerText = stylingForSearchTab;
  if(openedInMobile){
    document.querySelector(".sidebar").style.transform="translate(-100%,0)";
  }
}
function tabUpdateForHome() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "initial";
  searchTabContainer.style.display = "none";
  searchTabBtn.querySelector("span").style.color = " grey";
  searchTabBtn.querySelector("p").style.color = " grey";
  stylingForTabs.innerText = stylingForHomeTab;
  if(openedInMobile){
    document.querySelector(".sidebar").style.transform="translate(-100%,0)";
  }
}

searchTabBtn.addEventListener("click", () => {
  tabUpdateForSearch();
  history.pushState({page:"search"}, null, "/search");
});

homeTabBtn.addEventListener("click", () => {
  tabUpdateForHome();
  history.pushState({page:"home"}, "", "/");
});

document.addEventListener("DOMContentLoaded",()=>{
  if(history.state && history.state.page==="search"){
    if(!openedInMobile)tabUpdateForSearch();
  }
  else{
    tabUpdateForHome();
  }
})

window.addEventListener("popstate",(evt)=>{
  if(evt.state.page==="home"){
    tabUpdateForSearch();
  }
  else if(evt.state.page==="search"){
    tabUpdateForHome();
  }
})