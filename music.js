const audio = document.querySelector("audio");
const pbar = document.querySelector(".progressBarFill");
const playBtn = document.querySelector("#controlicon-play");
const prevBtn = document.querySelector("#controlicon-prev");
const nextBtn = document.querySelector("#controlicon-next");
const shuffleBtn = document.querySelector("#controlicon-shuffle");
const loopBtn = document.querySelector("#controlicon-loop");
const durationDisplay = document.querySelector("#totalDuration");
const crrDisplay = document.querySelector("#currentTime");
const pbarTargetArea = document.querySelector(".pbarTargetArea");
const vbarTargetArea = document.querySelector(".vbarTargetArea");
const vbar = document.querySelector(".volumeBarFill");
const volumeBtn = document.querySelector("#sideControls-sound");
const crrSongThumb = document.querySelector(".main-window-playlist-thumb");
const crrSongName = document.querySelector(".currentMusic-Player");
const songCards = document.querySelectorAll(".songCard");
const nowPlayingWindow = document.querySelector(".nowPlayingVeiw");
const nowPlayingImage = document.querySelector(".nowPlayingMainImg");
const nowPlayingSongName = document.querySelector(".nowPlayingSongName");
const nowPlayingSongArtist = document.querySelector(".nowPlayingSongArtist");
const inQueueSongsCont = document.querySelector(".inQueueSongs");
const nowPlayingVeiwBtn = document.querySelector("#sideControls-veiw");


let isPlaying = false;
let crrSong = 0;
let songDuration;
let crrDuration;
let volumeValue;
let isDragging = false;
let isVDragging = false;
let isLooping = false;
let prevSong = 0;
let nowPlayingOpened = false;


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
    description: 'Arijit Singh, Shreyas Puranik',
    fullName: 'Satranga (From "Animal")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2",
    name: "Chaleya",
    description: 'Arijit Singh, Anirudh Ravichander',
    fullName: 'Chaleya (From "Jawan")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02333548f23189291acdee787d",
    name: "4.10",
    description: "DIVINE, Lal Chand Yamla Jatt",
    fullName: '4.10'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62",
    name: "Kesariya",
    description: 'Pritam, Arijit Singh, Amitabh Bhattacharya',
    fullName: 'Kesariya ("From Bhramastra")'

  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028eeefdbfd14ad10510ba6c86",
    name: "Woh Raat",
    description: "Raftaar, KR$NA",
    fullName: 'Woh Raat'
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
    description: 'Ved Sharma, Kunal Vermaa',
    fullName: 'Malang (From "Malang")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e027b93fd8b0ade33ceb9d536de",
    name: "Duniyaa",
    description: 'Akhil, Dhvani Bhanushali',
    fullName: 'Duniya (From "Lukka Chuppi")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f",
    name: "Labon Ko",
    description: "Pritam, KK",
    fullName: 'Labon Ko'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c",
    name: "Lovely (with Khalid)",
    description: "Billi Eilish, Khalid",
    fullName: 'Lovely (with Khalid)'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
    name: "STAY (with Justin Bieber)",
    description: "The Kid LARAOI,Justin Bieber",
    fullName: 'STAY (with Justin Bieber)'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27371da5e89467bd75d2ed9f1fa",
    name: "Jannatein Kahan",
    description: "Pritam, KK",
    fullName: 'Jannatein Kahan'

  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e029ad4c5b52effc242984def78",
    name: "Sometimes",
    description: "AUR",
    fullName: 'Sometimes'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02f5a66f7c0126268d45cda1b6",
    name: "Namastute",
    description: "Seedhe Maut",
    fullName: 'Namastute'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2733fb3fb3086a40c2c5062501d",
    name: "Tu Hai Kahan",
    description: "AUR",
    fullName: 'Tu Hai Kahan'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
    name: "Arjan Vailly",
    description: 'Manan Bharadwaj, Bhupinder Babbal',
    fullName: 'Arjan Vailly (From "ANIMAL")'

  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0209426d9ae9d8d981735ebc5e",
    name: "Ranjha",
    description: 'B Praak, Jasleen Royal',
    fullName: 'Ranjha (From "Shershaah")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01",
    name: "Ratan Lambiyan",
    description: 'Tanishq Bagchi, Jubin Nautiyal',
    fullName: 'Ratan Lambiyan (From "Shershaah")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02dea88e870d30a4da51065bf5",
    name: "Manjha",
    description: "Vishal Mishra",
    fullName: 'Manjha'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2",
    name: "Chaleya",
    description: 'Arijit Singh, Anirudh Ravichander',
    fullName: 'Chaleya (From "Jawan")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02021d7017f73387b008eab271",
    name: "Satranga",
    description: 'Arijit Singh, Shreyas Puranik',
    fullName: 'Satranga ("From Animal")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e022432edc97b465e6db54d356b",
    name: "Phir Mohobbat",
    description: 'Md.Irfan, Arijit Singh, Saim Bhat',
    fullName: 'Phir Mohobbat (From "Murder 2")'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273b5eba194cd2f743be9a0f87b",
    name: "Hothon Se Chu Lo Tum",
    description: "Jagjit Singh",
    fullName: 'Hothon Se Chu Lo Tum'
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27300221eaa504574172c617504",
    name: "No Mercy",
    description: "Deep Kalsi, Raftaar, KR$NA, KARMA",
    fullName: "No Mercy"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273f8c35169d5bab01327f87e5a",
    name: "Blowing Up",
    description: "KR$NA",
    fullName: "Blowing Up"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273843596e5677ecc71fee1c340",
    name: "Prarthna",
    description: "KR$NA",
    fullName: "Prarthna"
  },
  {
    src: "https://lh3.googleusercontent.com/PvuDzAO7HEl3SzakzJhb0fmWGAMuJmNQt_BVeKoS9Kivin_io0qSt1SrxS8iGE7y66wA49zGH5n0twWg",
    name: "Athma Rama",
    description: "Agam Aggrawal",
    fullName: "Athma Rama"
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BZjg2ZjViMTktNWQ1Yy00ODZiLWE1OTgtNDY3MjI0OGUyNjNhXkEyXkFqcGdeQXVyNTk4NDI4NTE@._V1_.jpg",
    name: "BEN 10-Theme Song",
    description: "Sunidhi Chauhan",
    fullName: "BEN 10-Theme Song"
  }
];


