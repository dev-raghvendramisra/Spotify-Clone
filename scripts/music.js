
let pbar = document.querySelectorAll(".progressBarFill");
let playBtn = document.querySelectorAll("#controlicon-play");
let prevBtn = document.querySelectorAll("#controlicon-prev");
let nextBtn = document.querySelectorAll("#controlicon-next");
const shuffleBtn = document.querySelector("#controlicon-shuffle");
let loopBtn = document.querySelectorAll("#controlicon-loop");
let durationDisplay = document.querySelectorAll("#totalDuration");
let crrDisplay = document.querySelectorAll("#currentTime");
let pbarTargetArea = document.querySelectorAll(".pbarTargetArea");
const vbarTargetArea = document.querySelector(".vbarTargetArea");
const vbar = document.querySelector(".volumeBarFill");
const volumeBtn = document.querySelector("#sideControls-sound");
let crrSongThumb = document
  .querySelector(".musicBar")
  .querySelector(".main-window-playlist-thumb");
const crrSongName = document.querySelector(".currentMusic-Player");
let songCards;
const nowPlayingWindow = document.querySelector(".nowPlayingVeiw");
const nowPlayingImage = document.querySelector(".nowPlayingMainImg");
const nowPlayingSongName = document.querySelector(".nowPlayingSongName");
const nowPlayingSongArtist = document.querySelector(".nowPlayingSongArtist");
const inQueueSongsCont = document.querySelector(".inQueueSongs");
const nowPlayingVeiwBtn = document.querySelector("#sideControls-veiw");
let wrapperForMusicBar = document.querySelector(".wrapperForMusicBar");

const initialWindowWidth = window.innerWidth;
const initialWindowHeight = window.innerHeight;
let resizedStyling;
let isResized = false;
let musicBarBg;
let initialClutter=false;

let isPlaying = false;
let crrSong = 0;
let songDuration;
let crrDuration;
let volumeValue;
let testDiv;
let vw;
let isDragging = false;
let isVDragging = false;
let isLooping = false;
let prevSong = 0;
let nowPlayingOpened = false;

let isConstructed = false;
let isMusicBarOpened = false;

function updatePbar() {
  pbar.forEach((bar) => {
    bar.style.width = `${(crrDuration / songDuration) * 100}%`;
    if (isMusicBarOpened) {
      if (bar.clientWidth < vw * 4) {
        bar.style.justifyContent = "flex-start";
      } else if (bar.clientWidth >= vw * 4) {
        bar.style.justifyContent = "flex-end";
      }
    }
    if (!isMusicBarOpened) {
      if (bar.clientWidth < vw * 0.9) {
        bar.style.justifyContent = "flex-start";
      } else if (bar.clientWidth >= vw * 0.9) {
        bar.style.justifyContent = "flex-end";
      }
    }
  });
}

function setDuration(evt) {
  let pbarTargetAreaWidth = evt.target.getBoundingClientRect().width;
  let clikedPosition = evt.offsetX;
  let pbarWidth = `${
    Math.floor((clikedPosition / pbarTargetAreaWidth) * 100) + 2
  }`;

  Audio.currentTime = (parseInt(pbarWidth) * songDuration) / 100;
  updatePbar();
}

function startDragging() {
  pbarTargetArea.forEach((bar) => {
    bar.addEventListener("mousemove", (evt) => {
      // evt.preventDefault();
      if (isDragging == true) {
        setDuration(evt);
      }
    });
  });
}

function startVDragging() {
  vbarTargetArea.addEventListener("mousemove", (evt) => {
    // evt.preventDefault();
    if (isVDragging == true) {
      setVolume(evt);
    }
  });
}

function setVolume(evt) {
  let vbarTargetAreaWidth = Math.floor(
    vbarTargetArea.getBoundingClientRect().width
  );
  updateVbar(evt,vbarTargetAreaWidth);
  volumeValue = Audio.volume;
}

