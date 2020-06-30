// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
let kata1Heading = document.createElement('h1')
let kata2Heading = document.createElement('h1')
let kata3Heading = document.createElement('h1')
let kata4Heading = document.createElement('h1')
let kata5Heading = document.createElement('h1')
let kata6Heading = document.createElement('h1')
let kata7Heading = document.createElement('h1')

//Kata 1==========================================================
kata1Heading.append('Kata 1')
main.append(kata1Heading)

const activeUsers = users.filter(users => users.isActive === true)
main.append(JSON.stringify(activeUsers))

//Kata 2==========================================================
kata2Heading.append('Kata 2')
main.append(kata2Heading)

const emailAddresses = users.map(users => users.email)
main.append(JSON.stringify(emailAddresses))

//Kata 3===========================================================
kata3Heading.append('Kata 3')
main.append(kata3Heading)

const OVATIONcheck = users.some(users => users.company === 'OVATION')
main.append(OVATIONcheck)

//Kata 4=============================================================
kata4Heading.append('Kata 4')
main.append(kata4Heading)

const firstOver38 = users.find(users => users.age > 38)
main.append(JSON.stringify(firstOver38))

//Kata 5=============================================================
kata5Heading.append('Kata 5')
main.append(kata5Heading)

const firstOver38Active = users
    .filter(users => users.isActive === true)
    .find(users => users.age > 38)
main.append(firstOver38Active)

//Kata 6==============================================================
kata6Heading.append('Kata 6')
main.append(kata6Heading)

const ZENCObalance = users
    .filter(users => users.company === 'ZENCO')
    .map(users => users.balance)
main.append(ZENCObalance)

//Kata 7==============================================================
kata7Heading.append('Kata 7')
main.append(kata7Heading)

const fugiatAge = users
    .filter(users=> users.tags.includes('fugiat'))
    .map(users => users.age)
main.append(JSON.stringify(fugiatAge))