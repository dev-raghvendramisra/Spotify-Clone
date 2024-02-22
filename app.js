// Variable declarations.
const sideBarCollapsedStyling = `.secondarysidebarsection{
  height:100%;
  width:100%;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background-color:#928b8b00;
}
.playlist-thumb{
 height:45px;
}
.textforplaylist{
  display: none;
}
.textforartist{
  display: none;
}
#recenticon{
  display:none;
}

.tagcontainer2 {
  display: flex;
  align-items: center;
  margin-left: 4vmin;
  gap: 1vmin;
}

.tagcontainer {
  display:none;
 
}
.icontext{
  display:none;
}
#leftarrowiconsvg{
  display:none;
}
#plusiconsvg{
  display:none;
}
.defaultlistings{
  height:72vh;
}
#homeicon-svg,#libraryicon-svg,#searchicons-svg{
  font-size:30px;
}
.sidebar{
  width:4.5vw;
}


.playlistsideblock1{
  margin:0;
  gap:0;
padding-left:15%;
}
.artistsideblock1{
  margin:0; margin:0;
  padding-left:15%;
}
.artistsideblock1 img{
  height:50px;
  width:50px;
}


.defaultlistings::-webkit-scrollbar{
  display: none;
}
.defaultlistings:hover::-webkit-scrollbar{
  display:initial;
}

.playlistsideblock1,.artistsideblock1{
  padding-left: 12%;
}
.playlistsideblock1{
  padding-left: 15%;
}
.defaultlistings:hover .playlistsideblock1{
  padding-left: 17%;
}
.defaultlistings:hover .artistsideblock1{
  padding-left: 14%;
}
.defaultlistings::before {
  width: 4%;
  top: 32%;
  height: 2vmin;
  box-shadow: 0 2vmin 3vmin rgba(0, 0, 0, 1);
}
#libraryicon,#homeicon{
  padding-left:29%;
}
#searchicon{
  padding-left:29%;
  padding-bottom:5%;
}
.mainwindow{
  width:95vw;
}
#followme{
  margin-left:72vw;
}
#libraryicon::before{
  content:"Expand your library";
 } 
 .songDescription {
  margin-top: 1vh;
  font-size: 0.8vw;
  width: 9vw;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.582);
}
  .cardImage {
    height: 9vw;
    width: 9vw;
    border-radius: 0.6vw;
  }
  #collapsedSong{
    display:initial;
  }
  .logo{
padding-left:29%;
  }
 `;
const mainWindowBg = [
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(13, 54, 22))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 29, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(85, 28, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(84, 85, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 78, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(32, 32, 32))",
];

let btn = document.querySelector("#libraryicon");
let styling = document.createElement("style");
let btnclicked = false;
let icon = document.querySelector("#libraryicon-svg");
let searchBtn = document.querySelector("#searchicons-svg2").parentElement;
let searchBox = document.querySelector("input");
let crossIcon = document.querySelector("#crossicon-svg");
let searchBoxOpen = false;
let artistName = document.querySelectorAll(".artistname");
let playlistName = document.querySelector(".playlistname");
let actualDivs = document.querySelectorAll(".artistsideblock1");
let divIds = [];
let i = 0;
let mainWindow = document.querySelector(".mainwindow");
let upperCardList = document.querySelectorAll(".uppercard");
let mainWindowBgColor = "none";
let minScrollVal = 40;

// function definitions.

function showResults() {
  for (divs of divIds) {
    document.getElementById(`${divs}`).style.display = "none";
    document.getElementById(`${divs}`).style.opacity = "0";
  }

  document.querySelector(".failedtosearch").style.display = "flex";
  document
    .querySelector(".failedtosearch")
    .querySelector("h3").innerText = `Couldn't find "${searchBox.value}"`;

  for (div of divIds) {
    for (char of div) {
      if (div.includes(searchBox.value.toLowerCase().split(" ").join(""))) {
        document.getElementById(`${div}`).style.display = "flex";
        document.getElementById(`${div}`).style.opacity = "1";
        document
          .querySelector(".defaultlistings")
          .prepend(document.getElementById(`${div}`));
        document.querySelector(".failedtosearch").style.display = "none";
      }
    }
  }
}

