/*JSON significa JavaScript Object Notation e é bem parecido com um objeto
a diferença é que vai existir uma chave envolta de todo objeto
e as chaves, valores e nome do objetos estarão entre aspas duplas, ou seja, strings*/

//exemplo de sintax

{
    "Users"[
    {
        "firstName":"Murillo",
        "secondName":"Vinícius",
        "idade":20,
        "email":"murillovinicius13@hotmail.com"
    },
    {
        "firstName":"Letycia",
        "secondName":"Lins",
        "idade":18,
        "email":"Letyciagatinha@hotmail.com"
    },
    {
        "firstName":"Gustavo",
        "secondName":"Andrade",
        "idade":18,
        "email":"Gustavogigachad@hotmail.com"
    }
    ]
}

/* para converter de JSON para Objeto, é necessário utilizar o methodo JSON.parse()
exemplo: */

const userJson = `{
    "Users":[
    {
        "firstName":"Murillo",
        "secondName":"Vinícius",
        "idade":20,
        "email":"murillovinicius13@hotmail.com"
    },
    {
        "firstName":"Letycia",
        "secondName":"Lins",
        "idade":18,
        "email":"Letyciagatinha@hotmail.com"
    },
    {
        "firstName":"Gustavo",
        "secondName":"Andrade",
        "idade":18,
        "email":"Gustavogigachad@hotmail.com"
    }
    ]
}`

const userObj = JSON.parse(userJson) // convertendo para um Objeto
console.log(userObj)

const userObjt = JSON.parse(userJson, (chave, valor) => {
    let novoValor =
        typeof valor == 'string' && chave != 'email' ? valor.toUpperCase() : valor
    return novoValor
}) // nesse exemplo aqui, coloquei o primeiro e seguindo nome em letras maiusculas
console.log(userObjt)


/* para passarmos de objeto para JSON, utilizamos o metodo JSON.stringify()
leva como obrigátorio 1 parametro e outros 2 parametros opcionais
o segundo utiliza como filtro, caso não queira filtrar nenhuma chave, passe como undefined
e o terceiro serve como identação
*/

const users = {
    Murillo: {
        firstName: 'Murillo',
        secondName: 'Vinícius',
        email: 'Murillovinicius13@hotmail.com',
        habilidades: ['HTML', 'CSS', 'JavaScript'],
        idade: 20
    },
    Letycia: {
        firstName: 'Letycia',
        secondName: 'Lins',
        email: 'letyciagatinha@hotmail.com',
        habilidades: ['C#', 'Pyhon', 'MongoDB'],
        idade: 18
    },
    Gustavo: {
        firstName: 'Gustavo',
        secondName: 'Chad',
        email: 'gustavogigachad@hotmail.com',
        habilidades: ['Java', 'mySQL', 'PHP'],
        idade: 19,
    }
}

const txt = JSON.stringify(users, undefined, 3) // transformando em JSON
console.log(txt)

// para utilizarmos filtro, mudamos o substituto que no caso seria o segundo parametro

const txtExemplo = JSON.stringify(users, ['Gustavo', 'Letycia'], 3)
console.log(txtExemplo) // filtrando apenas 2 usuarios