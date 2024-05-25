'use server';

export async function getWords() {
    const wordsUrl = process.env.WORDS_URL ?? '';

    try {
        const response = await fetch(wordsUrl, { method: 'GET', })

        const text = await response.text();
        const words = text.split('\n').filter(word => word.length === 5);

        return {
            ok: true,
            words
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false
        };
    }
}
