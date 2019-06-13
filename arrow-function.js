var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// --------------normal function declaration---------------

elements.map(function(element) {
  console.log(element.length);
});

// --------------arrow function--------------------
elements.map(element => {
  console.log(element.length);
});

// -----------------only one paramenter------- remove the surronding paranthesies---------------

elements.map(element => {
  console.log(element.length);
});

//---------------- when the only statement in an arrow function is return remove surronding curly braces
// element.map(element => element.length);
