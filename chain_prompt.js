function toKebabCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') throw new TypeError('Input must be a string');

    // Step 1: Trim whitespace
    let str = input.trim();

    if (str === '') return '';

    // Step 2: Convert camelCase to spaces, then split on spaces, underscores, or hyphens
    str = str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to space
        .replace(/[_\s\-]+/g, ' '); // underscores, hyphens, and spaces to single space

    // Step 3: Lowercase, split, and join with hyphens
    return str
        .toLowerCase()
        .split(' ')
        .filter(Boolean)
        .join('-');
}

// Example usages:
console.log(toKebabCase("Hello World"));           // "hello-world"
console.log(toKebabCase(" someVariableName "));    // "some-variable-name"
console.log(toKebabCase("this_is_a_test"));        // "this-is-a-test"
console.log(toKebabCase("Already-Kebab-Case"));    // "already-kebab-case"
console.log(toKebabCase(""));                      // ""
console.log(toKebabCase(null));                    // ""
console.log(toKebabCase(undefined));               // ""