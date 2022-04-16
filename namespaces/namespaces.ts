//Name space

namespace Geomatria {
    export namespace Area {
        const PI = 3.14

        export function areaCircuferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }

        export function areaRetangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}

const PI = 2.99


console.log(Geomatria.Area.areaCircuferencia(10))
console.log(Geomatria.Area.areaRetangulo(10, 20))


console.log(PI)