/**
 * 2.averageOf4Numbers
 * Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns 
 * the mathematical average between them.
 * @param {number} nr1
 * @param {number} nr2
 * @param {number} nr3
 * @param {number} nr4
 * @returns {number}
 */
export function averageOf4Numbers(nr1: number, nr2: number, nr3: number, nr4: number) {
    const sum = nr1 + nr2 + nr3 + nr4;
    if (!Number.isFinite(sum)) {
        return 0;
    }
    return sum / 4;
}

console.log(averageOf4Numbers(132, 742, +"10.5", 14));
