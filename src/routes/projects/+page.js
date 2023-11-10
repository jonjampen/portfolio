export const load = async ({ fetch }) => {
    const response = await fetch(`/api/projects`);
    const projects = await response.json();
    const smallProjects = []

    return {
        projects,
        smallProjects
    };
};