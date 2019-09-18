'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

let loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return this.water / this.flour * 100;
  }
};

//console.log(`${loaf.flour} and ${loaf.water}`);
//console.log(loaf.hydration());

let metasyntactic = {
  foo: 42,
  bar: 'foo',
  fum: 32,
  quux: 'some string',
  spam: 'eggs'
};

// for (let key in metasyntactic) {
//   console.log(`${key}: ${metasyntactic[key]}`);
// }

let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

//console.log(hobbit.meals[3]);

let john = {
  name: 'John Fritz',
  jobTitle: 'Grand High Poobah of Developer Relations'
};
let cynthia = {
  name: 'Cynthia Robertson',
  jobTitle: 'Recruiter',
  boss: 'John'
};
let dave = {
  name: 'Dave Hsu',
  jobTitle: 'Ops Manager',
  boss: 'John'
};
let gary = {
  name: 'Gary Richards',
  jobTitle: 'Translator',
  boss: 'Dave'
};

let people = [john, cynthia, dave, gary];

// people.forEach(obj => {
//   console.log(`${obj.name}: ${obj.jobTitle}`);
// });

// people.forEach(obj => {
//   console.log(`${obj.jobTitle} ${obj.name} ${
//     obj.boss ? `reports to ${obj.boss}.` : 'doesn\'t report to anybody.'}`);
// });


let cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decodeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map(word => {
      return cipher[word.charAt(0)] ? word.charAt(cipher[word.charAt(0)]) : ' ';
    })
    .join('');
}

// console.log(decodeWords('craft block argon meter bells brown croon droop'));


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(char) {
      let x = Math.max(this.attack - char.defense, 0); //my attack - opponents defense
      let y = Math.max(char.attack - this.defense, 0); // opponents attack - my defense
      return `Your opponent takes ${x} damage and you recieve ${y} damage.`;
    },
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'Elf', 'Rivendell', 9, 6));

// console.log(characters);

// characters.find(obj => obj.nickname === 'aragorn').describe();

let hobbits = characters.filter(object => object.race === 'Hobbit');
let strongChars = characters.filter(object => object.attack > 5);

/* Question: What if you wanted to equip a weapon for each character 
* and change how they are described?
* We could approach this in multiple ways 
* we could create a new factory function which calls the old factory function
* and pushes a new value onto the object and replaces its describe function
* with a new one that handles 'weapon'. And we would have to 
* Or we could adjust the old factory function. 
* An alternative (but not optimal) approach would be to
* define new properties for each individual object foo.weapon = (some weapon); foo.describe() {new describe}
* Or, we can have a function that takes the object and adds the weapon and updates the describe function.
*/

function addWeapon(char, weap) {
  char.weapon = weap; char.describe = function () {
    console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
  };
}

addWeapon(characters.find(char => char.nickname = 'gandalf'), 'a wizard staff');

// console.log(characters[0]);
// characters[0].describe();

function findOne (arr, query) {
  let mismatches = []; //will hold indices of items that don't match

  arr.forEach((obj, idx) => { //loop over all entries in arr
    for (let key in query){ //loop over all keys in query
      if(arr[idx][key] !== query[key]){ //check for mismatch
        mismatches.push(idx); //flag it
      }
    }
  });
  let result = null
  arr.forEach((obj, idx) => {
    if (!mismatches.includes(idx) && result === null) { //if it's not in mismatches, we're good
      result = arr[idx];
    }
  });
  return result;
}
console.log(findOne(HEROES, { id: 1 }));

console.log(findOne(HEROES, { id: 10 }));

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));

console.log(findOne(HEROES, { squad: 'Justice League' }));

console.log(findOne(HEROES, { squad: 'Justice League',  name: 'Wonder Woman'}));