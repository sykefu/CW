<!-- test -->
class kiCultivation{

  constructor(){
    this.ki = 0;
    this.Rank = "mortal";
    this.cultivateClickValue = 1;
  }

}

class bodyCultivation{
  constructor(){
    this.strength = 0;
    this.Rank = "mortal";
    this.cultivateClickValue = 1;
  }
}

class Game{
  constructor(){
    this.kiCultivation = new kiCultivation();
    this.bodyCultivation = new bodyCultivation();
    this.lifespan = 70;
    this.timeSpent = -1;
    this.paused = false;
  }

}
