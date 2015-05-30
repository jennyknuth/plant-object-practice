var plant = {
  stage: "a seed",
  height: 0,
  foodCounter: 0,
  waterCounter: 0,
  overFed: false,
  overWatered: false,
  blooming: false,

  move: function(place){
    console.log ("you moved your plant to " + place);
    if (place === "sun" && plant.stage === "a plant" && plant.height > 0){
      plant.blooming = true;
    }
    else {
      plant.blooming = false;
    }
    console.log(plant.status());
  },

  water: function(){
    console.log ("you watered your plant");
    if (plant.overWatered && plant.overFed){
      plant.stage = "dead";
    }
    else if (plant.height >= 12){
    plant.height = 12;
    plant.waterCounter++;
      if (plant.waterCounter >= 3){
        plant.overWatered = true;
      }
    }
    else if (plant.stage === "a seed"){
      plant.stage = "a plant";
    }
    else if (plant.stage === "a plant"){
      plant.height += 2;
    }
  },

  feed: function(food){
    console.log ("you fed your plant");
    if (plant.overWatered && plant.overFed){
      plant.stage = "dead";
    }
    else if (food === "antifreeze"){
      plant.stage = "dead";
    }
    else if (plant.height >= 12){
      plant.height = 12;
      plant.foodCounter++;
        if (plant.foodCounter >= 3){
          plant.overFed = true;
        }
    }
    else if (food === "plant food"){
      plant.height += 1;
    }
  },
  
  status: function(){
    if (plant.blooming === true){
      return "you have " + plant.stage + ", it is " + plant.height + " inches tall and has flowers"
    }
    if (plant.stage === "dead"){
      return "Your plant is dead."
    }
    else {
      return "you have " + plant.stage + ", it is " + plant.height + " inches tall and has no flowers"
    }
  }
}

console.log(plant.status());
plant.water();
console.log(plant.status());
plant.water();
console.log(plant.status());
plant.feed("plant food");
console.log(plant.status());
plant.feed();
console.log(plant.status());
plant.water();
console.log(plant.status());
plant.water();
console.log(plant.status());
plant.feed("plant food");
console.log(plant.status());
plant.feed("plant food");
console.log(plant.status());
plant.water();
plant.water();
plant.water();
plant.water();
plant.water();
plant.move("sun");
plant.water();
plant.feed();
plant.feed();
plant.move("porch");
plant.feed();
plant.feed();
console.log(plant.status());
console.log(plant.status());
