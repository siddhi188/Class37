class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
  form.hide()
  textSize(25)
  text("GAME START!",150,100)
  //function to get each and every players name and distance
  Player.getPlayerinfo()
  //to check all players are present or not
  if(allPlayers !== undefined){
    /*
    GAME START
    player1 :  0
    Siddhi: 0
    Riddhi: 0
    player4: 0
    */
   var position = 150;
   //for-each loop
   for(var plr in allPlayers){
      /*
      player1 -> name, distance
      player2 -> name, distance
      */
     if(plr === "player"+ player.index)
        fill("Black")
      else
        fill("Red")
    position +=30;
    textSize(20)
    text(allPlayers[plr].name + " : "+ allPlayers[plr].distance, 150,position)
   }
  } 
  //keyCode === UP_ARROW
  if(keyDown(UP_ARROW) && player.index !== null){
    player.distance+=25;
    player.update()
  }

  }
}
