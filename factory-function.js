const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  };
};

const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");

console.log(ghost.scare());

// property value shortcut  no need to assigned key to the property

function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    }
  };
}
const newRobot = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// Destructured Assignment

const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite"
  }
};

let name = vampire.name;
console.log(name);

//  or
let { preferences } = vampire;

console.log(preferences.day);
