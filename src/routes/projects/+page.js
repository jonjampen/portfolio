export const load = async ({ fetch }) => {
    const response = await fetch(`/api/projects`);
    const projects = await response.json();

    let smallProjects = await fetch(`/api/smallProjects`);
    smallProjects = await smallProjects.json();

    return {
        projects,
        smallProjects
    };
};