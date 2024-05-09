import allProjects from "../../../lib/smallProjects.json"
import { json } from '@sveltejs/kit';

export const GET = async () => {
    return json(allProjects);
};