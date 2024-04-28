const Audio=document.querySelector("#mainAudioEl");
let tempAudio=document.querySelector("#tempAudioEl");
const mainWindowSearchBar = document.getElementById("mainSearchBar");
const mainWindowSearchDefault = document.querySelector(".mainwindow-search-default");
const mainWindowSearchResult = document.querySelector(".mainwindow-search-results");


const homeTabContainer=document.querySelector(".mainwindow-cont-wrapper-home");
const searchTabContainer=document.querySelector(".mainwindow-cont-wrapper-search");
const stylingForSearchTab=`
#homeicon-text{
    color:rgb(167, 166, 166);
}
#homeicon-svg{
    color:rgb(167, 166, 166);

      font-variation-settings:
      'FILL' 0,
      'wght' 400,   
      'GRAD' 0,
      'opsz' 24;
    
}
.mainSearchBarCont{
  display:flex;
}
#searchicons-svg{
  color:white;
}
#searchicon-text{
  color:white;
}
`
const stylingForHomeTab=`'
#homeicon-text{
    color:white;
}
#homeicon-svg{
    color:white;

      font-variation-settings:
      'FILL' 1,
      'wght' 400,   
      'GRAD' 0,
      'opsz' 24;
    }
    

.mainSearchBarCont{
  display:none;
}
#searchicons-svg{
  color:grey;
}
#searchicon-text{
  color:grey;
}
`
const defaultCardsData=[
  {
    src:"https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb",
    color:"#DC148C",
    title:"Music",

  },
  {
    src:"https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
    color:"#006450",
    title:"Podcasts",
  },
  {
    src:"https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
    color:"#8400E7",
    title:"Concerts",
  },
  {
    src:"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    color:"#1E3264",
    title:"Made For You",
  },
  {
    src:"https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
    color:"#E8115B",
    title:"New Releases",
  },
 {
  src:"https://i.scdn.co/image/ab67fb8200005caff5976b97bcf10d98acbae2cd",
  color:"#DC148C",
  title:"Hindi",
 },
 {
  src:"https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70",
  color:"#B02897",
  title:"Punjabi",
 },
 {
  src:"https://i.scdn.co/image/ab67fb8200005caf4b3beede484da74b233fa299",
  color:"#A56752",
  title:"Tamil",
 },
 {
  src:"https://i.scdn.co/image/ab67fb8200005caf666a4ae3e6161da7a120ca14",
  color:"#777777",
  title:"Ghazals",
 },
 {
  src:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
  color:"#0D73EC",
  title:"Podcast Charts",
 },
 {
  src: "https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6",
  title: "Podcast New Releases",
  color: "#8E66AC"
},
{
  src: "https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4",
  title: "Video Podcasts",
  color: "#E13300"
},
{
  src: "https://i.scdn.co/image/e227cd9674618024276c65f1213fb05af34cf512",
  title: "Buisness & Technology",
  color: "#777777"
},
{
  src: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  title: "Charts",
  color: "#8D67AB"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafbca4d84993408c24bec78de8",
  title: "Telegu",
  color: "#1E3264"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
  title: "Pop",
  color: "#148A08"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
  title: "Indie",
  color: "#E91429"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31",
  title: "Love",
  color: "#EF6D7A"
},
{
  src: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
  title: "Discover",
  color: "#8D67AB"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf0123a7f6f0e031c49e243389",
  title: "Bhojpuri",
  color: "#E13300"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
  title: "Trending",
  color: "#E13300"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
  title: "Mood",
  color: "#B02897"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
  title: "Party",
  color: "#E1118C"
},
{
  src: "https://t.scdn.co/images/ad3e3f8f80eb494d998a435f7a5ae8c7",
  title: "Devotional",
  color: "#537AA1"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caff005a355830c374754d32868",
  title: "Decades",
  color: "#C39687"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f",
  title: "Hip-Hop",
  color: "#BA5D07"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
  title: "Dance/Electronic",
  color: "#503750"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafdad1281e13697e8d8cf8f347",
  title: "Student",
  color: "#AF2896"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
  title: "Chill",
  color: "#D84000"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f",
  title: "Gaming",
  color: "#E8115B"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
  title: "K-pop",
  color: "#148A08"
},
{
  src: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
  title: "Workout",
  color: "#777777"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafe760702de052fbefea27064a",
  title: "RADAR",
  color: "#A56752"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005caf9ed6e364e8839210dc4dbff7",
  title: "Equal",
  color: "#121212"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc",
  title: "Fresh Finds",
  color: "#121212"
},
{
  src: "https://i.scdn.co/image/ab67fb8200005cafda4c849095796a9e5d2c4ddb",
  title: "Rock",
  color: "#006450"
}
];

