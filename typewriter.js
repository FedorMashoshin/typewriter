function writeSentence(sentence) {
    let i = 0; // starting position
    const showChar = setInterval(function () {
        process.stdout.write(sentence.charAt(i++)) // we want to print our letters one by one on one line!
        if (i > sentence.length) { // if we are done --> end of our printing + new line
            clearInterval(showChar);
            console.log('')
        }
    }, 500);
}
writeSentence("hello there from lighthouse labs");