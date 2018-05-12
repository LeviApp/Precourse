// Do not change any of the function names

  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class

function createUserClass() {

  const User = function (newuser){

    this.username = newuser.username;
    this.name = newuser.name;
    this.email = newuser.email;
    this.password = newuser.password;
  };

User.prototype['sayHi'] = function () { return 'Hello, my name is' + this [name];
  };

  return User;
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function (){
    return 'Hello World!';
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
};
}

  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse

function addReverseString() {

  String.prototype.reverse = function () {
    let Rainbow = this.split ('').reverse().join('')
    
    
    ;

    return Rainbow;
  };

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
