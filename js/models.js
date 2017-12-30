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
    this.lifespan = 70;
    this.timeSpent = 0;
    this.paused = false;
  }

}
