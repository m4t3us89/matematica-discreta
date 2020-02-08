const Conjunto = require('./Conjunto')

const conjunto = new Conjunto({
    name : 'Teste',
    elements : ['A','B','C']
})

console.log(conjunto.tamanho())
console.log(conjunto.elementos())
console.log(conjunto.inserir('D'))
console.log(conjunto.elementos())