function volumeIconUpdate() {
  if (Audio.volume == 0.0) {
    volumeBtn.setAttribute("class", "fa-solid fa-volume-xmark");
    volumeBtn.innerText = "";
  } else if (Audio.volume >= 0.5) {
    volumeBtn.setAttribute("class", "fa-solid fa-volume-high");
    volumeBtn.innerText = "";
  } else if (Audio.volume < 0.5) {
    volumeBtn.setAttribute("class", "fa-solid fa-volume-low");
    volumeBtn.innerText = "";
  }
}

function crrSongDetailsUpdate() {
  if (!openedInMobile) {
    crrSongThumb.src = songDetails[crrSong].src;
    crrSongName.textContent = songDetails[crrSong].name;
    let crrSongArtists = document.createElement("p");
    crrSongArtists.innerText = songDetails[crrSong].description;
    crrSongName.append(crrSongArtists);
  } else if (openedInMobile) {
    //<--clearence of the elements created in previous execution-->//
    while (crrSongName.firstChild) {
      crrSongName.removeChild(crrSongName.firstChild);
    }

    crrSongThumb.src = songDetails[crrSong].src;
    //<--creation of  elements for current execution-->//
    //<--creating songName elements for current execution-->//

    let wrapperForName = document.createElement("div");
    let namePTag = document.createElement("p");
    crrSongName.prepend(wrapperForName);
    wrapperForName.append(namePTag);

    //<--setting id  songName elements for current execution-->//
    namePTag.setAttribute("id", "crrSongNameInPTag");

    //<--filling songName elements for current execution-->//
    namePTag.textContent = songDetails[crrSong].fullName;

    //<--creating artistName elements for current execution-->//
    let wrapper = document.createElement("div");
    let crrSongArtists = document.createElement("p");
    crrSongArtists.setAttribute("id", "crrSongArtistInPTag");

    //<--filling songName elements for current execution-->//

    crrSongArtists.innerText = songDetails[crrSong].description;
    crrSongName.append(wrapper);
    wrapper.append(crrSongArtists);

    crrSongArtists = document.querySelectorAll("#crrSongArtistInPTag");
    namePTag = document.querySelectorAll("#crrSongNameInPTag");

    crrSongArtists.forEach((elem) => {
      elem.innerText = songDetails[crrSong].description;
      if (elem.scrollWidth > elem.clientWidth) {
        elem.style.animation = "scroll  linear 5s infinite forwards";
      } else if (elem.scrollWidth == elem.clientWidth) {
        elem.style.animation = "scrollNo linear 8s infinite forwards";
      }
    });
    namePTag.forEach((elem) => {
      elem.textContent = songDetails[crrSong].fullName;
      if (elem.scrollWidth > elem.clientWidth) {
        elem.style.animation = "scroll 5s linear 5s infinite forwards";
      } else if (elem.scrollWidth == elem.clientWidth) {
        elem.style.animation = "scrollNo linear 5s infinite forwards";
      }
    });

    if (isMusicBarOpened) {
      document.querySelector(".headerForPlayer").querySelector("p").innerText =
        songDetails[crrSong].fullName;
      let playerCrrSongThumb = document
        .querySelector(".fullScreenPlayer")
        .querySelector(".main-window-playlist-thumb");
      playerCrrSongThumb.src = songDetails[crrSong].src;
      //  document.querySelector(".fullScreenPlayer").querySelector("#crrSongNameInPTag").parentElement.setAttribute("class",null);
      document
        .querySelector(".fullScreenPlayer")
        .querySelector("#crrSongNameInPTag")
        .addEventListener("animationiteration", (evt) => {
          evt.target.parentElement.setAttribute("class", null);
        });
      document
        .querySelector(".fullScreenPlayer")
        .querySelector("#crrSongNameInPTag")
        .addEventListener("animationstart", (evt) => {
          evt.target.parentElement.setAttribute("class", "coverafter");
        });
      let wrapperForNameinthis = document
        .querySelector(".fullScreenPlayer")
        .querySelector(".currentMusic-Player").firstChild;
      if (
        wrapperForNameinthis.firstChild.scrollWidth >
        wrapperForNameinthis.firstChild.clientWidth
      ) {
        wrapperForNameinthis.setAttribute("id", "cover");
      } else {
        wrapperForNameinthis.setAttribute("id", null);
      }
    }
  }
}