const playIcon_BarsHtml=`<span id="nowPlayingPlayIcon"class="material-symbols-outlined">
play_arrow
</span>
<div class="bars">
  <div class="bars__item"></div>
  <div class="bars__item"></div>
  <div class="bars__item"></div>
  <div class="bars__item"></div>
</div>`;


const sideBarCollapsedStyling = `
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
#searchicons-svg{
  font-size:24px;
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

#libraryicon,#homeicon{
  padding-left:29%;
}
#searchicon{
  padding-left:33%;
  padding-bottom:5%;
}
.mainwindow{
  width:95vw;
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
  .mainNav{
    width:95.4vw;
  }
  nav{
    padding-left:1.5%;
  }
 `;

const musicPlayerOpenedStyling = `.fullScreenPlayer{
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

  `;

const mainWindowBg = [
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(13, 54, 22))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 29, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(85, 28, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(84, 85, 28))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(28, 78, 85))",
  "linear-gradient(to top, rgba(18,18,18,1) 40%, rgb(32, 32, 32))",
];

const playlist = [
  "tracks/satranga.mp3",
  "tracks/chaleya.mp3",
  "tracks/4.10.mp3",
  "tracks/kesariya.mp3",
  "tracks/wohRaat.mp3",
  "tracks/thodaThodaPyaar.mp3",
  "tracks/malang.mp3",
  "tracks/duniyaa.mp3",
  "tracks/labonKo.mp3",
  "tracks/lovely.mp3",
  "tracks/stay.mp3",
  "tracks/jannateinKahan.mp3",
  "tracks/sometimes.mp3",
  "tracks/seedheMaut.mp3",
  "tracks/tuHaiKahan.mp3",
  "tracks/arjanVailly.mp3",
  "tracks/ranjha.mp3",
  "tracks/ratanLambiyan.mp3",
  "tracks/manjha.mp3",
  "tracks/vigdiyanHeraan.mp3",
  "tracks/yeTuneKyaKiya.mp3",
  "tracks/phirMohobbat.mp3",
  "tracks/hothonSeChulo.mp3",
  "tracks/noMercy.mp3",
  "tracks/blowingUp.mp3",
  "tracks/prarthna.mp3",
  "tracks/athmaRama.mp3",
  "tracks/ben10.mp3",
];

