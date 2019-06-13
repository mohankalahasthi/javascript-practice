var name = "Glamour";
var obj1 = {
  name: "Pulsar",
  bike: bike
};
var obj2 = {
  name: "Gixxer",
  bike: bike
};

function bike() {
  console.log(this.name);
}

bike();
obj1.bike();
obj2.bike();

// method with calling function  // it is expalicit binding of this key word

function car() {
  console.log(this.model);
}

var model = "honda";
var carObj = {
  model: "spark",
  name: "chevorlet"
};
car.call(carObj);

// this key word another example 2

const lion = {
  dietType: "meat",
  makeSound() {
    console.log("roarrrs");
  },
  diet() {
    // console.log(dietType);        the scope of the dietType is out side so it shows not defined error
    console.log(this.dietType); // using this leyword
  }
};
lion.makeSound();
lion.diet();

// this key word another example 3

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${
      this.energyLevel
    }.`;
  }
};
console.log(robot.provideInfo());
// or
robot.provideInfo();
