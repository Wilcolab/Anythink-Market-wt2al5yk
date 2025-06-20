/**
 * Converts a given string to camelCase.
 * Example: "hello world" -> "helloWorld"
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase version of the input string.
 */
/**
 * Converts a given string to camelCase.
 * Example: toCamelCase("This is boy is my child") -> "thisIsBoyIsMyChild"
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(input) {
    return input
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '');
}