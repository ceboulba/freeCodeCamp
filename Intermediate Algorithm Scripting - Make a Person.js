var Person = function (firstAndLast) {

  let fullName = firstAndLast

  this.getFirstName = () => fullName.split(' ')[0]
  this.getLastName = () => fullName.split(' ')[1]
  this.getFullName = () => fullName

  this.setFirstName = (first) => {
    fullName = `${first} ${fullName.split(' ')[1]}`
  }

  this.setLastName = (last) => {
    fullName = `${fullName.split(' ')[0]} ${last}`
  }

  this.setFullName = (name) => { fullName = name }
}

var bob = new Person('Bob Ross')

console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.getFullName())
bob.setFirstName('Haskell')
console.log('get First', bob.getFirstName())
