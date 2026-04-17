export default {
    name: 'doctor',
    title: 'Doctor Profile',
    type: 'document',
    fields: [
        {
            name: 'profilePic',
            title: 'Profile Picture',
            type: 'image',
            options: { hotspot: true },
            description: 'Upload the doctor\'s profile photo. This appears on the homepage and About page.',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            media: 'profilePic',
        },
        prepare({ media }) {
            return {
                title: 'Doctor Profile Picture',
                media,
            };
        },
    },
};
