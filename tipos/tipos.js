"use strict";
// String Com typescript existe a identificação de tipos de variaveis diferentes
let nome = 'João';
console.log(nome);
//nome = 28
//numbers não ve a diferença de ponto flutuante 
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
let minhaIdade; //especificar o tipo da variavel
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)
// array
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas 
let endereco = ["Av Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 1290, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any 
//ajuda na comunicação com JS mas não é recomendado
let carro = "BMW";
console.log(carro);
carro = { marca: 'BMW', ano: 2019 }; // atribuindo objeto
console.log(carro);
//function
function retornaMeuNome() {
    return nome;
    // return minhaIdade; pois está especificado o retorno String
}
console.log(retornaMeuNome());
//Void
function digaOi() {
    console.log('Oi');
    // return minhaIdade Foi especificado Void acima.
}
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2 ,'Bia'))
console.log(multiplicar(4.7, 9));
// tipo função
let calculo; //Se quiser atribuir tipos
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objeto
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 37 
// }
usuario = {
    idade: 31,
    nome: 'Felipe'
};
console.log(usuario);
// let funcionario: {
//     superVisores: string[],
//     baterPonto: (horas: number) => string
// } = {
//     superVisores: ['Ana', 'Fernanda'],
//     baterPonto(horario: number): string {
//         if (horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário'
//         }
//     }
// }
let funcionario = {
    superVisores: ['Ana', 'Fernanda'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionario2 = {
    superVisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.superVisores);
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(8));
// funcionario = {}
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`); //porcentagem do Java
nota = '10';
console.log(`Minha nota é ${nota}!`);
// nota = true
// Checando tipos
let valor = 30;
// if (typeof valor === "number") { Não é necessário fazer isso pq podemos passar o tipo da variavel antes
//     console.log("É um number!")
// } else{
//     console.log(typeof valor)
// }
