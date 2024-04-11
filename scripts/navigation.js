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
  stylingForTabs.innerText = stylingForSearchTab;
  if (openedInMobile) {
    document.querySelector(".sidebar").style.transform = "translate(-100%,0)";
  }
  createDefaultCards();
}
function tabUpdateForHome() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "block";
  searchTabContainer.style.display = "none";
  stylingForTabs.innerText = stylingForHomeTab;
  if (openedInMobile) {
    document.querySelector(".sidebar").style.transform = "translate(-100%,0)";
  }
}

searchTabBtn.addEventListener("click", () => {
  tabUpdateForSearch();
  if( history.state==null || history.state.page=="home" ){
  history.pushState({ page: "search" }, null, "/search");
  navIconUpdate();
}
});

homeTabBtn.addEventListener("click", () => {
  
  tabUpdateForHome();
  if(history.state.page=="search"){
    console.log(history.state)
    history.pushState({ page: "home" }, null, "/");
    navIconUpdate();
  }
 
});

document.addEventListener("DOMContentLoaded", () => {
  if (history.state && history.state.page === "search") {
     tabUpdateForSearch();
  } 
  else if(location.pathname=="/search") {
    tabUpdateForSearch();
    history.pushState({ page: "search" }, null, "/search");
  }
   else {
    tabUpdateForHome();
  }
  navIconUpdate();

  if(localStorage.getItem("isSidebarCollapsed")!==null){
    let stateOfSidebar=localStorage.getItem("isSidebarCollapsed");
    if(stateOfSidebar=="true"){
      btnclicked=false;
      sidebarOpenClose();
    }
    else if(stateOfSidebar=="false"){
      btnclicked=true;
      sidebarOpenClose();
    }
   
  };
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

  if(statesCovered>=history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 0.425)";
   nextNavBtn.style.cursor = "not-allowed";
  }
  else if(statesCovered<history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 1)";
    nextNavBtn.style.cursor = "pointer";
  }
}

//<-----fix the push state and navigation functionality----->
