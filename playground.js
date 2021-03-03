//class definition
class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

//class instantaniation
const vikki = new Developer('Vikki', 'Chan');
//console.log(vikki.getName());

//another class instantiation
const dennis = new Developer('Dennis', 'Wieruch');
//console.log(dennis.getName());

function getAlphabet() {
  return ['a', 'b'];
}

// no array destructuring
const itemOne = getAlphabet()[0];
const itemTwo = getAlphabet()[1];

// array destructuring
const [firstItem, secondItem] = getAlphabet();
console.log(firstItem, secondItem);
