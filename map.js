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

/* 
* Map
* Retornar um novo array com am mesma quantidade de elementos
* que o array inicial 
*/

const petNames = pets.map((pet) => {
  return pet.name
})

console.log(petNames)