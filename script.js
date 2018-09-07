// 1 task

function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype.fullName = function() {
	return this.firstName + this.lastName;
}
var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName();

// 2 task - toString()
Person.prototype.toString = function () {
  return this.firstName + ' ' + this.lastName + ',' + 'Favorite Color' + ':' + this.favoriteColor +
  ',' + ' Favorite Number : ' + this.favoriteNumber;
}

// 3 task 

Person.prototype.addToFamily = function(personObj) {
  if (personObj instanceof Person && this.family.indexOf(personObj) === -1) {
  	this.family.push(personObj);
  }
  return this.family.length;
}
