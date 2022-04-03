// String Com typescript existe a identificação de tipos de variaveis diferentes
let nome: string = 'João';
console.log(nome)
//nome = 28

//numbers não ve a diferença de ponto flutuante 

let idade: number = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

let minhaIdade: number //especificar o tipo da variavel
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)

// array

let hobbies: any[] = ["Cozinhar", "Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas 

let endereco: [String, number, String] = ["Av Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 1290, "Bloco C"]
console.log(endereco)

// enums

enum Cor { //Criação de Enums
    Cinza, //0
    Verde = 100, //100 Posso escolher o valor que quero atribuir e nao seguir a sequencia
    Azul = 2,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any 
//ajuda na comunicação com JS mas não é recomendado

let carro: any = "BMW"
console.log(carro)
carro = { marca: 'BMW', ano: 2019 } // atribuindo objeto
console.log(carro)

//function

function retornaMeuNome(): String {
    return nome;
    // return minhaIdade; pois está especificado o retorno String
}

console.log(retornaMeuNome())

//Void

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade Foi especificado Void acima.
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2 ,'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função

let calculo: (numeroA: number, numeroB: number) => number  //Se quiser atribuir tipos
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objeto

let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 37 
// }

usuario = {
    idade: 31,
    nome: 'Felipe'
}

console.log(usuario)

//desafio

type Funcionario = { //Criando já um tipo especifico (Alias)
    superVisores: string[],
    baterPonto: (horas: number) => string
}

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

let funcionario: Funcionario = {
    superVisores: ['Ana', 'Fernanda'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}


let funcionario2: Funcionario= {
    superVisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.superVisores)
console.log(funcionario.baterPonto(9))
console.log(funcionario.baterPonto(8))

// funcionario = {}

//Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`) //porcentagem do Java
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

// Checando tipos
let valor = 30

// if (typeof valor === "number") { Não é necessário fazer isso pq podemos passar o tipo da variavel antes
//     console.log("É um number!")
// } else{
//     console.log(typeof valor)
// }