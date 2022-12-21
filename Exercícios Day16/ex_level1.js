const student = {
    firstName:'Murillo',
    lastName:'Vinícius',
    age:20,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'WordPress' ]
  }


console.log('=====OUTRA QUESTÃO=====')

const jsonSkills = JSON.stringify(student, ['skills'], 2)
console.log(jsonSkills)


console.log('=====OUTRA QUESTÃO=====')

const jsonAge = JSON.stringify(student, ['age'], 2)
console.log(jsonAge)

console.log('=====OUTRA QUESTÃO=====')

const jsonIsMarried = JSON.stringify(student, ['isMarried'], 2)
console.log(jsonIsMarried)

console.log('=====OUTRA QUESTÃO=====')

const jsonStudent = JSON.stringify(student, undefined, 2)
console.log(jsonStudent)
