const student = {
    firstName:'Murillo',
    lastName:'Vinícius',
    age:20,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'WordPress']
}


const jsonStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2)
console.log(jsonStudent)

