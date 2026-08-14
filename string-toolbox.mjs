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
}

console.log(truncate('hello world', 3));
console.log(capitalise('software construction'));
console.log(capitalise(''));