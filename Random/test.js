function removeDuplicates(string) {
    let splitString = string.split('');
    const unqiqueArray = [...new Set(splitString)];
    return unqiqueArray.join('');
}

console.log(removeDuplicates('wwwwaaaaarrrreeeen'));