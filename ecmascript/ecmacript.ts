//let & const

var seraQuePode = '?' //hoisting
console.log(seraQuePode)


let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar casaco!'
    console.log(acao)
}

const cpf: string = '987.987.987-98'
// cpf = '312312312312'
console.log(cpf)

function revelar() {
    var segredo = 'interno'
    console.log(segredo)
}

revelar()

//Arrow Function

function somar(n1: number,n2: number): number {
    return n1 + n2
}

console.log(somar(2,2))

const subtrair = (n1: number,n2: number): number => n1 - n2
console.log(subtrair(2,3))

const saudacao = () => console.log('Olá')
saudacao()

//this

// function normalComThis() {
//     console.log(this)
// }

// const normalComThisEspecial = normalComThis.bind('asda')
// normalComThisEspecial()

// const arrowComThis = () => console.log(this)
// arrowComThis()

// Rest & Spread

const numbers = [1,10,99,-5]
console.log(Math.max(...numbers))

// Destructing (array)

const caracteristicas = ['Motor a', 2020]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

