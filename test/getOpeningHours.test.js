const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se após os parâmetros temos os resultados a seguir', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Sunday', '28:11-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '12:89-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