function cardBtnUpdate() {
  songCards[prevSong].querySelector("#cardplayicon").innerText = "play_arrow";
  songCards[crrSong].querySelector("#cardplayicon").innerText = "pause";
  clutterCards();
}

function songsInQueueClutter() {
  let firstSongInQueue = document.querySelector(".inQueueSong1");
  for (let i = 0; i < songDetails.length - 1; i++) {
    let newSong = firstSongInQueue.cloneNode(true);
    inQueueSongsCont.append(newSong);
  }
  let nodelistOfSongs = document.querySelectorAll(".inQueueSong1");
  nodelistOfSongs.forEach((node, idx) => {
    node.querySelector("img").src = songDetails[idx].src;
    node.querySelector(".queueSongName").innerText = songDetails[idx].fullName;
    node.querySelector(".queueSongArtist").innerText =
      songDetails[idx].description;
  });
}

function updateNowPlayingWindow() {
  nowPlayingImage.src = songDetails[crrSong].src;
  nowPlayingSongName.innerText = songDetails[crrSong].fullName;
  nowPlayingSongArtist.innerText = songDetails[crrSong].description;
  nowPlayingSongs[prevSong].querySelector(".bars").style.display = "none";
  nowPlayingSongs[prevSong].querySelector("span").style.display = "initial";
  nowPlayingSongs[crrSong].querySelector("span").style.display = "none";
  nowPlayingSongs[crrSong].querySelector(".bars").style.display = "flex";
  let animationBars = nowPlayingSongs[crrSong].querySelectorAll(".bars__item");
  if (isPlaying == true)
    animationBars.forEach((eachBar) => {
      eachBar.style.animationName = "play";
    });
  else if (isPlaying == false)
    animationBars.forEach((eachBar) => {
      eachBar.style.animationName = "none";
    });
  if (crrSong === 0)
    nowPlayingSongs.forEach((song) => {
      song.style.opacity = "1";
    });
  nowPlayingSongs[prevSong].style.opacity = "0.5";
  nowPlayingSongs[crrSong].style.opacity = "0.7";
  if (prevSong === playlist.length - 1)
    nowPlayingSongs[prevSong].style.opacity = "1";
localStorage.setItem("crrSong",crrSong);
  }

function updateMeta() {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: `${songDetails[crrSong].fullName}`,
    artist: `${songDetails[crrSong].description}`,
    artwork: [
      {
        src: `${songDetails[crrSong].src}`,
        sizes: "600x600",
        type: "image/jpeg",
      },
    ],
  });
}

