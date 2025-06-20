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

/**
 * Converts a given string to dot.case format.
 *
 * This function transforms the input string into dot.case, where all words are
 * lowercased and separated by dots ('.'). It handles various input formats,
 * including snake_case, kebab-case, space-separated, and mixed separators.
 * Leading and trailing whitespace is trimmed, and multiple consecutive
 * separators are treated as a single separator. Numeric words are preserved.
 *
 * @param {string} s - The input string to convert to dot.case.
 * @returns {string} The dot.case version of the input string. Returns an empty string if input is null, undefined, or empty after trimming.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toDotCase("API_response"); // "api.response"
 * toDotCase("http-server-status"); // "http.server.status"
 * toDotCase("user  ID 123"); // "user.id.123"
 */

/**
 * Converts a given string to camelCase format.
 *
 * This function transforms the input string into camelCase, where the first word
 * is lowercased and subsequent words are capitalized. It handles various input
 * formats, including snake_case, kebab-case, space-separated, and mixed separators.
 * Leading and trailing whitespace is trimmed, and multiple consecutive
 * separators are treated as a single separator. Numeric words are preserved.
 * Acronyms (all-uppercase words) are lowercased after the first word.
 *
 * @param {string} s - The input string to convert to camelCase.
 * @returns {string} The camelCase version of the input string. Returns an empty string if input is null, undefined, or empty after trimming.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toCamelCase("API_response"); // "apiResponse"
 * toCamelCase("http-server-status"); // "httpServerStatus"
 * toCamelCase("user  ID 123"); // "userId123"
 */

function toDotCase(s) {
    if (s === null || s === undefined) return '';
    if (typeof s !== 'string') throw new TypeError('Input must be a string.');

    s = s.trim();
    if (!s) return '';

    // Split on any sequence of non-alphanumeric characters
    let words = s.split(/[^A-Za-z0-9]+/).filter(Boolean);

    if (words.length === 0) return '';

    return words.map(w => w.toLowerCase()).join('.');
}

// Example usages:
console.log(toDotCase("  API_response  "));      // Output: "api.response"
console.log(toDotCase("http-server-status"));    // Output: "http.server.status"
console.log(toDotCase("user  ID 123"));          // Output: "user.id.123"
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
console.log(toCamelCase("user  ID 123"));         // Output: