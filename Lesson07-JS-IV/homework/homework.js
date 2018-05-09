// Do not change any of the function names

function makeCat(name, age) {
  let Cat = {
    name: 'Chuckles',
    age: 2,
  };
  Cat['name'] = name;
  Cat['age'] = age;
  Cat.protype.meow = function () {
    return 'Meow!';
  };
  return Cat;
}
// create a new object with a name property with the value set to the name argument
// add an age property to the object with the value set to the age argument
// add a method called meow that returns the string 'Meow!'
// return the object


// add the property to the object with a value of null
// return the object
// note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)

function addProperty(object, property) {

  object[property] = null;

  return object;
}


function invokeMethod(object, method); {}


// method is a string that contains the name of a method on the object
// invoke this method
// nothing needs to be returned

function multiplyMysteryNumberByFive(mysteryNumberObject) {

  return mysteryNumberObject.mysteryNumber * 5;
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  let newObj = object;
  delete newObj[property];
  return newObj;
  // remove the property from the object
  // return the object
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object

  let nUser = {
    name: 'Bob',
    email: 'Bob@gmail.com',
    password: '1!2@3#'
  };
  return nUser;
}

function hasEmail(user) {

  if (user.email === null) {
    return false;
  } else {
    return true;
  }

}

// return true if the user has a value for the property 'email'
// otherwise return false

function hasProperty(object, property) {

  {
    for (let key in object) {
      if (key === property) {
        return true;
      }
    }

    return false;
    // return true if the object has the value of the property argument
    // property is a string
    // otherwise return false
  }
}



function verifyPassword(user, password) {

  {
    for (let key in user) {
      if (user[key] === password) {
        return true;
      }
    }
  }

  return false;
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
}

function updatePassword(user, newPassword) {

  user['password'] = newPassword;

  return user;
}

// replace the existing password on the user object with the value of newPassword
// return the object



function addFriend(user, newFriend) {


  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {

  {
    for (let i = 0; i < users.length; i++) {
      users[i].isPremium = true;
    }
  }
  return users;
}

// users is an array of user objects.
// each user object has the property 'isPremium'
// set each user's isPremium property to true
// return the users array


function sumUserPostLikes(user) {
  let sum = 0; {
    for (let i = 0; i < user.posts.length; i++)
      if (i < user.posts.length) {
        sum = sum + user.posts[i].likes;
      }

  }
  return sum;


  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
}


// user has an array property called 'posts'
// posts is an array of post objects
// each post object has an integer property called 'likes'
// sum together the likes from all the post objects
// return the sum


function addCalculateDiscountPriceMethod(storeItem) {

  storeItem.price = storeItem.calculateDiscountPrice();

  return storeItem.price;
}



// add a method to the storeItem object called 'calculateDiscountPrice'
// this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
// the method then subtracts the discount from the price and returns the discounted price
// return storeItem at the end of the function
// example: 
// price -> 20
// discountPercentage -> .2
// discountPrice = 20 - (20 * .2)
// add a method to the storeItem object called 'calculateDiscountPrice'
// this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
// the method then subtracts the discount from the price and returns the discounted price
// return storeItem at the end of the function
// example: 
// price -> 20
// discountPercentage -> .2
// discountPrice = 20 - (20 * .2)

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};