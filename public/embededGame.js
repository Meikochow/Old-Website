let showGame = true; 
let embededGame = $("#embededGame");
let gameControl = $("#gameControl")
function displayEmbededGame (){
    if(showGame){
      embededGame.css({'z-index':'1','transitionDuration':'1s','transform':'translate(0%,0%)','height':'470px'})
       $('.rightSide').css({'height':'800px'});
      $('#topImage').css({'height':'800px','background-size':'160%','transition-duration':'1s'});
    gameControl.text('Close Game');
    gameControl.css({'background':'black','color':'white'});
    gameControl.prop("disabled",true);
    showGame=false;
      setTimeout(()=>{
        embededGame.css({'opacity':'1'});
        gameControl.prop("disabled",false);
      },1000);
    }else{
    embededGame.css({'opacity':'0'})
    gameControl.css({'background':'','color':''});
    gameControl.text('Challenge the software?');
    gameControl.prop("disabled",true);
    showGame=true;
      setTimeout(()=>{$('.rightSide').css({'height':'326px'});
                      embededGame.css({'z-index':'-1','transform':'translate(0%,-100%)','height':'10px'})
                     $('#topImage').css({'height':'90vh','background-size':'100%','transition-duration':'0.3s'});
                      gameControl.prop("disabled",false);
                     },1000);
      
    }
  }
