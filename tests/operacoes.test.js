const { calcularAcrescimo } = require("../src/operacoes.js");

describe("Testes da função calcularAcrescimo", () => {

    test("Deve calcular acréscimo de 10%", () => {
        expect(calcularAcrescimo(100, 10)).toBe(110);
    });

    test("Deve calcular acréscimo de 50%", () => {
        expect(calcularAcrescimo(200, 50)).toBe(300);
    });

    test("Deve apresentar erro quando o valor for zero", () => {
        expect(() => calcularAcrescimo(0, 10))
            .toThrow("Dados inválidos");
    });

    test("Deve apresentar erro quando a porcentagem for maior que 100", () => {
        expect(() => calcularAcrescimo(100, 150))
            .toThrow("Dados inválidos");
    });

});