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

for (let key in metasyntactic) {
  console.log(`${key}: ${metasyntactic[key]}`);
}