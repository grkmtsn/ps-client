/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export const formatMoney = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    
        const negativeSign = amount < 0 ? "-" : "";
    
        const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount),10).toString();
        const j = (i.length > 3) ? i.length % 3 : 0;
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        return null;
    }
};