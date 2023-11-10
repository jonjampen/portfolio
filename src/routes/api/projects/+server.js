import { fetchMarkdownProjects } from '../../../lib/utils/index.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const allProjects = await fetchMarkdownProjects();

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.meta.index) - new Date(a.meta.index);
    });

    return json(sortedProjects);
};