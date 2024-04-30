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
  "tracks/humkaPeeniHai.mp3",
  "tracks/miAmor.mp3",
  "tracks/tujheSochtaHun.mp3",
  "tracks/chaudhary.mp3",
  "tracks/tereNainoMein.mp3",
  "tracks/bulleya.mp3",
  "tracks/wohBaarishein.mp3",
];

let songDetails =[
  {
    album: "Animal",
    description: "Arijit Singh, Shreyas Puranik",
    duration: "04:31",
    fullName: "Satranga (From \"Animal\")",
    name: "Satranga",
    src: "https://i.scdn.co/image/ab67616d00001e02021d7017f73387b008eab271"
  },
  {
    album: "Jawan",
    description: "Arijit Singh, Anirudh Ravichander",
    duration: "03:08",
    fullName: "Chaleya (From \"Jawan\")",
    name: "Chaleya",
    src: "https://i.scdn.co/image/ab67616d0000b27360dbbb589dff0c57a3a4ffb2"
  },
  {
    album: "4.10",
    description: "DIVINE, Lal Chand Yamla Jatt",
    duration: "02:49",
    fullName: "4.10",
    name: "4.10",
    src: "https://i.scdn.co/image/ab67616d00001e02333548f23189291acdee787d"
  },
  {
    album: "Bhramastra",
    description: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    duration: "04:28",
    fullName: "Kesariya (From \"Bhramastra\")",
    name: "Kesariya",
    src: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62"
  },
  {
    album: "Woh Raat",
    description: "Raftaar, KR$NA",
    duration: "03:12",
    fullName: "Woh Raat",
    name: "Woh Raat",
    src: "https://i.scdn.co/image/ab67616d00001e028eeefdbfd14ad10510ba6c86"
  },
  {
    album: "Thoda Thoda Pyaar",
    description: "Nilesh Ahuja, Stebin Ben",
    duration: "04:32",
    fullName: "Thoda Thoda Pyaar",
    name: "Thoda Thoda Pyaar",
    src: "https://i.scdn.co/image/ab67616d00001e02bb52f4d0546656ebcf9ed925"
  },
  {
    album: "Malang",
    description: "Ved Sharma, Kunal Vermaa",
    duration: "04:47",
    fullName: "Malang (From \"Malang\")",
    name: "Malang(Title Track)",
    src: "https://i.scdn.co/image/ab67616d00001e0299655481a2151203ed89351d"
  },
  {
    album: "Lukka Chuppi",
    description: "Akhil, Dhvani Bhanushali",
    duration: "03:42",
    fullName: "Duniya (From \"Lukka Chuppi\")",
    name: "Duniyaa",
    src: "https://i.scdn.co/image/ab67616d00001e027b93fd8b0ade33ceb9d536de"
  },
  {
    album: "Labon Ko",
    description: "Pritam, KK",
    duration: "05:43",
    fullName: "Labon Ko",
    name: "Labon Ko",
    src: "https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f"
  },
  {
    album: "Lovely (with Khalid)",
    description: "Billi Eilish, Khalid",
    duration: "03:20",
    fullName: "Lovely (with Khalid)",
    name: "Lovely (with Khalid)",
    src: "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c"
  },
  {
    album: "STAY (with Justin Bieber)",
    description: "The Kid LARAOI,Justin Bieber",
    duration: "02:21",
    fullName: "STAY (with Justin Bieber)",
    name: "STAY (with Justin Bieber)",
    src: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5"
  },
  {
    album: "Jannatein Kahan",
    description: "Pritam, KK",
    duration: "03:48",
    fullName: "Jannatein Kahan (From \"Jannat 2\")",
    name: "Jannatein Kahan",
    src: "https://i.scdn.co/image/ab67616d0000b27371da5e89467bd75d2ed9f1fa"
  },
  {
    album: "Sometimes",
    description: "AUR",
    duration: "03:16",
    fullName: "Sometimes",
    name: "Sometimes",
    src: "https://i.scdn.co/image/ab67616d00001e029ad4c5b52effc242984def78"
  },
  {
    album: "Namastute",
    description: "Seedhe Maut",
    duration: "02:00",
    fullName: "Namastute",
    name: "Namastute",
    src: "https://i.scdn.co/image/ab67616d00001e02f5a66f7c0126268d45cda1b6"
  },
  {
    album: "Tu Hai Kahan",
    description: "AUR",
    duration: "04:23",
    fullName: "Tu Hai Kahan",
    name: "Tu Hai Kahan",
    src: "https://i.scdn.co/image/ab67616d0000b2733fb3fb3086a40c2c5062501d"
  },
  {
    album: "ANIMAL",
    description: "Manan Bharadwaj, Bhupinder Babbal",
    duration: "03:02",
    fullName: "Arjan Vailly (From \"ANIMAL\")",
    name: "Arjan Vailly",
    src: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9"
  },
  {
    album: "Shershaah",
    description: "B Praak, Jasleen Royal",
    duration: "03:48",
    fullName: "Ranjha (From \"Shershaah\")",
    name: "Ranjha",
    src: "https://i.scdn.co/image/ab67616d00001e0209426d9ae9d8d981735ebc5e"
  },
  {
    album: "Shershaah",
    description: "Tanishq Bagchi, Jubin Nautiyal",
    duration: "03:50",
    fullName: "Ratan Lambiyan (From \"Shershaah\")",
    name: "Ratan Lambiyan",
    src: "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01"
  },
  {
    album: "Manjha",
    description: "Vishal Mishra",
    duration: "03:11",
    fullName: "Manjha",
    name: "Manjha",
    src: "https://i.scdn.co/image/ab67616d00001e02dea88e870d30a4da51065bf5"
  },
  {
    album: "Honey 3.0",
    description: "Yo Yo Honey Singh",
    duration: "03:17",
    fullName: "Vigdiyan Heraan (From Honey 3.0)",
    name: "Vigdiyan Heraan",
    src: "https://i.scdn.co/image/ab67616d00001e0253838c41f300a38bef3b05e9"
  },
  {
    album: "Once Upon A Time In Mumbaai Dobara",
    description: "Pritam, Javed Bashir",
    duration: "05:14",
    fullName: "Ye Tune Kya Kiya",
    name: "Ye Tune Kya Kiya",
    src: "https://i.scdn.co/image/ab67616d00001e02fe77bd21eb38ff74b5f21524"
  },
  {
    album: "Murder 2",
    description: "Md.Irfan, Arijit Singh, Saim Bhat",
    duration: "05:30",
    fullName: "Phir Mohobbat (From \"Murder 2\")",
    name: "Phir Mohobbat",
    src: "https://i.scdn.co/image/ab67616d00001e022432edc97b465e6db54d356b"
  },
  {
    album: "Hothon Se Chu Lo Tum",
    description: "Jagjit Singh",
    duration: "04:57",
    fullName: "Hothon Se Chu Lo Tum",
    name: "Hothon Se Chu Lo Tum",
    src: "https://i.scdn.co/image/ab67616d0000b273b5eba194cd2f743be9a0f87b"
  },
  {
    album: "No Mercy",
    description: "Deep Kalsi, Raftaar, KR$NA, KARMA",
    duration: "03:38",
    fullName: "No Mercy",
    name: "No Mercy",
    src: "https://i.scdn.co/image/ab67616d0000b27300221eaa504574172c617504"
  },
  {
    album: "Blowing Up",
    description: "KR$NA",
    duration: "04:07",
    fullName: "Blowing Up",
    name: "Blowing Up",
    src: "https://i.scdn.co/image/ab67616d0000b273f8c35169d5bab01327f87e5a"
  },
  {
    album: "Prarthna",
    description: "KR$NA",
    duration: "03:25",
    fullName: "Prarthna",
    name: "Prarthna",
    src: "https://i.scdn.co/image/ab67616d0000b273843596e5677ecc71fee1c340"
  },
  {
    album: "Athma Rama",
    description: "Agam Aggrawal",
    duration: "05:24",
    fullName: "Athma Rama",
    name: "Athma Rama",
    src: "https://lh3.googleusercontent.com/PvuDzAO7HEl3SzakzJhb0fmWGAMuJmNQt_BVeKoS9Kivin_io0qSt1SrxS8iGE7y66wA49zGH5n0twWg"
  },
  {
    album: "BEN 10-Theme Song",
    description: "Sunidhi Chauhan",
    duration: "01:01",
    fullName: "BEN 10-Theme Song",
    name: "BEN 10-Theme Song",
    src: "https://i.scdn.co/image/ab67656300005f1f4de6e598c36e4476af554a64"
  },
  {
    album: "Dabangg",
    description: "Wajid, Master Saleem, Shabab Sabri",
    duration: "05:15",
    fullName: "Humka Peeni Hai (From \"Dabangg\")",
    name: "Humka Peeni Hai",
    src: "https://i.scdn.co/image/ab67616d00001e026e28d74c8eddc32542ce8924"
  },
  {
    album: "Mi Amor",
    description: "Sharn, 40k, The Paul",
    duration: "03:23",
    fullName: "Mi Amor",
    name: "Mi Amor",
    src: "https://i.scdn.co/image/ab67616d00001e02050aa2ba1ea0f6b96f4de231"
  },
  {
    album: "Jannat 2",
    description: "Pritam, KK",
    duration: "05:13",
    fullName: "Tujhe Sochta Hoon (From \"Jannat 2\")",
    name: "Tujhe Sochta Hoon",
    src: "https://i.scdn.co/image/ab67616d00001e0271da5e89467bd75d2ed9f1fa"
  },
  {
    album: "Coke Studio",
    description: "Amit Triwedi, Mame Khan",
    duration: "07:00",
    fullName: "Chaudhary",
    name: "Chaudhary",
    src: "https://i.scdn.co/image/ab67616d00001e0227c59173f1d904947229613f"
  },
  {
    album: "Tere Nainon Mein",
    description: "The Bilz & Kashif",
    duration: "04:04",
    fullName: "Tere Nainon Mein",
    name: "Tere Nainon Mein",
    src: "https://i.scdn.co/image/ab67616d00001e02200b79ddaca34de0acf74946"
  },
  {
    album: "Sultan",
    description: "Vishal-Shekhar, Papon, Irshad Kamil",
    duration: "05:57",
    fullName: "Bulleya From(\"Sultan\")",
    name: "Bulleya",
    src: "https://i.scdn.co/image/ab67616d00001e02b2abfd2439b6c23c3664df87"
  },
  {
    album: "Woh Baarishein",
    description: "Arjun Kanungo",
    duration: "03:52",
    fullName: "Woh Baarishein",
    name: "Woh Baarishein",
    src: "https://i.scdn.co/image/ab67616d00001e02aa94e9741ecf418b89d5c339"
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
//------------------
       