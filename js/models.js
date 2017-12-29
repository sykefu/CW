<!-- test -->
class kiCultivation{

  constructor(){
    this.ki = 0;
    this.lifespan = 70;
    this.Rank = "mortal";

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
