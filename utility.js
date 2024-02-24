function playIconFunction(playBtn) {
  playBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      if (!openedInMobile) {
        if (isPlaying) {
          audio.play();
          btn.innerText = "pause_circle";
        } else if (!isPlaying) {
          audio.pause();
          console.log("listeningpaused");
          btn.innerText = "play_circle";
        }
      }
      if (openedInMobile) {
        if (isPlaying) {
          audio.play();
          if (isMusicBarOpened) {
            btn.innerText = "pause_circle";
            btn.setAttribute("class", "material-symbols-outlined");
          } else if (!isMusicBarOpened) {
            btn.innerText = "pause";
            btn.setAttribute("class", "material-symbols-rounded");
          }
        } else if (!isPlaying) {
          audio.pause();
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
      audio.src = playlist[crrSong];
      audio.play();
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
      audio.src = playlist[crrSong];
      audio.play();
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
      let totalTimeforHere = audio.duration;
      audio.currentTime = (totalTimeforHere * percentage) / 100;
    });
  });
}