function updateAnimation() {
  let descriptions = document.querySelectorAll(".songDescription");
  descriptions.forEach((description) => {
    if (description.scrollWidth > description.clientWidth) {
      description.style.animation = "scroll linear 8s infinite forwards";
      description.parentElement.classList.add("songDescriptionContbefore");
    }
  });
}
10
function clutterCards() {
  let currentWidth = window.innerWidth;

  if (currentWidth <= widthForMobileCardsCluttering) {
    Audio.volume = 1;
    let descriptions = document.querySelectorAll(".songDescription");
    descriptions.forEach((description, idx) => {
      description.innerText = songDetails[idx].description;
      description.parentElement.parentElement.querySelector(".songName").innerText=songDetails[idx].name;
      document.documentElement.style.setProperty("--display","none")
      description.parentElement.classList.add("songDescriptionCont");
    });
    let playApeended = document.querySelector("#controlicon-play");

    if (!isMusicBarOpened) {
      document.querySelector(".currentSong").append(playApeended);
      playApeended.setAttribute("class", "material-symbols-rounded");
    }

    openedInMobile = true;
    musicBarWrapperConstruct(isConstructed);
    isConstructed = true;
    searchBtn.classList.add("buttonclicked");
    // searchBoxOpen=true;
    if (!isMusicBarOpened) {
      if (!isPlaying) {
        playApeended.innerText = "play_arrow";
      } else if (isPlaying) {
        playApeended.innerText = "pause";
      }
    }

    updateAnimation();
  }
  
  else if (currentWidth > widthForMobileCardsCluttering) {
    if(initialClutter){
      return;
    }
    let descriptions = document.querySelectorAll(".songDescription");
    let newParents = document.querySelectorAll(".songCard");
    descriptions.forEach((description, idx) => {
      let oldParent = description.parentElement;
      let newParent = newParents[idx];
      openedInMobile = false;
      let wrapper = document.createElement("div");
      wrapper.appendChild(description);
      document.documentElement.style.setProperty("--display","initial")
      wrapper.setAttribute("class", "songDescriptionCont");
      newParent.append(wrapper);
      oldParent.style.display = "none";
        description.innerText = `"${songDetails[idx].album}"\n${songDetails[idx].description}`;
        let songName=description.parentElement.parentElement.querySelector(".songName");
        let wrapperForName = document.createElement("div");
        wrapperForName.append(songName);
        songName.innerText = songDetails[idx].name;
        description.parentElement.parentElement.append(wrapperForName,wrapper);
        wrapperForName.style.overflow="hidden";
        wrapperForName.style.position="relative";
        wrapperForName.style.height="2.8vw";
        wrapperForName.style.width="9vw";
        wrapper.append(description);
           if(songName.scrollWidth>songName.clientWidth){
             songName.style.animation="scroll linear 8s infinite forwards";
             wrapperForName.setAttribute("class","coverafter");
             
           }
           if(wrapper.scrollHeight>wrapper.clientHeight){
             description.style.animation="scrollInv linear 8s infinite forwards";
             
           }
     
    });
   initialClutter=true;
  }
}

function musicBarWrapperConstruct(isConstructed) {
  if (!isConstructed) {
    let wrapperForHeader = document.createElement("div");
    let hamburger = document.createElement("span");
    let loader = document.querySelector(".loadingMainWindow");
    let charts = document.getElementById("charts");
    let wrapperForMusicBar = document.createElement("div");
    let logo= document.querySelector(".logo");
    let wrapperForLogo = document.createElement("div");
    let crossIconForSidebar = document.createElement("span");
    let sideBarUpper = document.querySelector(".sidebaruppersection");
    crossIconForSidebar.setAttribute("class","material-symbols-rounded");
    crossIconForSidebar.setAttribute("id","sideBarCrossIcon");
    crossIconForSidebar.innerText="close";
    wrapperForLogo.setAttribute("class","wrapperForlogo");
    wrapperForLogo.append(logo);
    wrapperForLogo.append(crossIconForSidebar);
    sideBarUpper.prepend(wrapperForLogo);
    document
      .querySelector(".maincontainer")
      .insertBefore(
        wrapperForMusicBar,
        document.querySelector(".nowPlayingVeiw")
      );
      hamburger.classList.add("material-symbols-rounded");
      hamburger.setAttribute("id","hamburger");
      hamburger.addEventListener("click",()=>{sideBarForMobile(crossIconForSidebar)});
      
      hamburger.innerText="menu";
      wrapperForHeader.append(charts);
      wrapperForHeader.append(hamburger);
    
      document.querySelector(".mainwindow").prepend(wrapperForHeader);
      document.querySelector(".mainwindow").prepend(loader);
      wrapperForHeader.setAttribute("class","wrapperForHeader");
    wrapperForMusicBar.setAttribute("class", "wrapperForMusicBar");
    wrapperForMusicBar.append(document.querySelector(".musicBar"));

  }
}

