function playIconFunction(playBtn) {
  playBtn.forEach((btn,idx) => {
    if( idx===1){
      return;
      
    }
    btn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      if (!openedInMobile) {
        if (isPlaying) {
          Audio.play();
          btn.innerText = "pause_circle";
        } else if (!isPlaying) {
          Audio.pause();
          
          btn.innerText = "play_circle";
        }
      }
      if (openedInMobile) {
        if (isPlaying) {
          Audio.play();
          if (isMusicBarOpened) {
            btn.innerText = "pause_circle";
            btn.setAttribute("class", "material-symbols-outlined");
          } else if (!isMusicBarOpened) {
            btn.innerText = "pause";
            btn.setAttribute("class", "material-symbols-rounded");
          }
        } else if (!isPlaying) {
          Audio.pause();
          if (isMusicBarOpened) {
            btn.innerText = "play_circle";
            btn.setAttribute("class", "material-symbols-outlined");
          } else if (!isMusicBarOpened) {
            // console.log("listeningpaused");
            btn.innerText = "play_arrow";
            btn.setAttribute("class", "material-symbols-rounded");
          }
        }
      }
      updateNowPlayingWindow();
      cardBtnUpdate();
      crrSongDetailsUpdate();
      updateMeta();
      
    }
   );
  ;
  });
}

function nextIconFunction(nextBtn) {
  nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      prevSong = crrSong;
      crrSong++;
      if (crrSong === playlist.length) {
        crrSong = 0;
      }
      Audio.src = playlist[crrSong];
      Audio.play();
      isLooping = false;
      isPlaying = true;
      mainPlayIconUpdate(playBtn);
      crrSongDetailsUpdate();
      cardBtnUpdate();
      updateNowPlayingWindow();
      updateMeta();
    });
  });
}

function loopIconFunction(loopBtn) {
  loopBtn.forEach((btn) => {
    if (isLooping) {
      btn.style.color = "#15ff5b";
    }
    if (!isLooping) {
      btn.style.color = "#ffffff";
    }
    btn.addEventListener("click", () => {
      isLooping = !isLooping;
      if (isLooping) {
        loopingSong = crrSong;
        btn.style.color = "#15ff5b";
      } else if (!isLooping) {
        btn.style.color = "#ffffff";
      }
    });
  });
}

function prevIconFunction(prevBtn) {
  prevBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      prevSong = crrSong;
      crrSong--;
      if (crrSong < 0) {
        crrSong = 0;
      }
      Audio.src = playlist[crrSong];
      Audio.play();
      isLooping = false;
      isPlaying = true;
      mainPlayIconUpdate(playBtn);
      crrSongDetailsUpdate();
      cardBtnUpdate();
      updateNowPlayingWindow();
      updateMeta();
    });
  });
}

function shuffleIconFunction() {}

function mainPlayIconUpdate(playBtn) {
  playBtn.forEach((btn) => {
    if (!openedInMobile) {
      if (isPlaying) {
        btn.innerText = "pause_circle";
        updateNowPlayingWindow();
      } else if (!isPlaying) {
        btn.innerText = "play_circle";
        updateNowPlayingWindow();
      }
    }
    if (openedInMobile) {
      if (isPlaying) {
        if (isMusicBarOpened) {
          btn.innerText = "pause_circle";
          btn.setAttribute("class", "material-symbols-outlined");
        } else if (!isMusicBarOpened) {
          btn.innerText = "pause";
          btn.setAttribute("class", "material-symbols-rounded");
        }
      } else if (!isPlaying) {
        if (isMusicBarOpened) {
          btn.innerText = "play_circle";
          btn.setAttribute("class", "material-symbols-outlined");
        } else if (!isMusicBarOpened) {
          btn.innerText = "play_arrow";
          btn.setAttribute("class", "material-symbols-rounded");
        }
      }
    }
    updateNowPlayingWindow();
    cardBtnUpdate();
    crrSongDetailsUpdate();
    updateMeta();
  });
}

function pbarFunctionality(pbarTargetArea) {
  pbarTargetArea.forEach((bar) => {
    bar.addEventListener("click", (evt) => {
      setDuration(evt);
    });
  });
}

function vwChecker() {
  testDiv = document.createElement("div");
  testDiv.style.height = "1vw";
  testDiv.style.width = "1vw";
  document.querySelector("body").append(testDiv);
  vw = testDiv.clientWidth;
}

function startTouching() {
  pbarTargetArea.forEach((bar) => {
    bar.addEventListener("touchmove", (evt) => {
      let totalWidth = bar.clientWidth;
      let draggedposition = Math.floor(evt.touches[0].clientX);
      let percentage = (draggedposition / totalWidth) * 100;
      let totalTimeforHere = Audio.duration;
      Audio.currentTime = (totalTimeforHere * percentage) / 100;
    });
  });
}

function createDefaultCards() {
  if(!document.querySelector(".defaultCardRows")){

  defaultCardsData.forEach((card, idx) => {
    if (idx % 9 === 0) {
      let cardRow = document.createElement("div");
      cardRow.setAttribute("class", "defaultCardRows");
      document.querySelector(".mainwindow-search-default").append(cardRow);
    }

    let defaultCard = cardCreation(card);
    defaultCard.setAttribute("draggable", "true");
    let rowIdx = Math.floor(idx / 9); // Determine which row to append the card to

    let cardRows = document.querySelectorAll(".defaultCardRows");
    cardRows[rowIdx].append(defaultCard);
  });
}
}
function cardCreation(card) {
  let defaultCard = document.createElement("div");
  defaultCard.setAttribute("class", "defaultCard");
  
  let label = document.createElement("p");
  label.setAttribute("class", "defaultCard-label");
  label.innerText = card.title;
  
  let img = document.createElement("img");
  img.setAttribute("class", "defaultCard-img");
  img.src = card.src;
  
  defaultCard.append(label, img);
  defaultCard.style.backgroundColor = card.color;
  
  return defaultCard;
}

 async function getDuration(){
 for(song of playlist){
  tempAudio.src=song;
  await new Promise((resolve,reject)=>{
    tempAudio.addEventListener("loadedmetadata",()=>{

    });
    resolve();
 })}}

 function displayDuration(Audio,forData){
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
  if(!forData){
  durationDisplay.forEach((display) => {
    display.innerText = `${songDurationInMin}:${songDurationInSec}`;
  });
}
else if(forData){

}
 }