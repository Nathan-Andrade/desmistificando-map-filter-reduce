const pets = [
  {
    name: 'rex',
    type: 'Dog',
    age: 5
  },
  {
    name: 'Miau',
    type: 'cat',
    age: 5
  },
  {
    name: 'glup',
    type: 'fish',
    age: 2
  }
]

const newPets = pets.filter((pet) => {
  return pet.age < 5
})

console.log(pets)
console.log(newPets)