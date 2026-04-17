import imageUrlBuilder from '@sanity/image-url';
import client from './client';

const builder = imageUrlBuilder(client);

/**
 * Convert a Sanity image reference to a URL.
 * Usage: urlFor(doc.image).width(800).url()
 */
export function urlFor(source) {
    return builder.image(source);
}