function updatePbar() {
  pbar.style.width = `${(crrDuration / songDuration) * 100}%`;
}

function setDuration(evt) {
  let pbarTargetAreaWidth = pbarTargetArea.getBoundingClientRect().width;
  let clikedPosition = evt.offsetX;
  let pbarWidth = `${Math.floor((clikedPosition / pbarTargetAreaWidth) * 100) + 2}`;

  pbar.style.width = `${pbarWidth}%`;

  audio.currentTime = (parseInt(pbarWidth) * songDuration) / 100;
}

function startDragging() {
  pbarTargetArea.addEventListener("mousemove", (evt) => {
    // evt.preventDefault();
    if (isDragging == true) {
      setDuration(evt);
    }
  })
}

function startVDragging() {
  vbarTargetArea.addEventListener("mousemove", (evt) => {
    // evt.preventDefault();
    if (isVDragging == true) {
      setVolume(evt);
    }
  })
}

function setVolume(evt) {
  let vbarTargetAreaWidth = Math.floor(vbarTargetArea.getBoundingClientRect().width)
  let clickedPosition = Math.floor(evt.offsetX);
  let finalWidth = clickedPosition / vbarTargetAreaWidth * 100;
  let changedVolume = (finalWidth / 100 * 100) / 100;
  if (changedVolume >= 0.0 && changedVolume <= 1) {
    audio.volume = changedVolume;
  }

  vbar.style.width = `${finalWidth}%`
  volumeValue = audio.volume;
}

function volumeIconUpdate() {

  if (audio.volume == 0.0) {
    volumeBtn.innerText = "volume_off";
  }

  else if (audio.volume >= 0.5) {

    volumeBtn.innerText = "volume_up";

  }

  else if (audio.volume < 0.5) {
    volumeBtn.innerText = "volume_down";
  }
}

function crrSongDetailsUpdate() {
  crrSongThumb.src = songDetails[crrSong].src;
  crrSongName.textContent = songDetails[crrSong].name;
  let crrSongArtists = document.createElement("p");
  crrSongArtists.innerText = songDetails[crrSong].description;
  crrSongName.append(crrSongArtists);
}

