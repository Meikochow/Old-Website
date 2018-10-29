let showGame = true; 
let embededGame = $("#embededGame");
let gameControl = $("#gameControl")
function displayEmbededGame (){
    if(showGame){
      embededGame.css({'z-index':'1','transitionDuration':'1.5s','transform':'translate(0%,0%)'})
//'display':'block'
      $('.rightSide').css({'height':'800px'});
      
      
    gameControl.text('Close Game');
    gameControl.css({'background':'black','color':'white'});
    showGame=false;
      setTimeout(()=>{embededGame.css({'opacity':'1'})},1000);
    }else{
    embededGame.css({'opacity':'0'})
//'display':'none'
      
      
    gameControl.css({'background':'','color':''});
    gameControl.text('Challenge the software?');

    showGame=true;
      setTimeout(()=>{$('.rightSide').css({'height':'300px'});embededGame.css({'z-index':'-1','transform':'translate(0%,-100%)'})},1000);
      
    }
  }