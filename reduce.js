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

// calculando o peso total de todos os animais
//const totalWeight = pets.reduce((total, pet) => {
//  return total + pet.weight
//}, 0)

console.log(totalWeight)


//calculando a idade e o peso de todos os animais

//const totalWeight = pets.reduce((total, pet) => {
//  return {
//  totalAge: total.totalAge + pet.age,
//  totalWeight: total.totalWeight + pet.weight
//}
//}, {totalAge: 0, totalWeight: 0})
//console.log(totalWeight)


// verificando os cachorros

//const totalWeight = pets.reduce((total, pet) => {
// if (pet.type !== 'dog') return total
//
//  return total + pet.weight
//}, 0)
//console.log(totalWeight)


//encadeando tudo
const totalWeightDogs = pets
  .filter((pet) => {
    return pet.type === 'dog'
  })
  .reduce((total, pet) => {
    return total + pet.weight
  }, 0)

console.log(totalWeightDogs)