function applyFullScreenPlayerStyling() {
  document.querySelector(".currentSong").addEventListener("click", (evt) => {
    if (evt.target.getAttribute("id") !== "controlicon-play") {
      if (!isMusicBarOpened) {
        if (openedInMobile) {
          let styling = document.createElement("style");
          styling.innerText = musicPlayerOpenedStyling;
          document.querySelector("head").append(styling);
          openedInMobile = true;
          let playIcon = document.querySelector("#controlicon-play");
          if (isPlaying) {
            playIcon.innerText = "pause_circle";
          } else if (!isPlaying) {
            playIcon.innerText = "play_circle";
          }
          playIcon.classList.add("material-symbols-outlined");
          playIcon.classList.remove("material-symbols-rounded");
          isMusicBarOpened = true;
          fullScreenPlayer();
          crrSongDetailsUpdate();

          document.querySelector("#trigger").addEventListener("click", () => {
            document
              .querySelector("body")
              .append(document.querySelector(".headerForPlayer"));
            if (isPlaying) {
              playIcon.innerText = "pause";
            } else if (!isPlaying) {
              playIcon.innerText = "play_arrow";
            }
            playIcon.classList.remove("material-symbols-outlined");
            playIcon.classList.add("material-symbols-rounded");
            try {
              document.querySelector(".fullScreenPlayer").remove();
            } catch (error) {}
            isMusicBarOpened = false;
            playBtn = document.querySelectorAll("#controlicon-play");
            prevBtn = document.querySelectorAll("#controlicon-prev");
            nextBtn = document.querySelectorAll("#controlicon-next");
            loopBtn = document.querySelectorAll("#controlicon-loop");
            pbarTargetArea = document.querySelectorAll(".pbarTargetArea");
            pbar = document.querySelectorAll(".progressBarFill");
            durationDisplay = document.querySelectorAll("#totalDuration");
            crrDisplay = document.querySelectorAll("#currentTime");

            document.querySelector("head").lastChild.remove();
          });
        }
      }
    }
  });
}

