class Cojunto{
   
    constructor({name,elements = []}){
        this.name = name 
        this.elements = elements
    }

    inserir(element){
        this.elements.push(element)
    }

    tamanho(){
        return this.elements.length
    }

    elementos(){
        return  `{${this.elements.join()}}`
    }

}

module.exports = Cojunto