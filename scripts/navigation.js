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
    let chartsHeader=document.querySelector("#charts");
    chartsHeader.style.display = "none";
    let mainSearchBarCont=document.querySelector(".mainSearchBarCont");
    chartsHeader.parentElement.prepend(mainSearchBarCont);
    mainSearchBarCont.style.display = "flex";
    
  }
  if(openedInMobile)createDefaultCards(num=2);
  else createDefaultCards(num=9);
}
function tabUpdateForHome() {
  stylingForTabs.innerText = "";
  homeTabContainer.style.display = "block";
  searchTabContainer.style.display = "none";
  stylingForTabs.innerText = stylingForHomeTab;
  if (openedInMobile) {
    document.querySelector(".sidebar").style.transform = "translate(-100%,0)";
    let chartsHeader=document.querySelector("#charts");
    let mainSearchBarCont=document.querySelector(".mainSearchBarCont");
    chartsHeader.style.display = "initial";
    mainSearchBarCont.style.display = "none";
  }
}

searchTabBtn.addEventListener("click", () => {
  tabUpdateForSearch();
  if( window.history.state==null || window.history.state.page=="home" ){
  history.pushState({ page: "search" }, null, "/search");
  statesCovered=window.window.history.length-2;
  navIconUpdate();
}
});

homeTabBtn.addEventListener("click", () => {
  
  tabUpdateForHome();
  if(window.history.state.page=="search"){
    history.pushState({ page: "home" }, null, "/");
    statesCovered=window.window.history.length-2;
    navIconUpdate();
  }
 
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.history.state && window.history.state.page === "search") {
     tabUpdateForSearch();
  } 
  else if(location.search!=="") {
    let params=window.location.search;
    tabUpdateForSearch();
    history.pushState({ page: "searchquery" }, null, `/search${params}`);
      let  paramsObj = new URLSearchParams(params);
      mainWindowSearchBar.value = paramsObj.get("song");
      displayArtistSongs(mainWindowSearchBar.value);
      statesCovered=window.window.history.length-2;
      }
  else if(location.pathname=="/search") {
    tabUpdateForSearch();
    history.pushState({ page: "search" }, null, `/search`);
     statesCovered=window.window.history.length-2;
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
  }
 else if(history.state.page=="searchquery" ){
    tabUpdateForSearch();
   document.querySelector(".mainwindow-search-results").style.display="block";
   document.querySelector(".mainwindow-search-default").style.display="none";
     let params=window.location.search;
    let  paramsObj = new URLSearchParams(params);
      mainWindowSearchBar.value = paramsObj.get("song");
      displayArtistSongs(mainWindowSearchBar.value);
  }
   else if(evt.state.page == "search") {
    tabUpdateForSearch();
     document.querySelector(".mainwindow-search-results").style.display="none";
   document.querySelector(".mainwindow-search-default").style.display="block";
      
  }
  navIconUpdate();
 
});

prevNavBtn.addEventListener("click", () => {
  if (window.history.state !== null) {
    history.back();
    statesCovered--;
  }
  
  navIconUpdate();
});
nextNavBtn.addEventListener("click", () => {
  if(statesCovered!==window.history.length-2){
    
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

  if(statesCovered>=window.history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 0.425)";
   nextNavBtn.style.cursor = "not-allowed";
  }
  
  else if(statesCovered<window.history.length-2){
    nextNavBtn.style.color = "rgba(255, 255, 255, 1)";
    nextNavBtn.style.cursor = "pointer";
  }
}

//<-----fix the push state and navigation functionality----->

