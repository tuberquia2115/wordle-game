import { Metadata } from 'next';

interface PageMetadata {
    title: string;
    description: string;
    pageRoute: string;
    ogImgRoute: string;
}

const siteConfig = {
    url: 'https://wordle-game-dev.netlify.app',
    siteName: 'wordle-game',
};

/**
 * Generates the metadata for a page in Next.js, including Open Graph and Twitter metadata.
 *
 * @param {Object} params - The metadata parameters.
 * @param {string} params.title - The title of the page.
 * @param {string} params.description - The description of the page.
 * @param {string} params.pageRoute - The URL route for the page.
 * @param {string} params.ogImgRoute - The URL of the Open Graph image.
 * @returns {Metadata} The generated metadata object.
 *
 * @example
 * export const metadata = genPageMetadata({
 *   title: "Wordle Game - A game to have fun",
 *   description: "Word game, you have 5 attempts to guess the secret word",
 *   pageRoute: "/",
 *   ogImgRoute: "/images/favicon/favicon.png"
 * });
 *
 */
export const genPageMetadata = ({
    title,
    description,
    pageRoute,
    ogImgRoute,
}: PageMetadata): Metadata => {
    return {
        title,
        description,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: pageRoute,
        },
        openGraph: {
            title,
            description,
            url: pageRoute,
            siteName: siteConfig.siteName,
            images: [
                {
                    url: ogImgRoute,
                },
            ],
            type: 'website',
        },
        twitter: {
            title,
            description,
            images: [ogImgRoute],
        },
    };
};
