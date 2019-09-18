'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
}

// console.log(createMyObject());

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

function keyDeleter(obj) {
  // delete foo and bar
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentReport(data) {
  let results = [];
  data.forEach(item => {
    results.push(`${item.name}: ${item.grade}`);
  });
  return results;
}

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer School');
  return students;
}