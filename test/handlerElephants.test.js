const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Verifica se após receber os parâmetros temos os resultados a seguir', () =>{
        expect(handlerElephants()).toBe(undefined);
        expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
        expect(handlerElephants('popularity')).toEqual(5);
        expect(handlerElephants('count')).toBe(4);
    });
});    
