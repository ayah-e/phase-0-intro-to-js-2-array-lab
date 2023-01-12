// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
//adds a cat to the end of the list
    cats.push(name);
}

function destructivelyPrependCat(name) {
//adds a cat to the beginning of the list
    cats.unshift(name);
    }

function destructivelyRemoveLastCat(name) {
// removes the last cat from the list
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    // removes the first cat from the list
    cats.shift(name);
}

function appendCat(name) {
//make a copy of original cat array
//push a new cat name to end of the copy
//return new array with modifications
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}

function prependCat(name) {
//make a copy of original cat array
//shift name to beginning of copy
//return modified array
    const copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat(name) {
//remove the last cat from the list
//make a copy of original cat array
//return modified copy
    const copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}

function removeFirstCat(name) {
//remove the first cat from the list
//make a copy of original cat array
//return modified verion
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}

