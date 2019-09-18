'use strict';

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

people.forEach(obj => {
  console.log(`${obj.jobTitle} ${obj.name} ${
    obj.boss ? `reports to ${obj.boss}.` : 'doesn\'t report to anybody.'}`);
});