export default {
    name: 'adsSlide',
    title: 'Ads Slider',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Slide Title',
            type: 'string',
            description: 'A short title or label for this slide',
        },
        {
            name: 'image',
            title: 'Slide Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Upload the banner/ad image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'link',
            title: 'Link (optional)',
            type: 'url',
            description: 'URL to navigate to when the slide is clicked (optional)',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.required().min(1),
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
            description: 'Toggle to show/hide this slide on the website',
            initialValue: true,
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
            title: 'title',
            media: 'image',
            order: 'order',
        },
        prepare({ title, media, order }) {
            return {
                title: title || 'Untitled Slide',
                subtitle: `Order: ${order || '-'}`,
                media,
            };
        },
    },
};
