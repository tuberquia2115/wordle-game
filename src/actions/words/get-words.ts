'use server';

const validateWordWithoutAccents = (word: string) => {
    return /^[A-Za-z]+$/.test(word);
};

export async function getWords() {
    const wordsUrl = process.env.WORDS_URL ?? '';

    try {
        const response = await fetch(wordsUrl, { method: 'GET' });

        const text = await response.text();
        const words = text
            .split('\n')
            .filter((word) => word.length === 5 && validateWordWithoutAccents(word))
            .map((word) => word.toUpperCase());

        return {
            ok: true,
            words,
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
        };
    }
}
