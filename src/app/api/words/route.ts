import { NextResponse } from 'next/server';

export async function GET() {
    const wordsUrl = process.env.WORDS_URL ?? '';

    try {
        const resp = await fetch(wordsUrl, { method: 'GET' });
        const text = await resp.text();
        const words = text.split('\n').filter((word) => word.length === 5);

        return NextResponse.json({
            size: words.length,
            words: words,
        });
    } catch (error) {
        NextResponse.json(error, { status: 400 });
    }
}
