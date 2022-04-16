"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 2021);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; //Posso omitir os ()
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 2021);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamentoEsperto = new DataEsperta; //Posso omitir os ()
casamento.ano = 2017;
console.log(casamento);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
    }
}
const produto1 = new Produto('Feijão', 60);
console.log(produto1);
console.log(produto1.resumo());
const produto2 = new Produto('Cebola', 70, 0.06);
console.log(produto2);
console.log(produto2.resumo());
//Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'sdfsdf'
// turboHelice.prefixo = 'sdfsdfsd'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map