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

const menorQueCinco = (numero) => {
  return numero < 5
}

const newPets = pets.filter(({age}) => menorQueCinco(age))

console.log(pets)
console.log(newPets)