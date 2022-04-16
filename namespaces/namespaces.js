"use strict";
//Name space
var Geomatria;
(function (Geomatria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCircuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircuferencia = areaCircuferencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
    })(Area = Geomatria.Area || (Geomatria.Area = {}));
})(Geomatria || (Geomatria = {}));
const PI = 2.99;
console.log(Geomatria.Area.areaCircuferencia(10));
console.log(Geomatria.Area.areaRetangulo(10, 20));
console.log(PI);
//# sourceMappingURL=namespaces.js.map