function fullScreenPlayer() {
  let fullScreenPlayer = document.querySelector(".musicBar").cloneNode(true);
  fullScreenPlayer.querySelector("#loadingMusicBar").remove();
  document.querySelector(".wrapperForMusicBar").prepend(fullScreenPlayer);

  let likeAndCrrSongContainer = document.createElement("div");
  let playIcon = fullScreenPlayer.querySelector("#controlicon-play");
  let likeIcon = fullScreenPlayer.querySelector("#likeicon");
  let crrSongMainBox = fullScreenPlayer.querySelector(".currentSong");
  let crrSongContainer = fullScreenPlayer.querySelector(".currentMusic-Player");
  let headerOfPlayer = document.querySelector(".headerForPlayer");
  let currentTime = fullScreenPlayer.querySelector("#currentTime");
  let totalTime = fullScreenPlayer.querySelector("#totalDuration");
  let containerForTimings = document.createElement("div");
  let centerControles = fullScreenPlayer.querySelector(".centerControls");
  let parentOfAllControls = fullScreenPlayer.querySelector(".controls");
  let mainControls = fullScreenPlayer.querySelector(".mainControls");
  let loopBtnInPLayer = mainControls.querySelector("#controlicon-loop");
  let nextBtnInPLayer = mainControls.querySelector("#controlicon-next");
  parentOfAllControls.prepend(centerControles);
  containerForTimings.append(currentTime);
  containerForTimings.append(totalTime);
  centerControles.append(containerForTimings);
  containerForTimings.setAttribute("class", "timingsContainer");

  likeAndCrrSongContainer.setAttribute("class", "likeAndCrrSongContainer");
  fullScreenPlayer.setAttribute("class", "fullScreenPlayer");
  likeAndCrrSongContainer.append(crrSongContainer);
  likeAndCrrSongContainer.append(likeIcon);
  crrSongMainBox.append(likeAndCrrSongContainer);

  crrSongMainBox.prepend(headerOfPlayer);
  crrSongMainBox.append(parentOfAllControls);

  mainControls.append(playIcon);
  mainControls.append(nextBtnInPLayer);
  mainControls.append(loopBtnInPLayer);
  isMusicBarOpened = true;
  playBtn = document.querySelectorAll("#controlicon-play");
  prevBtn = document.querySelectorAll("#controlicon-prev");
  nextBtn = document.querySelectorAll("#controlicon-next");
  loopBtn = document.querySelectorAll("#controlicon-loop");
  pbarTargetArea = document.querySelectorAll(".pbarTargetArea");
  pbar = document.querySelectorAll(".progressBarFill");
  durationDisplay = document.querySelectorAll("#totalDuration");
  crrDisplay = document.querySelectorAll("#currentTime");
  document.getElementById("triggerView").addEventListener("click", (evt) => {
    document.querySelector(".wrapperForMusicBar").append(nowPlayingWindow);

    setTimeout(() => {
      nowPlayingWindow.style.transform = "translate(0,0%)";
    }, 0);
    nowPlayingOpened = true;
  });
  loopIconFunction(loopBtn);
  prevIconFunction(prevBtn);
  nextIconFunction(nextBtn);
  pbarFunctionality(pbarTargetArea);
  playIconFunction(playBtn);
  mainPlayIconUpdate(playBtn);
  updateMusicBarBg();
  crrSongDetailsUpdate();
  startTouching();
}

songsInQueueClutter();

const nowPlayingSongs = document.querySelectorAll(".inQueueSong1");

let cardRow;
mainCardgenerate(cardRow);

document.addEventListener("DOMContentLoaded", () => {

  localStorage.getItem("crrSong")?crrSong=parseInt(localStorage.getItem("crrSong")):crrSong=0;
  localStorage.getItem("crrDuration")?Audio.currentTime=parseInt(localStorage.getItem("crrDuration")):crrDuration=0;
 
  Audio.src = playlist[crrSong];
  Audio.volume = 0.1;
  volumeValue = Audio.volume * 100;
  vbar.style.width = `${volumeValue}%`;
  volumeValue = Audio.volume;
  vwChecker();
  clutterCards();
  crrSongDetailsUpdate();
  updateAnimation();
  updateNowPlayingWindow();
      cardBtnUpdate();
      updateMeta();
      document.querySelector(".thumbnaillabel").innerText=`Playlist • ${playlist.length} songs`;
      document.getElementById("defaultsongs").addEventListener("click",()=>{
        tabUpdateForSearch();
      if (window.history.state == null || window.history.state.page == "home") {
        history.pushState({ page: "search" }, null, "/search");
        navIconUpdate();
      }
        displayArtistSongs("");
       })
  
});

playIconFunction(playBtn);

Audio.addEventListener("ended", () => {
  prevSong = crrSong;
  crrSong++;
  if (crrSong >= playlist.length) {
    crrSong = 0;
  }
  if (isLooping) {
    crrSong = loopingSong;
  }
  Audio.src = playlist[crrSong];
  Audio.play();
  crrSongDetailsUpdate();
  updateNowPlayingWindow();
  updateMeta();
  cardBtnUpdate();
  updateSearchCard();
});

Audio.addEventListener("loadedmetadata", () => {
  let actualSongDuration = Math.floor(Audio.duration);
  songDuration = actualSongDuration;
  let songDurationInMin = Math.floor(actualSongDuration / 60);
  let songDurationInSec = actualSongDuration % 60;

  if (songDurationInMin < 10) {
    songDurationInMin = `0${songDurationInMin}`;
  }
  if (songDurationInSec < 10) {
    songDurationInSec = `0${songDurationInSec}`;
  }
  durationDisplay.forEach((display) => {
    display.innerText = `${songDurationInMin}:${songDurationInSec}`;
  });
});

