const Conjunto = require('./Conjunto')

const conjunto = new Conjunto('Teste={A,B,C,{K}}')

console.log(conjunto.tamanho())
console.log(conjunto.elementos())
console.log(conjunto.inserir('{D}'))
console.log(conjunto.elementos())
console.log(conjunto.inserir('X'))
console.log(conjunto.elementos())
console.log(conjunto.tamanho())