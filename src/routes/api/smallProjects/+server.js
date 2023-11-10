import allProjects from "../../../lib/smallProjects.json"
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.meta.index) - new Date(a.meta.index);
    });

    return json(sortedProjects);
};