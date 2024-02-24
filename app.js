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

 const musicPlayerOpenedStyling=`.fullScreenPlayer{
  height:100vh;
  width:100vw;
  position: absolute;
  z-index:5;
  transition:all ease 0.2s;
 
  
}

.wrapperForMusicBar{
  height:100vh;
  width:100vw;
  bottom:0;
  align-items:flex-end;
}
.musicBar{
  margin-bottom:4vw;
}
.fullScreenPlayer .currentSong{
  flex-direction:column;
}
.fullScreenPlayer #likeicon{
  margin-left:0;
}
.likeAndCrrSongContainer{
  display:flex;
  align-items: center;
  
}

.fullScreenPlayer .currentMusic-Player div{
  width:78vw;
  overflow: hidden;
}
.fullScreenPlayer .currentMusic-Player div::before{
  display: none;
 }

.fullScreenPlayer .currentMusic-Player #cover::before{
  background-image:  linear-gradient(to left,var(--colorForBeforePLayer) 10%,transparent);
  width:15%;
  display:initial;
  right:-1%;
}


.fullScreenPlayer .currentSong{
  padding-left:0;
}
.fullScreenPlayer .currentSong img{
   
    height:85vw;
    width:85vw;
    border-radius: 3vw;
    box-shadow: 5px 15px 100px -5px rgb(0 0 0 / 57%);
    
}
.fullScreenPlayer .currentMusic-Player p{
  font-size:4vw;
}
.fullScreenPlayer #crrSongNameInPTag{
  font-size:6vw;
}
.fullScreenPlayer .likeAndCrrSongContainer{
  width:100vw;
  gap:5vw;
  justify-content: center;
  align-items: center;
    margin-top:5vw;
}
.fullScreenPlayer .headerForPlayer{
    margin-top:20vw;
    font-size:4vw;
    font-weight:600;
}
.fullScreenPlayer .centerControls{
   flex-direction:column;
}
.fullScreenPlayer .timingsContainer{
  width:100%;
    display:flex;
    font-size:4vw;
    font-weight:300;
    justify-content: space-between;
}
.fullScreenPlayer .progressBar{
  background-color: #ffffff44;
  width:100%;
  margin-top:4vw;
}
.fullScreenPlayer .controls{
  width:100%;
  align-items: center;
}
.fullScreenPlayer .centerControls{
  width:90%;
}
.fullScreenPlayer .mainControls{
  display: flex;
  margin-top:5vw;
  gap:5vw;
}


#controlicon-play{
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}

.fullScreenPlayer #controlicon-shuffle{
  font-size: 9vw;
  color: rgb(21, 255, 91);
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 24;
}
.fullScreenPlayer #controlicon-loop{
  font-size: 9vw;
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 24;
}
.fullScreenPlayer #controlicon-play{
  font-size: 18vw;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}
.fullScreenPlayer #controlicon-next{
    color: rgb(250, 250, 250);
  font-size: 13vw;
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 24;
}
.fullScreenPlayer #controlicon-prev{
  color: rgb(255, 255, 255);
  font-size: 13vw;
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 24;
}
.fullScreenPlayer .centerControls:hover .progressBarFill {
  background-color: #ffffff;
}
.fullScreenPlayer #progressbarBullet{
  opacity: 1;
  height:4vw;
  width:4vw;
  position: relative;
  z-index:1;
  box-shadow: -3px 0px 10px -3px black;
}
  `


const mainWindowBg = [
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(13, 54, 22))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 29, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(85, 28, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(84, 85, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 78, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(32, 32, 32))",
];

const playlist = [
  "satranga.mp3",
  "chaleya.mp3",
  "4.10.mp3",
  "kesariya.mp3",
  "wohRaat.mp3",
  "thodaThodaPyaar.mp3",
  "malang.mp3",
  "duniyaa.mp3",
  "labonKo.mp3",
  "lovely.mp3",
  "stay.mp3",
  "jannateinKahan.mp3",
  "sometimes.mp3",
  "seedheMaut.mp3",
  "tuHaiKahan.mp3",
  "arjanVailly.mp3",
  "ranjha.mp3",
  "ratanLambiyan.mp3",
  "manjha.mp3",
  "chaleya.mp3",
  "satranga.mp3",
  "phirMohobbat.mp3",
  "hothonSeChulo.mp3",
  "noMercy.mp3",
  "blowingUp.mp3",
  "prarthna.mp3",
  "athmaRama.mp3",
  "ben10.mp3",
];

