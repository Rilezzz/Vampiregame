const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬'
]



function makeAHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  let randomHunter = people[randomNumber]
  randomHunter.isHunter = true
  console.log('random person', randomHunter);
}

function randomLocation() {
  people.forEach(p => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    let randomLocation = locations[randomNumber]
    p.location = randomLocation
  })
  // console.log('random location', randomNumber);
  // console.log('random location', randomPerson);
  // return randomPerson
}


function drawPeople() {
  // debugger
  // for (let i = 0; i < people.length; i++) {
  //   let location = randomLocation()
  //   let person = people[i];
  //   console.log(person.picture);
  //   document.getElementById(location).innerText += person.picture
  // }
  let peopleString = ''
  locations.forEach(l => {
    // TODO look at ALL the locations
    // TODO while looking at locations, filter out the people who belong to each one
    // TODO take my filtered people and add it to a string
    // TODO find my HTML elem and inject my people string
    let peopleAtLocationArray = people.filter(p => p.location == l)
    peopleAtLocationArray.forEach(p => {
      peopleString = p.picture
      console.log(peopleString);
      document.getElementById(`${l}`).innerText = peopleString
    })

  })
}


makeAHunter()
randomLocation()
drawPeople()