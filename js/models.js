<!-- test -->
class kiCultivation{

  constructor(){
    this.ki = 0;
    this.lifespan = 70;
    this.Rank = "mortal";
    this.cultivateClickValue = 1;

  }

}

class bodyCultivation{

}

class Game{
  constructor(){
    this.kiCultivation = new kiCultivation();
    this.timeSpent = 0;
    this.paused = false;
  }

}
