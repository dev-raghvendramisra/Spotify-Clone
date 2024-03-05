const searchTabBtn = document.querySelector("#searchicon");
const homeTabBtn = document.querySelector("#homeicon");
const prevNavBtn = document.querySelector("#chev1");
const nextNavBtn = document.querySelector("#chev");
let statesCovered=1;
let stylingForTabs = document.createElement("style");
document.querySelector("head").append(stylingForTabs);

function tabUpdateForSearch() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "none";
  searchTabContainer.style.display = "block";
  mainWindow.style.backgroundImage = mainWindowBg[5];
  searchTabBtn.querySelector("span").style.color = "white";
  searchTabBtn.querySelector("p").style.color = "white";
  stylingForTabs.innerText = stylingForSearchTab;
  if (openedInMobile) {
    document.querySelector(".sidebar").style.transform = "translate(-100%,0)";
  }
}
function tabUpdateForHome() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "block";
  searchTabContainer.style.display = "none";
  searchTabBtn.querySelector("span").style.color = " grey";
  searchTabBtn.querySelector("p").style.color = " grey";
  stylingForTabs.innerText = stylingForHomeTab;
  if (openedInMobile) {
    document.querySelector(".sidebar").style.transform = "translate(-100%,0)";
  }
}

searchTabBtn.addEventListener("click", () => {
  tabUpdateForSearch();
  history.pushState({ page: "search" }, null, "/search");
  navIconUpdate();
});

homeTabBtn.addEventListener("click", () => {
  tabUpdateForHome();
  history.pushState({ page: "home" }, "", "/");
  navIconUpdate();
});

document.addEventListener("DOMContentLoaded", () => {
  if (history.state && history.state.page === "search") {
    if (!openedInMobile) tabUpdateForSearch();
  } else {
    tabUpdateForHome();
  }
  navIconUpdate();
});

window.addEventListener("popstate", (evt) => {
  if (evt.state == null || evt.state.page == "home") {
    tabUpdateForHome();
  } else if(evt.state.page == "search") {
    tabUpdateForSearch();
  }
  navIconUpdate();
});

prevNavBtn.addEventListener("click", () => {
  if (history.state !== null) {
    history.back();
    statesCovered--;
  }
  
  navIconUpdate();
});
nextNavBtn.addEventListener("click", () => {
  if(statesCovered!==history.length-2){
    statesCovered++;
    history.forward();
    
  }
  
  navIconUpdate();
});

function navIconUpdate() {
  if (window.history.state == null) {
    prevNavBtn.style.color = "rgba(255, 255, 255, 0.425)";
    prevNavBtn.style.cursor = "not-allowed";
  } else {
    prevNavBtn.style.color = "rgba(255, 255, 255, 1)";
    prevNavBtn.style.cursor = "pointer";
  }

  if(statesCovered==history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 0.425)";
   nextNavBtn.style.cursor = "not-allowed";
  }
  else if(statesCovered<history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 1)";
    nextNavBtn.style.cursor = "pointer";
  }
}

//<-----fix the push state and navigation functionality----->
