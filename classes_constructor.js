class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
    }
  }
//class instance create Now, we’re ready to create class instances.
//  An instance is an object that contains the property names and methods of a class,
//  but with unique property values.

  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular') ;

console.log(surgeonCurry.name);
console.log(surgeonCurry.department);



// if we assign asame class name we get an error 
// class Surgeon {
//   constructor(name, department){
//     this.name = name;
//     this.department = department;
//   }
// }

// const surgeonDurant = new Surgeon('Durant','Orthopedics');

// console.log(surgeonDurant.name);
// console.log(surgeonDurant.department);