function assignId() {
  artistName.forEach((text) => {
    ids = text.innerText.split(" ").join("").toLowerCase();
    text.parentElement.parentElement.setAttribute("id", ids);
    divIds[i] = ids;
    i++;
  });

  let playlistId = playlistName.innerText.split(" ").join("").toLowerCase();
  divIds[i] = playlistId;
  playlistName.parentElement.parentElement.setAttribute("id", playlistId);
}

function elemsOriginalOrder() {
  document.querySelector(".defaultlistings").innerHTML = "";
  document.querySelector(".defaultlistings").innerHTML = originalListings;
}

function navBgSet() {
  if (minScrollVal < mainWindow.scrollTop) {
    if (mainWindowBgColor == "none") {
      mainWindowBgColor = "rgb(32, 32, 32)";
    }
    document.querySelector(".mainNav").style.backgroundColor =
      mainWindowBgColor;
    document.querySelector(".mainNav").style.boxShadow =
      "0px 40px 80px -8px rgba(0, 0, 0, 0.452)";
  } else if (minScrollVal > mainWindow.scrollTop) {
    document.querySelector(".mainNav").style.backgroundColor = "transparent";
    document.querySelector(".mainNav").style.boxShadow = "none";
  }
}

function displayLoadedContent() {
  let musicAndSideBarLoader = document.querySelectorAll(".loadingSideBar");
  musicAndSideBarLoader.forEach((loader) => {
    loader.style.transition = "apacity 0.5s";
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  });
  let mainWindowLoader = document.querySelector(".loadingMainWindow");
  mainWindowLoader.style.transition = "all 0.5s";
  mainWindowLoader.style.opacity = "0";
  setTimeout(() => {
    mainWindowLoader.style.display = "none";
  }, 1000);
}

// Main code block, statements written in the sequence of execution.

assignId();
const originalListings = document.querySelector(".defaultlistings").innerHTML;

btn.addEventListener("click", () => {
  if (btnclicked == false) {
    styling.innerHTML = sideBarCollapsedStyling;
    document.head.append(styling);
    icon.style = `font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;`;
    btnclicked = true;
    document.querySelector(".logo").src="logo1.png";
  } else if (btnclicked == true) {
    styling.innerHTML = "";
    icon.style = `font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;`;
    btnclicked = false;
    document.querySelector(".logo").src="logo.png";
  }
  for (divs of divIds) {
    document.getElementById(`${divs}`).style.display = "flex";
    document.getElementById(`${divs}`).style.opacity = "1";
    document.querySelector(".failedtosearch").style.display = "none";
  }
});

searchBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (searchBoxOpen == false) {
    searchBox.style.display = "initial";

    searchBox.addEventListener("input", () => {
      if (searchBox.value != "") {
        crossIcon.style.display = "initial";
      } else {
        crossIcon.style.display = "none";
      }
      showResults();

      crossIcon.addEventListener("click", () => {
        document.querySelector(".failedtosearch").style.display = "none";
        searchBox.value = "";
        for (divs of divIds) {
          document.getElementById(`${divs}`).style.display = "flex";
          document.getElementById(`${divs}`).style.opacity = "1";
        }
        elemsOriginalOrder();
      });
    });
    searchBtn.classList.add("buttonclicked");
  }
  searchBoxOpen = true;
});

upperCardList.forEach((value, idx) => {
  value.addEventListener("mouseenter", () => {
    mainWindow.style.backgroundImage = mainWindowBg[idx];
    mainWindowBgColor = mainWindowBg[idx];
    finalBgColorI1 = mainWindowBgColor.indexOf("rgb(");
    finalBgColorI2 = mainWindowBgColor.indexOf(")", finalBgColorI1);
    finalBgColor = mainWindowBgColor.substring(
      finalBgColorI1,
      finalBgColorI2 + 1
    );
    mainWindowBgColor = finalBgColor;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("domloaded");
  navBgSet();
});

mainWindow.addEventListener("scroll", navBgSet);

window.addEventListener("load",displayLoadedContent);




































