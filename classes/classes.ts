class Data {
    dia: number
    mes: number
    ano: number


    constructor(dia: number =1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3,11,2021)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data //Posso omitir os ()

casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    constructor(public dia: number =1, public mes: number = 1, public ano: number = 1970){     
    }
}

const aniversarioEsperto = new DataEsperta(3,11,2021)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta //Posso omitir os ()

casamento.ano = 2017
console.log(casamento)

class Produto  {
    constructor(public nome: string, public preco: number, public desconto: number = 0){     
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`
    }
}

const produto1 = new Produto('Feijão',60)
console.log(produto1)
console.log(produto1.resumo())

const produto2 = new Produto('Cebola',70,0.06)
console.log(produto2)
console.log(produto2.resumo())

//Somente leitura
class Aviao{
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
    
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')

// turboHelice.modelo = 'sdfsdf'
// turboHelice.prefixo = 'sdfsdfsd'
console.log(turboHelice)