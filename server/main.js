import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit(game => {

  game.set("score", 0);
  
  // game.players.forEach((player, i) => {
  //   player.set("avatar", `/avatars/jdenticon/${player._id}`);
  //   player.set("score", 0);
  // });

  _.times(50, i => {
    // calculate the two stories with the fewest ratings (if tie, random)

    const round = game.addRound();
    round.addStage({
      name: "response",
      displayName: "Choose a better love story",
      durationInSeconds: 86400
    });
  });
});
