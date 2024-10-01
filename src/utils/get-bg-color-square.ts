export const getBgColorSquare = (letter: string, indexLetter: number, secretWord: string[]) => {
    console.log('getBgColorSquare', { secretWord, letter });
    const letterMatched = Array(secretWord.length).fill(false);
    const indexLetterToWord = secretWord?.findIndex?.(
        (item, i) => item === letter && !letterMatched[i]
    );

    if (secretWord[indexLetter] === letter) {
        letterMatched[indexLetter] = true;
        return 'green';
    }

    if (indexLetterToWord !== -1) {
        letterMatched[indexLetterToWord] = true;
        return 'orange';
    }

    return 'grey';
};
