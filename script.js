
// opdracht A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
    
const findSpiderMan = superheroes.find((superheroes) => {
    return superheroes.name === 'Spiderman'
})
console.log(findSpiderMan) 

    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}



// opdracht B

const numbers = [1, 2, 3]

const doubleArrayValues = numbers.map ((numbers) => {
    return numbers * 2;
})

console.log(doubleArrayValues)
// result should be [2, 4, 6]



// opdracht C

const numbers = [1, 4, 3, 6, 9, 7, 11]

const containsNumberBiggerThan10 = numbers.some((number) => {
    return number > 10;
})

console.log(containsNumberBiggerThan10) 

// result should be true

//containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false 
// tried with Google!



// opdracht D

const countries = ['Canada', 'France','Germany',
'Italy','Japan','United Kingdom','United States']

const isItalyInTheGreat7 = countries.includes('Italy');

console.log(isItalyInTheGreat7)
// result should be true



// opdracht E

const numbers = [1, 4, 3, 6, 9, 7, 11];

const tenfold = numbers.map((numbers) => {
    return numbers * 10
})

console.log(tenfold)


// result should be [10, 40, 30, 60, 90, 70, 110]



// opdracht F

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 
    28, 101, 11, 77, 84, 98 ]

const isBelow100 = numbers.every((numbers) => {
    return numbers < 100
})

console.log(isBelow100)
// result should be: false



// opdracht G

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 
    28, 11, 77, 84, 98, 101, 206, 234]

const bigSum = numbers.reduce((currentTotal, numbers) => {
    return numbers + currentTotal
})

console.log(bigSum)
// result should be 1118



