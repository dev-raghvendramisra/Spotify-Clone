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



 
  