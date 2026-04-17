export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Upload a clinic/facility photo',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Short caption displayed over the image',
        },
        {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Describe the image for accessibility',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.required().min(1),
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'caption',
            media: 'image',
            order: 'order',
        },
        prepare({ title, media, order }) {
            return {
                title: title || 'Untitled Image',
                subtitle: `Order: ${order || '-'}`,
                media,
            };
        },
    },
};