Audio.addEventListener("timeupdate", () => {
  actualCrrDuration = Math.floor(Audio.currentTime);
  crrDuration = actualCrrDuration;
  actualCrrDurationInMin = Math.floor(actualCrrDuration / 60);
  actualCrrDurationInSec = actualCrrDuration % 60;
  if (actualCrrDurationInMin < 10) {
    actualCrrDurationInMin = `0${actualCrrDurationInMin}`;
  }
  if (actualCrrDurationInSec < 10) {
    actualCrrDurationInSec = `0${actualCrrDurationInSec}`;
  }
  crrDisplay.forEach((display) => {
    display.innerText = `${actualCrrDurationInMin}:${actualCrrDurationInSec}`;
  });
  updatePbar();
  localStorage.setItem("crrDuration",Audio.currentTime);
});

pbarFunctionality(pbarTargetArea);

pbarTargetArea.forEach((bar) => {
  bar.addEventListener("mousedown", () => {
    // evt.preventDefault();
    isDragging = true;
    startDragging();
  });
});

pbarTargetArea.forEach((bar) => {
  bar.addEventListener("mouseup", () => {
    // evt.preventDefault();
    isDragging = false;
  });
});

vbarTargetArea.addEventListener("click", (evt) => {
  setVolume(evt);
});

vbarTargetArea.addEventListener("mousedown", () => {
  // evt.preventDefault();
  isVDragging = true;
  startVDragging();
});

vbarTargetArea.addEventListener("mouseup", () => {
  // evt.preventDefault();
  isVDragging = false;
});

volumeBtn.addEventListener("click", () => {
  if (Audio.volume !== 0.0) {
    Audio.volume = 0.0;
    vbar.style.width = `${Math.floor(Audio.volume) * 10}%`;
  } else if (Audio.volume === 0.0) {
    if (volumeValue === 0.0) {
      Audio.volume = 0.1;
      vbar.style.width = `${Math.floor(Audio.volume) * 10}%`;
    } else {
      Audio.volume = volumeValue;
      volumeValue = Audio.volume;

      vbar.style.width = `${Math.floor(volumeValue * 100)}%`;
    }
  }
});
Audio.addEventListener("volumechange", () => {
  volumeIconUpdate();
});

prevIconFunction(prevBtn);

nextIconFunction(nextBtn);

loopIconFunction(loopBtn);

songCards.forEach((card, idx) => {
  playByCard(card, idx);
});


nowPlayingVeiwBtn.addEventListener("click", () => {
  if (!nowPlayingOpened) {
    nowPlayingWindow.style.transform = "translate(0 ,0%)";
    nowPlayingOpened = !nowPlayingOpened;
    nowPlayingVeiwBtn.style.color = "#1ED760";
    nowPlayingVeiwBtn.classList.add("NowPlayingVeiwBtn");
    if(document.querySelector(".tippy-arrow")){
      tooltip.hide();
    }
    let isSidebarCollapsed=localStorage.getItem("isSidebarCollapsed")?localStorage.getItem("isSidebarCollapsed"):"false";
    if(isSidebarCollapsed=="false"){
    mainWindow.style.width="50vw";
  }
  else{
    mainWindow.style.width="72vw";
  }
  } else if (nowPlayingOpened) {
    nowPlayingWindow.style.transform = "translate(0 ,100%)";
    console.log("listened");
    nowPlayingOpened = !nowPlayingOpened;
    nowPlayingVeiwBtn.style.color = "#ffffff";
    nowPlayingVeiwBtn.classList.remove("NowPlayingVeiwBtn");
    let isSidebarCollapsed=localStorage.getItem("isSidebarCollapsed")?localStorage.getItem("isSidebarCollapsed"):"false";
    if(isSidebarCollapsed=="false"){
    mainWindow.style.width="75vw";
  }
  else{
    mainWindow.style.width="97vw";
  }
  }
});

