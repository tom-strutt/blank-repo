export function capitalise(string) {
    const words = string.split(' ');

    const capitalisedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    return capitalisedWords.join(' ');
}

export function truncate(string, length) {

    if (string.length > length) {
        return string.slice(0, length) + '...';
    }
    return string;
}

export function camelCase(string) {
    const words = string.toLowerCase().split(' ');

    const camelCasedWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        else {
            return capitalise(word);
        }
    })
    return camelCasedWords.join('');
}

const word = 'software construction';
const truncateLength = 5

console.log("Capitalise: ", capitalise(word));
console.log("Truncate: ", truncate(word, truncateLength));
console.log("Camel Case: ", camelCase(word));