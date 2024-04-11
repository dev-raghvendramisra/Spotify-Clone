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