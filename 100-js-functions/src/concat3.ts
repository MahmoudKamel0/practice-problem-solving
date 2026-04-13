/**
 * 3.concat3 
 * Write a function named concat3 that receives 3 strings as parameters (string1, string2, string3) 
 * and an additional string named separator.
 * The function should concatenate the three strings using the provided separator and return the result.
 * @param {string} string1 
 * @param {string} string2 
 * @param {string} string3 
 * @param {string} separator 
 * @returns {string} 
 */

// solve 1
export function concat3(string1: string, string2: string, string3: string, separator: string) {
    return `${string1} ${string2} ${string3}`.replaceAll(" ", separator)
}

// solve 2
// function concat3(string1: string, string2: string, string3: string, separator: string) {
//     return `${string1} ${string2} ${string3}`.split(" ").join(separator)
// }

// solve 3
// function concat3(string1: string, string2: string, string3: string, separator: string) {
//     const words = [string1, string2, string3]
//     let result = "";
//     for(const w of words) {
//         if (w === words[2]) {
//             result += w;
//         } else {
//             result += w + separator;
//         };
//     }
//     return result;
// }

// solve 4
// function concat3(string1: string, string2: string, string3: string, separator: string) {
//     return string1 + separator + string2 + separator + string3
// }