const songDetails = [
  {
    src: "https://i.scdn.co/image/ab67616d00001e02021d7017f73387b008eab271",
    name: "Satranga",
    description: "Arijit Singh, Shreyas Puranik",
    fullName: 'Satranga (From "Animal")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2",
    name: "Chaleya",
    description: "Arijit Singh, Anirudh Ravichander",
    fullName: 'Chaleya (From "Jawan")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02333548f23189291acdee787d",
    name: "4.10",
    description: "DIVINE, Lal Chand Yamla Jatt",
    fullName: "4.10",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62",
    name: "Kesariya",
    description: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    fullName: 'Kesariya ("From Bhramastra")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028eeefdbfd14ad10510ba6c86",
    name: "Woh Raat",
    description: "Raftaar, KR$NA",
    fullName: "Woh Raat",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02bb52f4d0546656ebcf9ed925",
    name: "Thoda Thoda Pyaar",
    description: "Nilesh Ahuja, Stebin Ben",
    fullName: "Thoda Thoda Pyaar",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0299655481a2151203ed89351d",
    name: "Malang(Title Track)",
    description: "Ved Sharma, Kunal Vermaa",
    fullName: 'Malang (From "Malang")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e027b93fd8b0ade33ceb9d536de",
    name: "Duniyaa",
    description: "Akhil, Dhvani Bhanushali",
    fullName: 'Duniya (From "Lukka Chuppi")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f",
    name: "Labon Ko",
    description: "Pritam, KK",
    fullName: "Labon Ko",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c",
    name: "Lovely (with Khalid)",
    description: "Billi Eilish, Khalid",
    fullName: "Lovely (with Khalid)",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
    name: "STAY (with Justin Bieber)",
    description: "The Kid LARAOI,Justin Bieber",
    fullName: "STAY (with Justin Bieber)",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27371da5e89467bd75d2ed9f1fa",
    name: "Jannatein Kahan",
    description: "Pritam, KK",
    fullName: "Jannatein Kahan",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e029ad4c5b52effc242984def78",
    name: "Sometimes",
    description: "AUR",
    fullName: "Sometimes",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02f5a66f7c0126268d45cda1b6",
    name: "Namastute",
    description: "Seedhe Maut",
    fullName: "Namastute",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2733fb3fb3086a40c2c5062501d",
    name: "Tu Hai Kahan",
    description: "AUR",
    fullName: "Tu Hai Kahan",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
    name: "Arjan Vailly",
    description: "Manan Bharadwaj, Bhupinder Babbal",
    fullName: 'Arjan Vailly (From "ANIMAL")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0209426d9ae9d8d981735ebc5e",
    name: "Ranjha",
    description: "B Praak, Jasleen Royal",
    fullName: 'Ranjha (From "Shershaah")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01",
    name: "Ratan Lambiyan",
    description: "Tanishq Bagchi, Jubin Nautiyal",
    fullName: 'Ratan Lambiyan (From "Shershaah")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02dea88e870d30a4da51065bf5",
    name: "Manjha",
    description: "Vishal Mishra",
    fullName: "Manjha",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2",
    name: "Chaleya",
    description: "Arijit Singh, Anirudh Ravichander",
    fullName: 'Chaleya (From "Jawan")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02021d7017f73387b008eab271",
    name: "Satranga",
    description: "Arijit Singh, Shreyas Puranik",
    fullName: 'Satranga ("From Animal")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e022432edc97b465e6db54d356b",
    name: "Phir Mohobbat",
    description: "Md.Irfan, Arijit Singh, Saim Bhat",
    fullName: 'Phir Mohobbat (From "Murder 2")',
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273b5eba194cd2f743be9a0f87b",
    name: "Hothon Se Chu Lo Tum",
    description: "Jagjit Singh",
    fullName: "Hothon Se Chu Lo Tum",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27300221eaa504574172c617504",
    name: "No Mercy",
    description: "Deep Kalsi, Raftaar, KR$NA, KARMA",
    fullName: "No Mercy",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273f8c35169d5bab01327f87e5a",
    name: "Blowing Up",
    description: "KR$NA",
    fullName: "Blowing Up",
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273843596e5677ecc71fee1c340",
    name: "Prarthna",
    description: "KR$NA",
    fullName: "Prarthna",
  },
  {
    src: "https://lh3.googleusercontent.com/PvuDzAO7HEl3SzakzJhb0fmWGAMuJmNQt_BVeKoS9Kivin_io0qSt1SrxS8iGE7y66wA49zGH5n0twWg",
    name: "Athma Rama",
    description: "Agam Aggrawal",
    fullName: "Athma Rama",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BZjg2ZjViMTktNWQ1Yy00ODZiLWE1OTgtNDY3MjI0OGUyNjNhXkEyXkFqcGdeQXVyNTk4NDI4NTE@._V1_.jpg",
    name: "BEN 10-Theme Song",
    description: "Sunidhi Chauhan",
    fullName: "BEN 10-Theme Song",
  },
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

function updateMusicBarBg(){
  if(openedInMobile){

  
  const img = document.querySelector('.currentSong').querySelector("img");
  const colorThief = new ColorThief();
  
  img.onload = function() {
    const accentColor = getColor(img);
    const accentcolor2= getColor2(img);
    applyAccentColor(accentColor,accentcolor2);
  }
  
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
  
function  applyAccentColor  (color,color2) {
       document.querySelector('.musicBar').style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]},1)`;
   
     if(isMusicBarOpened){
  
     document.querySelector('.fullScreenPlayer').style.backgroundColor = `rgba(${color2[0]}, ${color2[1]}, ${color2[2]},1)`;
     document.documentElement.style.setProperty("--colorForBeforePLayer",`rgba(${color2[0]}, ${color2[1]}, ${color2[2]},1)`);
    }    

    document.documentElement.style.setProperty("--colorForBefore",`rgba(${color[0]}, ${color[1]}, ${color[2]},1)`);
     if(color[0]>color[1]){
      if(color[0]>color[2]){
        color[0]=color[0]+color[0]/2;
      }
    }
     else if(color[1]>color[2]){
      color[1]=color[1]+color[1]/2;
    }
    else{
      color[2]=color[2]+color[2]/2;
    }

    if(!isMusicBarOpened){document.querySelector('.musicBar').style.border = `1px solid rgb(${color[0]}, ${color[1]}, ${color[2]})`;}
    if(isMusicBarOpened){document.querySelector('.musicBar').style.border = `0px solid rgb(${color[0]}, ${color[1]}, ${color[2]})`;}
  
    
  }
  
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    let h, s, l = (max + min) / 2;
    
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
