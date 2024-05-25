

export const getBgColorSquare = (letter: string, indexLetter: number, secretWord: string[]) => {
    console.log({ letter, indexLetter });
    const indexLetterToWord = secretWord.findIndex((l) => l === letter);

    if (secretWord.includes(letter) && indexLetterToWord === indexLetter) {
        return 'green';
    }

    if (secretWord.includes(letter)) {
        return 'orange';
    }


    return 'grey';
};
