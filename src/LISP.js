/**
 * checkLISP - determines if all parentheses are closed within a string
 * @param {string} str - a string to bbe checked
 * @returns {boolean} - true if all parentheses are closed
 */
export const checkLISP = (str) => {
    if (!str || typeof str !== 'string') {
        return false;
    }

    const left = [];
    const right = [];
    let len = str.length;

    for (let i = 0; i < len; i++) {
        if(str[i] === '(') {
            left.push(str[i]);
        }
        else if (str[i] === ')') {
            right.push(str[i]);
        }
    }

    return right.length === left.length;
}