function playByCard(card, idx) {
  card.addEventListener("click", () => {
    prevSong = crrSong;
    crrSong = idx;
    audio.src = playlist[crrSong];
    audio.play();
    playBtn.innerText = "pause_circle";
    isPlaying = true;
    crrSongDetailsUpdate();
    cardBtnUpdate();
    updateNowPlayingWindow();
    updateMeta();

  })
}

function cardBtnUpdate() {
  songCards[prevSong].querySelector("#cardplayicon").innerText = "play_arrow";
  songCards[crrSong].querySelector("#cardplayicon").innerText = "pause";
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
    node.querySelector(".queueSongArtist").innerText = songDetails[idx].description;
  })

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
  if (isPlaying == true) animationBars.forEach((eachBar) => { eachBar.style.animationName = "play"; });
  else if (isPlaying == false) animationBars.forEach((eachBar) => { eachBar.style.animationName = "none"; });
  if (crrSong === 0) nowPlayingSongs.forEach((song) => { song.style.opacity = "1"; });
  nowPlayingSongs[prevSong].style.opacity = "0.5";
  nowPlayingSongs[crrSong].style.opacity = "0.7";
  if (prevSong === playlist.length - 1) nowPlayingSongs[prevSong].style.opacity = "1";


}

function updateMeta() {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: `${songDetails[crrSong].fullName}`,
    artist: `${songDetails[crrSong].description}`,
    artwork: [{ src: `${songDetails[crrSong].src}`, sizes: '600x600', type: 'image/jpeg' }]
  })
}







songsInQueueClutter();

const nowPlayingSongs = document.querySelectorAll(".inQueueSong1");

document.addEventListener("DOMContentLoaded", () => {
  audio.src = playlist[crrSong];
  audio.volume = 0.1;
  volumeValue = audio.volume * 100;
  vbar.style.width = `${volumeValue}%`;
  volumeValue = audio.volume;
  crrSongDetailsUpdate();

});



playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    audio.play();
    playBtn.innerText = "pause_circle";
    updateNowPlayingWindow();
  } else if (!isPlaying) {
    audio.pause();
    playBtn.innerText = "play_circle";
    updateNowPlayingWindow();
  }
  crrSongDetailsUpdate();
  updateMeta();
});

audio.addEventListener("ended", () => {
  prevSong = crrSong;
  crrSong++;
  if (crrSong >= playlist.length) {
    crrSong = 0;
  }
  if (isLooping) {
    crrSong = loopingSong;
  }
  audio.src = playlist[crrSong];
  audio.play();
  crrSongDetailsUpdate();
  updateNowPlayingWindow();
  updateMeta();
  cardBtnUpdate()

});

audio.addEventListener("loadedmetadata", () => {
  let actualSongDuration = Math.floor(audio.duration);
  songDuration = actualSongDuration;
  let songDurationInMin = Math.floor(actualSongDuration / 60);
  let songDurationInSec = actualSongDuration % 60;

  if (songDurationInMin < 10) {
    songDurationInMin = `0${songDurationInMin}`;
  }
  if (songDurationInSec < 10) {
    songDurationInSec = `0${songDurationInSec}`;
  }
  durationDisplay.innerText = `${songDurationInMin}:${songDurationInSec}`;
});

audio.addEventListener("timeupdate", () => {
  actualCrrDuration = Math.floor(audio.currentTime);
  crrDuration = actualCrrDuration;
  actualCrrDurationInMin = Math.floor(actualCrrDuration / 60);
  actualCrrDurationInSec = actualCrrDuration % 60;
  if (actualCrrDurationInMin < 10) {
    actualCrrDurationInMin = `0${actualCrrDurationInMin}`;
  }
  if (actualCrrDurationInSec < 10) {
    actualCrrDurationInSec = `0${actualCrrDurationInSec}`;
  }
  crrDisplay.innerText = `${actualCrrDurationInMin}:${actualCrrDurationInSec}`;
  updatePbar();
});

pbarTargetArea.addEventListener("click", (evt) => {
  setDuration(evt);
});

pbarTargetArea.addEventListener("mousedown", () => {
  // evt.preventDefault();
  isDragging = true
  startDragging();

});

pbarTargetArea.addEventListener("mouseup", () => {
  // evt.preventDefault();
  isDragging = false;
});

vbarTargetArea.addEventListener("click", (evt) => {
  setVolume(evt);
});

vbarTargetArea.addEventListener("mousedown", () => {
  // evt.preventDefault();
  isVDragging = true
  startVDragging();

});

