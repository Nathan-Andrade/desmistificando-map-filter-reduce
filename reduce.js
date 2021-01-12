const pets = [
  {
    type: 'Dog',
    name: 'rex',
    age: 5,
    weight: 1
  },
  {
    type: 'cat',
    name: 'Miau',
    age: 5,
    weight: 0.01
  },
  {
    type: 'fish',
    name: 'glup',
    age: 2,
    weight: 0.01
  },
  {
    type: 'Dog',
    name: 'rex',
    age: 5,
    weight: 1
  },
  {
    type: 'cat',
    name: 'Miau',
    age: 5,
    weight: 0.01
  },
  {
    type: 'fish',
    name: 'glup',
    age: 2,
    weight: 0.01
  }
]

const totalWeight = pets.reduce((total, pet) => {
  console.log(`Total: ${total}, Pet: ${pet.name}`)

  return total + pet.weight
}, 0)

console.log(totalWeight)