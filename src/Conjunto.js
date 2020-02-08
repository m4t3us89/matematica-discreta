class Cojunto{
   
    constructor(conjunto){
        const [nome,elementos] = conjunto.split('=')
        this.nome = nome 
        this.elements = elementos.replace('{','').replace('}','').split(',')
    }

    inserir(elemento){
        const existe = this.elements.some(item=>{
           return (typeof item == 'string' ? item : item[0]) == (typeof elemento == 'string' ? elemento : elemento[0])
        })
       
        const aux = typeof elemento == 'string' ? elemento : `{${elemento[0]}}`

        if(existe)
            return `Elemento '${aux}' já foi inserido`

        this.elements.push(elemento)
        return `Elemento '${aux}' inserido com sucesso`
    }

    tamanho(){
        return this.elements.length
    }

    elementos(){
        let aux = '';
        this.elements.forEach((element,index)=>{
            aux = `${aux + (index > 0 ? "," : "")}${(typeof element == "string" ? element : "{"+element[0]+"}")}`
        })
        return `${this.nome}={${aux}}`
    }

}

module.exports = Cojunto