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
      updateSearchCard();
      
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
      updateSearchCard();

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
      updateSearchCard();

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
    updateSearchCard();

  });
}

function pbarFunctionality(pbarTargetArea) {
  pbarTargetArea.forEach((bar) => {
    bar.addEventListener("click", (evt) => {
      setDuration(evt);
    });
  });
}
function playByCard(card, idx, searchCard) {
  card.addEventListener("click", () => {
    prevSong = crrSong;
    crrSong = idx;
    Audio.src = playlist[crrSong];
    Audio.play();
    isPlaying = true;

    if(searchCard){
  updateSearchCard();
    }
    mainPlayIconUpdate(playBtn);
    crrSongDetailsUpdate();
    cardBtnUpdate();
    updateNowPlayingWindow();
    updateMeta();

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

function createDefaultCards(num) {
  if(!document.querySelector(".defaultCardRows")){

  defaultCardsData.forEach((card, idx) => {
    if (idx % num === 0) {
      let cardRow = document.createElement("div");
      cardRow.setAttribute("class", "defaultCardRows");
      document.querySelector(".mainwindow-search-default").append(cardRow);
    }

    let defaultCard = cardCreation(card);
    defaultCard.setAttribute("draggable", "false");
    let rowIdx = Math.floor(idx / num); // Determine which row to append the card to

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
  img.setAttribute("draggable", "false");
  img.src = card.src;
  
  defaultCard.append(label, img);
  defaultCard.style.backgroundColor = card.color;
  
  return defaultCard;
}

async function getDuration(){
 
  //  for(let i=0;i<playlist.length;i++){ 
  //   tempAudio.src = playlist[i];
  //   await new Promise((resolve, reject) => {
  //     tempAudio.addEventListener("loadedmetadata", () => {
  //       resolve();
  //     });
  //   });
  //   songDetails[i].duration=displayDuration(tempAudio);
  // };
    songDetails.forEach((songData,idx)=>{
      let card=searchSongCardCreation(songData);
   card.style.display="none";
   let searchCard=true;
   playByCard(card,idx,searchCard);
    
    });
    mainWindowSearchResult.style.display="none";
  
}

function displayDuration(audio, forData=true){
  let actualSongDuration = Math.floor(audio.duration);
  let songDuration = actualSongDuration;
  let songDurationInMin = Math.floor(actualSongDuration / 60);
  let songDurationInSec = actualSongDuration % 60;

  if (songDurationInMin < 10) {
    songDurationInMin = `0${songDurationInMin}`;
  }
  if (songDurationInSec < 10) {
    songDurationInSec = `0${songDurationInSec}`;
  }

  if (!forData) {
    durationDisplay.forEach((display) => {
      display.innerText = `${songDurationInMin}:${songDurationInSec}`;
    });
  } else {
    return `${songDurationInMin}:${songDurationInSec}`;
  }
}

function searchSongCardCreation(songData){

  //Creating Markup for Search Song Card

 let searchCard=document.createElement("div");
 searchCard.setAttribute("class","search-songCard");

 let wrapperForSongDetails=document.createElement("div");
 wrapperForSongDetails.setAttribute("class","contForSongDetails");
 
 let searchSongImgCont=document.createElement("div");
 searchSongImgCont.setAttribute("class","searchSongImgCont");
 searchSongImgCont.innerHTML=playIcon_BarsHtml;
 
 let searchSongCardText=document.createElement("div");
 searchSongCardText.setAttribute("class","search-songCardText");

 let resultsSongName=document.createElement("p");
 resultsSongName.setAttribute("class","result-songName");
 
 let resultsSongArtists=document.createElement("p");
 resultsSongArtists.setAttribute("class","result-songArtists");
 
 let resultsSongDuration=document.createElement("p");
 resultsSongDuration.setAttribute("class","result-songDur");
 
 let resultsSongAlbum=document.createElement("p");
 resultsSongAlbum.setAttribute("class","search-songCardAlbum");

 let wrapperForResultName=document.createElement("div");  //optional element for scrolling text
 //Appending the created elements to the main search card


 
 
 
 
 //filling the search card with data
 
 searchSongImgCont.style.backgroundImage=`url(${songData.src})`
 resultsSongName.innerText=songData.name;
 resultsSongArtists.innerText=songData.description;
 resultsSongDuration.innerText=songData.duration;
 resultsSongAlbum.innerText=songData.album;
 
 
 
 

 wrapperForSongDetails.append(searchSongImgCont,searchSongCardText);
 searchCard.append(wrapperForSongDetails,resultsSongDuration,resultsSongAlbum);
 
 if(openedInMobile){
  searchSongCardText.append(wrapperForResultName,resultsSongArtists);
  wrapperForResultName.append(resultsSongName);
  wrapperForResultName.setAttribute("class","result-songNameWrapper");


//  if(wrapperForResultName.scrollWidth>wrapperForResultName.clientWidth){
  if(1){
    // console.log("width exceeding");
    // console.log("scroll width:",wrapperForResultName.scrollWidth);
    // console.log("scroll width:",wrapperForResultName.clientWidth);
    // console.log("\n");
    wrapperForResultName.classList.add("result-songNameWrapperOnScrolling");
    // resultsSongName.style.animation="scroll linear 8s infinite forwards";
   }
 
 }
 else{
  searchSongCardText.append(resultsSongName,resultsSongArtists);
 }

  let id="";
for(let property in songData){
  if(property==="src" || property==="fullname" ){
    continue;
  }
  else{
     id+= cardIdCreation(songData[property]);
      
  }
}
searchCard.setAttribute("id",id);
document.querySelector(".mainwindow-search-results").append(searchCard);
return searchCard;

}



function cardIdCreation(songProperties){
return songProperties.split(" ").join("").toLowerCase().split(",").join("").split('"').join("").split("(").join("").split(")").join("");
}

getDuration()

window.addEventListener("keydown",(evt)=>{
  if(evt.key==" "){
    if(document.activeElement!==mainWindowSearchBar && document.activeElement!==searchBox){
    evt.preventDefault();
    if(isPlaying){
      Audio.pause();
      isPlaying=!isPlaying;
    }
    else if(!isPlaying){
      Audio.play();
      isPlaying=!isPlaying;
    }
    mainPlayIconUpdate(playBtn);
    crrSongDetailsUpdate();
    cardBtnUpdate();
    updateNowPlayingWindow();
    updateMeta();

  }
  }
})



function mainCardgenerate(cardRow){
  songDetails.forEach((songData,idx)=>{
    
        if(idx%7===0){
           cardRow = document.createElement("div");
           cardRow.setAttribute("class","songcontainer1");
           document.querySelector(".mainwindow-cont-wrapper-home").append(cardRow);
        }
        
     
          cardRow.innerHTML=cardRow.innerHTML?`${cardRow.innerHTML}\n${songCardInnerHtml}`:songCardInnerHtml;
          let songNodeList=document.querySelectorAll(".songCard");
          songNodeList[idx].querySelector("img").src=songData.src;
          songCards=document.querySelectorAll(".songCard");
      
        
        
  });
}

function updateVbar(evt,vbarTargetAreaWidth,finalWidth){

  if(finalWidth==undefined){
    let clickedPosition = Math.floor(evt.offsetX);
    finalWidth = (clickedPosition / vbarTargetAreaWidth) * 100;
  }
  let changedVolume = ((finalWidth / 100) * 100) / 100;
  if (changedVolume >= 0.0 && changedVolume <= 1) {
    Audio.volume = changedVolume;
    volumeValue=Audio.volume;
  }

  vbar.style.width = `${finalWidth}%`;
  if (vbar.clientWidth < vw * 0.9) {
    vbar.style.justifyContent = "flex-start";
  } else if (vbar.clientWidth >= vw * 0.9) {
    vbar.style.justifyContent = "flex-end";
  }
}

function mainSearchBarFunctionality(evt){
  if(mainWindowSearchBar.value.length>=13){return;}
  mainWindowSearchResult.style.display="none";
  mainWindowSearchDefault.style.display="block";
  mainWindowSearchFail.style.display="flex";
  mainWindowSearchFail.querySelector("h3").innerText=`Couldn't find "${evt.target.value}"❗ `;

  let allCards=document.querySelectorAll(".search-songCard");
   allCards.forEach((card)=>{
    if(evt.target.value!==""){
      let condition=card.getAttribute("id").includes(evt.target.value.toLowerCase().split(" ").join(""));
      cardDisplayOnMatchingWithSearchBarVal(condition,card);
    
    }
  else if(evt.target.value==""){
    mainCancelBtn.style.color = "transparent";
    mainWindowSearchResult.style.display="none";
    mainWindowSearchDefault.style.display="block";
    mainWindowSearchFail.style.display="none";
    elemsOriginalOrder();
  } })
   
}

function updateSearchCard(){
  let allSearchCards = document.querySelectorAll(".search-songCard");
  allSearchCards[prevSong].style.backgroundColor = "";
  allSearchCards[prevSong].querySelector(".searchSongImgCont").classList.remove("searchSongImgContCrr");
allSearchCards[prevSong].querySelector(".bars").style.display="none";
allSearchCards[prevSong].querySelector("#nowPlayingPlayIcon").style.display="initial";
allSearchCards[crrSong].style.backgroundColor = "rgb(78 76 76 / 21%)";
allSearchCards[crrSong].querySelector(".searchSongImgCont").classList.add("searchSongImgContCrr");
allSearchCards[crrSong].querySelector(".bars").style.display="flex";
allSearchCards[crrSong].querySelector("#nowPlayingPlayIcon").style.display="none";
if(openedInMobile){
  allSearchCards[prevSong].querySelector(".result-songNameWrapper").classList.remove("result-songNameWrapperOnScrollingSel");
  allSearchCards[crrSong].querySelector(".result-songNameWrapper").classList.add("result-songNameWrapperOnScrollingSel");
  

}

}

function artistArrayGenerate(){
  let artistArray=[];
    
  songDetails.forEach((songData)=>{
    let comparableArr=songData.description.split(", ");
    comparableArr.forEach((crrEl) => {
     if( artistArray.includes(crrEl)){return;}else {artistArray.push(crrEl)};
    });
  });

  return artistArray;
}

function createArtistCard(){
  artistArray.forEach((artistName,idx)=>{
    let artistCard=document.createElement("div");
    artistCard.classList.add("artistsideblock1");
    artistCard.innerHTML=artistCardhtml;
    artistCard.querySelector("img").src=profilePictureUrls[idx];
    artistCard.querySelector(".artistname").innerText=artistName;
    let sidebarFaliure=document.querySelector(".failedtosearch");
    document.querySelector(".defaultlistings").append(artistCard,sidebarFaliure);
    
  })
 
  
}
artistArray=artistArrayGenerate();
createArtistCard();


function displayArtistSongs(searchValue){
  history.pushState({ page: "searchquery" }, null, `/search?song=${searchValue}`);
  statesCovered=window.window.history.length-2;
  navIconUpdate();
    let allSearchCards = document.querySelectorAll(".search-songCard");
  allSearchCards.forEach((card)=>{
    let condition;
    if(card.id.indexOf(searchValue)!==-1)condition=true;
     cardDisplayOnMatchingWithSearchBarVal(condition,card)
  })
}


function cardDisplayOnMatchingWithSearchBarVal(condition,card){
  if(condition){
    card.style.display="flex";
    mainWindowSearchFail.style.display="none";
    mainWindowSearchDefault.style.display="none";
    mainWindowSearchResult.style.display="block";
    mainCancelBtn.style.pointerEvents="all";
    mainCancelBtn.style.color="white";

  }
  else{
    card.style.display="none";
   }
}

mainWindowSearchBar.addEventListener("focus",()=>{
  mainSearchBarFocus=true;
}
)
mainWindowSearchBar.addEventListener("blur",()=>{
  mainSearchBarFocus=false;
  
  history.pushState({ page: "searchquery" }, null, `/search?song=${mainWindowSearchBar.value}`);
  statesCovered=window.window.history.length-2;
  navIconUpdate();
}
)

