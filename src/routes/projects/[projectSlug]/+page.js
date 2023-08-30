import { projects } from "../../../data/projects.js";
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
    let project = false;

    // find project
    projects.map((projectToCheck) => {
        if (projectToCheck.slug === params.projectSlug) {
            project = projectToCheck;
        }
    });

    if (!project) {
        throw error(404, "Project not found");
    }

    return {
        project: { ...project }
    };
};
