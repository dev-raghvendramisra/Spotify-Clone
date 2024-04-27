// Variable declarations.


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
let isFocused=false;

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
    if(location.pathname=="/search"){
      mainWindowBgColor = "rgb(32, 32, 32)";
    }
    document.querySelector(".mainNav").style.backgroundColor =
      mainWindowBgColor;
    document.querySelector(".mainNav").style.boxShadow =
      "0px 40px 80px -8px rgba(0, 0, 0, 0.452)";
    
  } else if (minScrollVal > mainWindow.scrollTop) {
    document.querySelector(".mainNav").style.backgroundColor = "transparent";
    document.querySelector(".mainNav").style.boxShadow = "none";
  }}

function displayLoadedContent() {
  updateMusicBarBg();
  crrSongDetailsUpdate();
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

function updateMusicBarBg() {
  if (openedInMobile) {
    const img = document.querySelector(".currentSong").querySelector("img");
    const colorThief = new ColorThief();

    img.onload = function () {
      const accentColor = getColor(img);
      const accentcolor2 = getColor2(img);
      applyAccentColor(accentColor, accentcolor2);
    };

    function getColor(img) {
      const dominantColor = colorThief.getColor(img);
      // You can also use colorThief.getPalette(img, colorCount) to get a palette of colors

      // Adjust saturation and luminance of the accent color
      return adjustColor(dominantColor, 1, 0.2); // Set desired saturation and luminance levels//0.16
    }

    function adjustColor(color, saturation, luminance) {
      const hslColor = rgbToHsl(color[0], color[1], color[2]);

      // Adjust saturation and luminance
      hslColor[1] = saturation; // Set desired saturation level
      hslColor[2] = luminance; // Set desired luminance level

      // Convert HSL back to RGB
      const rgbColor = hslToRgb(hslColor[0], hslColor[1], hslColor[2]);

      return rgbColor;
    }

    function applyAccentColor(color, color2) {
      document.querySelector(
        ".musicBar"
      ).style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]},1)`;

      if (isMusicBarOpened) {
        document.querySelector(
          ".fullScreenPlayer"
        ).style.backgroundColor = `rgba(${color2[0]}, ${color2[1]}, ${color2[2]},1)`;
        document.documentElement.style.setProperty(
          "--colorForBeforePLayer",
          `rgba(${color2[0]}, ${color2[1]}, ${color2[2]},1)`
        );
      }

      document.documentElement.style.setProperty(
        "--colorForBefore",
        `rgba(${color[0]}, ${color[1]}, ${color[2]},1)`
      );
      if (color[0] > color[1]) {
        if (color[0] > color[2]) {
          color[0] = color[0] + color[0] / 2;
        }
      } else if (color[1] > color[2]) {
        color[1] = color[1] + color[1] / 2;
      } else {
        color[2] = color[2] + color[2] / 2;
      }

      document.querySelector(
        ".musicBar"
      ).style.border = `1px solid rgb(${color[0]}, ${color[1]}, ${color[2]})`;

      if (isMusicBarOpened) {
        document.querySelector(
          ".fullScreenPlayer"
        ).style.border = `0px solid rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      }
    }

    function rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);

      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h, s, l];
    }

    function hslToRgb(h, s, l) {
      let r, g, b;

      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = function hue2rgb(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function getColor2(img) {
      const dominantColor = colorThief.getColor(img);
      // You can also use colorThief.getPalette(img, colorCount) to get a palette of colors

      // Adjust saturation and luminance of the accent color
      return adjustColor(dominantColor, 1, 0.09); // Set desired saturation and luminance levels//0.16
    }
  }
}

function sidebarOpenClose(){
  if(!openedInMobile){
  if (btnclicked == false) {
    styling.innerHTML = sideBarCollapsedStyling;
    if(isResized){styling.append(".defaultlistings::before{top:29%}")}
    document.head.append(styling);
    icon.style = `font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;`;
    btnclicked = true;
    document.querySelector(".logo").src = "meta/logo1.png";
    localStorage.setItem("isSidebarCollapsed",true);
  } else if (btnclicked == true) {
    styling.innerHTML = "";
    icon.style = `font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;`;
    btnclicked = false;
    document.querySelector(".logo").src = "meta/logo.png";
   localStorage.setItem("isSidebarCollapsed",false);
  }
}}

// Main code block, statements written in the sequence of execution.

assignId();
const originalListings = document.querySelector(".defaultlistings").innerHTML;

btn.addEventListener("click", () => {
  sidebarOpenClose();
  for (divs of divIds) {
    document.getElementById(`${divs}`).style.display = "flex";
    document.getElementById(`${divs}`).style.opacity = "1";
    document.querySelector(".failedtosearch").style.display = "none";
  }
});

searchBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if(openedInMobile) return;
  searchBoxOpen = !searchBoxOpen;
  
  if (searchBoxOpen) {
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
        crossIcon.style.display = "none";});
    });
    searchBtn.classList.add("buttonclicked");
  }
  else if(!searchBoxOpen){
    searchBox.style.display = "none";
    searchBtn.classList.remove("buttonclicked");
    
  }
  
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

window.addEventListener("load", displayLoadedContent);

searchBox.addEventListener("focus", () => {
  if (!openedInMobile) return;
  searchBoxOpen = !searchBoxOpen;
  document.querySelector(".failedtosearch").style.justifyContent = "flex-start";
  document.querySelector(".failedtosearch").style.paddingTop = "2vh";
  // evt.preventDefault();
  if (searchBoxOpen) {
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
        crossIcon.style.display = "none";
      });
    });
    searchBtn.classList.add("buttonclicked");
  }



  isFocused = true;
  searchBox.addEventListener("blur", () => {
    document.querySelector(".failedtosearch").style.justifyContent = "center";
    document.querySelector(".failedtosearch").style.paddingTop = "0";
    setTimeout(() => { isFocused = false; }, 500)

  })
});

document.querySelector("#mainSearchBar").addEventListener("focus",(evt)=>{
  evt.target.style.borderColor="white";
  document.getElementById("mainSearchBtn").style.borderColor = "white";
  document.getElementById("mainSearchCancelBtn").style.borderColor = "white";
  document.getElementById("mainSearchBtn").style.color = "white";
  document.getElementById("mainSearchBtn").style.borderRightColor = "transparent";
  document.getElementById("mainSearchCancelBtn").style.borderLeftColor = "transparent";
});

mainWindowSearchBar.addEventListener("input",(evt)=>{
  mainWindowSearchResult.style.display="block";
  mainWindowSearchDefault.style.display="none";
  let allCards=document.querySelectorAll(".search-songCard");
   allCards.forEach((card)=>{
    if(evt.target.value!==""){
    if(card.getAttribute("id").includes(evt.target.value.toLowerCase().split(" ").join(""))){
      card.style.display="flex";
    }
    else{
      card.style.display="none";
     }
    } })
   
});