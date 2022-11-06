const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Verifica se após os parâmetros temos os resultados a seguir',() => {
        expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
        expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
        expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    });
});
