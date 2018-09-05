var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly  
  this.setFullName = (firstAndLast) => {
    this.fullName = firstAndLast
  }

  this.getFullName = function () {
    return this.fullName
  }

  this.getFirstName = function (first) {
    return first
  }

  this.setFirstName = (first) => {
    this.first = first
  }

  this.getLastName = function() {
    return this.fullName
  }

  this.setLastName = (firstAndLast) => {
    this.fullName = firstAndLast
  }
}

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

console.log(Object.keys(bob).length)
console.log(bob.getFirstName())

/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/