let songDetails =[
  {
    src: "https://i.scdn.co/image/ab67616d00001e02021d7017f73387b008eab271",
    name: "Satranga",
    description: "Arijit Singh, Shreyas Puranik",
    fullName: 'Satranga (From "Animal")',
    album: "Animal"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2",
    name: "Chaleya",
    description: "Arijit Singh, Anirudh Ravichander",
    fullName: 'Chaleya (From "Jawan")',
    album: "Jawan"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02333548f23189291acdee787d",
    name: "4.10",
    description: "DIVINE, Lal Chand Yamla Jatt",
    fullName: "4.10",
    album: "4.10"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62",
    name: "Kesariya",
    description: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    fullName: 'Kesariya ("From Bhramastra")',
    album: "Bhramastra"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028eeefdbfd14ad10510ba6c86",
    name: "Woh Raat",
    description: "Raftaar, KR$NA",
    fullName: "Woh Raat",
    album: "Woh Raat"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02bb52f4d0546656ebcf9ed925",
    name: "Thoda Thoda Pyaar",
    description: "Nilesh Ahuja, Stebin Ben",
    fullName: "Thoda Thoda Pyaar",
    album: "Thoda Thoda Pyaar"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0299655481a2151203ed89351d",
    name: "Malang(Title Track)",
    description: "Ved Sharma, Kunal Vermaa",
    fullName: 'Malang (From "Malang")',
    album: "Malang"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e027b93fd8b0ade33ceb9d536de",
    name: "Duniyaa",
    description: "Akhil, Dhvani Bhanushali",
    fullName: 'Duniya (From "Lukka Chuppi")',
    album: "Lukka Chuppi"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f",
    name: "Labon Ko",
    description: "Pritam, KK",
    fullName: "Labon Ko",
    album: "Labon Ko"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c",
    name: "Lovely (with Khalid)",
    description: "Billi Eilish, Khalid",
    fullName: "Lovely (with Khalid)",
    album: "Lovely (with Khalid)"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
    name: "STAY (with Justin Bieber)",
    description: "The Kid LARAOI,Justin Bieber",
    fullName: "STAY (with Justin Bieber)",
    album: "STAY (with Justin Bieber)"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27371da5e89467bd75d2ed9f1fa",
    name: "Jannatein Kahan",
    description: "Pritam, KK",
    fullName: "Jannatein Kahan",
    album: "Jannatein Kahan"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e029ad4c5b52effc242984def78",
    name: "Sometimes",
    description: "AUR",
    fullName: "Sometimes",
    album: "Sometimes"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02f5a66f7c0126268d45cda1b6",
    name: "Namastute",
    description: "Seedhe Maut",
    fullName: "Namastute",
    album: "Namastute"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2733fb3fb3086a40c2c5062501d",
    name: "Tu Hai Kahan",
    description: "AUR",
    fullName: "Tu Hai Kahan",
    album: "Tu Hai Kahan"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
    name: "Arjan Vailly",
    description: "Manan Bharadwaj, Bhupinder Babbal",
    fullName: 'Arjan Vailly (From "ANIMAL")',
    album: "ANIMAL"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0209426d9ae9d8d981735ebc5e",
    name: "Ranjha",
    description: "B Praak, Jasleen Royal",
    fullName: 'Ranjha (From "Shershaah")',
    album: "Shershaah"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01",
    name: "Ratan Lambiyan",
    description: "Tanishq Bagchi, Jubin Nautiyal",
    fullName: 'Ratan Lambiyan (From "Shershaah")',
    album: "Shershaah"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02dea88e870d30a4da51065bf5",
    name: "Manjha",
    description: "Vishal Mishra",
    fullName: "Manjha",
    album: "Manjha"
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e0253838c41f300a38bef3b05e9",
    name: "Vigdiyan Heraan",
    description: "Yo Yo Honey Singh",
    fullName: 'Vigdiyan Heraan ("From Honey 3.0")',
    album: "Honey 3.0",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02fe77bd21eb38ff74b5f21524",
    name: "Ye Tune Kya Kiya",
    description: "Pritam, Javed Bashir",
    fullName: 'Ye Tune Kya Kiya',
    album: "Once Upon A Time In Mumbaai Dobara",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e022432edc97b465e6db54d356b",
    name: "Phir Mohobbat",
    description: "Md.Irfan, Arijit Singh, Saim Bhat",
    fullName: 'Phir Mohobbat (From "Murder 2")',
    album: "Murder 2"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273b5eba194cd2f743be9a0f87b",
    name: "Hothon Se Chu Lo Tum",
    description: "Jagjit Singh",
    fullName: "Hothon Se Chu Lo Tum",
    album: "Hothon Se Chu Lo Tum"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b27300221eaa504574172c617504",
    name: "No Mercy",
    description: "Deep Kalsi, Raftaar, KR$NA, KARMA",
    fullName: "No Mercy",
    album: "No Mercy"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273f8c35169d5bab01327f87e5a",
    name: "Blowing Up",
    description: "KR$NA",
    fullName: "Blowing Up",
    album: "Blowing Up"
  },
  {
    src: "https://i.scdn.co/image/ab67616d0000b273843596e5677ecc71fee1c340",
    name: "Prarthna",
    description: "KR$NA",
    fullName: "Prarthna",
    album: "Prarthna"
  },
  {
    src: "https://lh3.googleusercontent.com/PvuDzAO7HEl3SzakzJhb0fmWGAMuJmNQt_BVeKoS9Kivin_io0qSt1SrxS8iGE7y66wA49zGH5n0twWg",
    name: "Athma Rama",
    description: "Agam Aggrawal",
    fullName: "Athma Rama",
    album: "Athma Rama"
  },
  {
    src: "https://i.scdn.co/image/ab67656300005f1f4de6e598c36e4476af554a64",
    name: "BEN 10-Theme Song",
    description: "Sunidhi Chauhan",
    fullName: "BEN 10-Theme Song",
    album: "BEN 10-Theme Song"
  },
    {
    src: "https://i.scdn.co/image/ab67616d00001e026e28d74c8eddc32542ce8924",
    name: "Humka Peeni Hai",
    description: "Wajid, Master Saleem, Shabab Sabri",
   fullName: `${this.name}From("${this.album}")`,
    album: "Dabangg"
  }
];


const songCardInnerHtml=`
<div class="songCard">
          <span id="cardplayicon" class="material-symbols-outlined">
            play_arrow </span>
            <img src=""
            class="cardImage" />
          <p class="songName"></p>
          <div style="margin: 0;overflow: hidden;width:40vw;height:6vw;background-color:transparent;">
          <p class="songDescription">
           
          </p>
        </div>
        </div>`;

