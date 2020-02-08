class Cojunto{
   
    constructor({nome,elements = []}){
        this.nome = nome 
        this.elements = elements.replace('{','').replace('}','').split(',')
    }

    inserir(elemento){
        if(this.elements.some(item=>item == elemento))
            return `Elemento '${elemento}' já foi inserido`
        this.elements.push(elemento)
        return `Elemento '${elemento}' inserido com sucesso`
    }

    tamanho(){
        return this.elements.length
    }

    elementos(){
        return  `${this.nome} = {${this.elements.join()}}`
    }

}

module.exports = Cojunto