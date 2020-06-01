import { formatMoney } from '../../utils';

it('Should be correct format 12.900,00', () => {
    const value = 12900;
    const formattedValue = formatMoney(value);

    expect(formattedValue).toBe("12.900,00");
})