vbarTargetArea.addEventListener("mouseup", () => {
  // evt.preventDefault();
  isVDragging = false;
});

volumeBtn.addEventListener("click", () => {
  console.log("yesclicked")
  if (audio.volume !== 0.0) {

    audio.volume = 0.0;
  }
  else if (audio.volume === 0.0) {
    if (volumeValue === 0.0) { audio.volume = 0.1 }
    else audio.volume = volumeValue;

  }
})
audio.addEventListener("volumechange", () => {
  volumeIconUpdate()

})

prevBtn.addEventListener("click", () => {
  prevSong = crrSong;
  crrSong--;
  if (crrSong < 0) {
    crrSong = 0;
  }
  audio.src = playlist[crrSong];
  audio.play();
  playBtn.innerText = "pause_circle";
  isLooping = false;
  isPlaying = true;
  crrSongDetailsUpdate();
  cardBtnUpdate();
  updateNowPlayingWindow();
  updateMeta();

});

nextBtn.addEventListener("click", () => {
  prevSong = crrSong;
  crrSong++;
  if (crrSong === playlist.length) {
    crrSong = 0;
  }
  audio.src = playlist[crrSong];
  audio.play();
  playBtn.innerText = "pause_circle";
  isLooping = false;
  isPlaying = true;
  crrSongDetailsUpdate();
  cardBtnUpdate();
  updateNowPlayingWindow();
  updateMeta();
})

loopBtn.addEventListener("click", () => {
  isLooping = !isLooping;
  if (isLooping) {
    loopingSong = crrSong;
    loopBtn.style.color = "#15ff5b";
  }
  else if (!isLooping) {
    loopBtn.style.color = "#ffffff";
  }

});

songCards.forEach((card, idx) => {
  playByCard(card, idx);
});

nowPlayingVeiwBtn.addEventListener("click", () => {
  if (!nowPlayingOpened) {
    nowPlayingWindow.style.transform = "translate(0 ,0%)";
    nowPlayingOpened = !nowPlayingOpened;
    nowPlayingVeiwBtn.style.color = "#1ED760"
    nowPlayingVeiwBtn.classList.add("NowPlayingVeiwBtn");

  }
  else if (nowPlayingOpened) {
    nowPlayingWindow.style.transform = "translate(0 ,100%)";
    console.log("listened")
    nowPlayingOpened = !nowPlayingOpened;
    nowPlayingVeiwBtn.style.color = "#ffffff";
    nowPlayingVeiwBtn.classList.remove("NowPlayingVeiwBtn");
  }
})

nowPlayingSongs.forEach((queueSong, idx) => {
  queueSong.addEventListener("click", () => {
    prevSong = crrSong;
    crrSong = idx;
    audio.src = playlist[crrSong];
    audio.play();
    isPlaying = true;
    updateNowPlayingWindow();
    cardBtnUpdate();
    crrSongDetailsUpdate();
    playBtn.innerText = "pause_circle";
    updateMeta();

  })
})

document.getElementById("nowPlayingClose").addEventListener("click", () => {
  nowPlayingWindow.style.transform = "translate(0 ,100%)";
  nowPlayingVeiwBtn.style.color = "#ffffff";
  nowPlayingOpened = !nowPlayingOpened;
  nowPlayingVeiwBtn.classList.remove("NowPlayingVeiwBtn");
})






navigator.mediaSession.setActionHandler('play', function () {
  prevSong = crrSong;
  audio.src = playlist[crrSong];
  audio.play();
  isPlaying = true;
  playBtn.innerText = "pause_circle";
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});

navigator.mediaSession.setActionHandler('pause', function () {
  audio.pause();
  isPlaying = false;
  playBtn.innerText = "play_circle";
});

navigator.mediaSession.setActionHandler('previoustrack', function () {
  prevSong = crrSong;
  crrSong--;
  if (crrSong === -1) crrSong = 0;
  audio.src = playlist[crrSong];
  audio.play();
  isPlaying = true;
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});

navigator.mediaSession.setActionHandler('nexttrack', function () {
  prevSong = crrSong;
  crrSong++;
  if (crrSong == playlist.length) crrSong = 0;
  audio.src = `${playlist[crrSong]}`;
  audio.play();
  isPlaying = true;
  updateMeta();
  updateNowPlayingWindow();
  cardBtnUpdate();
  crrSongDetailsUpdate();
});