nowPlayingSongs.forEach((queueSong, idx) => {
  queueSong.addEventListener("click", () => {
    prevSong = crrSong;
    crrSong = idx;
    Audio.src = playlist[crrSong];
    Audio.play();
    isPlaying = true;
    mainPlayIconUpdate(playBtn);
    updateNowPlayingWindow();
    cardBtnUpdate();
    crrSongDetailsUpdate();
    playBtn.innerText = "pause_circle";
    updateMeta();
  });
});

document.getElementById("nowPlayingClose").addEventListener("click", () => {
  nowPlayingWindow.style.transform = "translate(0 ,100%)";
  nowPlayingVeiwBtn.style.color = "#ffffff";
  nowPlayingOpened = !nowPlayingOpened;
  nowPlayingVeiwBtn.classList.remove("NowPlayingVeiwBtn");
  if(!openedInMobile){
    let isSidebarCollapsed=localStorage.getItem("isSidebarCollapsed")?localStorage.getItem("isSidebarCollapsed"):"false";

    if(isSidebarCollapsed=="false"){
      mainWindow.style.width="73vw";
  }
  else{
    mainWindow.style.width="95vw";
  }}
});

navigator.mediaSession.setActionHandler("play", function () {
  Audio.play();
  isPlaying = true;
  mainPlayIconUpdate(playBtn);
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});

navigator.mediaSession.setActionHandler("pause", function () {
  Audio.pause();
  isPlaying = false;
  mainPlayIconUpdate(playBtn);
});

navigator.mediaSession.setActionHandler("previoustrack", function () {
  prevSong = crrSong;
  crrSong--;
  if (crrSong === -1) crrSong = 0;
  Audio.src = playlist[crrSong];
  Audio.play();
  isPlaying = true;
  mainPlayIconUpdate(playBtn);
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});

navigator.mediaSession.setActionHandler("nexttrack", function () {
  prevSong = crrSong;
  crrSong++;
  if (crrSong == playlist.length) crrSong = 0;
  Audio.src = `${playlist[crrSong]}`;
  Audio.play();
  isPlaying = true;
  mainPlayIconUpdate(playBtn);
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});



if (!isMusicBarOpened) {
  document.querySelector("#followme").addEventListener("click", () => {
    window.open("https://www.instagram.com/__raghvendra__001/");
  });
}

applyFullScreenPlayerStyling();

function sideBarForMobile(cross){
  document.querySelector(".sidebar").style.transform="translate(0,0)";
  cross.style.transform="rotateZ(0deg)";
  cross.addEventListener("click",()=>{
    cross.style.transform="rotateZ(600deg)";
    setTimeout(()=>{cross.style.transform="rotateZ(0deg)"},1000)
    document.querySelector(".sidebar").style.transform="translate(-100%,0)";
  })
  
}

document.querySelector(".defaultlistings").addEventListener("scroll",(evt)=>{
  if(evt.target.scrollTop>10){
    evt.target.classList.add("displayForBefore");
  }
  else if(evt.target.scrollTop<=10){
    evt.target.classList.remove("displayForBefore");
  }
})




//<-----setup button to close sidebar and further functionality and styling for mobile-->

window.addEventListener("resize",()=>{
  
    if(window.innerWidth>widthForMobileCardsCluttering){
      if(userDevice=="mob"){
        localStorage.setItem("device","pc");

      location.reload();
    }
      else if(userDevice=="pc"){
      return;
    } 
    }
    if(window.innerWidth<=widthForMobileCardsCluttering){
      if(userDevice=="pc"){
        localStorage.setItem("device","mob");
        location.reload();
      }
      else if(userDevice=="mob"){
        return;
      }
    }
})
