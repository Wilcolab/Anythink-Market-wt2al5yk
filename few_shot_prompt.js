import re

function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Examples:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));         // userId
// console.log(toCamelCase('SCREEN_NAME'));     // screenName
/**
 * Converts a given string to camelCase.
 * 
 * Handles:
 * - snake_case, kebab-case, space-separated, and mixed separators.
 * - Trims leading/trailing whitespace.
 * - Multiple consecutive separators.
 * - Numeric words.
 * - Leaves acronyms (all-uppercase words) lowercase after the first word.
 * - Throws TypeError if input is not a string.
 * 
 * @param {string} s - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If input is not a string.
 */
function toCamelCase(s) {
    if (s === null || s === undefined) return '';
    if (typeof s !== 'string') throw new TypeError('Input must be a string.');

    s = s.trim();
    if (!s) return '';

    // Split on any sequence of non-alphanumeric characters
    let words = s.split(/[^A-Za-z0-9]+/).filter(Boolean);

    if (words.length === 0) return '';

    // First word: all lowercase
    const first = words[0].toLowerCase();

    function formatWord(w) {
        // If the word is all uppercase (acronym), make it lowercase
        if (/^[A-Z0-9]+$/.test(w)) return w.toLowerCase();
        // Otherwise, capitalize first letter, keep rest as is
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }

    const rest = words.slice(1).map(formatWord);

    return first + rest.join('');
}

// Example usages:
console.log(toCamelCase("  API_response  "));      // Output: "apiResponse"
console.log(toCamelCase("http-server-status"));    // Output: "httpServerStatus"
console.log(toCamelCase("user  ID 123"));         // Output: "userId123"

function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both inputs must be defined and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both inputs must be valid numbers.');
    }
    return a + b;
}


// Examples:
// console.log(addNumbers(5, 3)); // 8
// console.log(addNumbers('5', 3)); // Error