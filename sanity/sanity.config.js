import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'Shivaranjani Clinic',
    projectId: 'xofnv4zm',
    dataset: 'production',
    plugins: [structureTool()],
    schema: {
        types: schemaTypes,
    },
});
