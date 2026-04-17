import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'xofnv4zm',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
});

export default client;
