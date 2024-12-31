export const load = async ({ fetch }) => {
    const response = await fetch(`/api/projects`);
    const projects = await response.json();

    let smallProjects = await fetch(`/api/smallProjects`);
    smallProjects = await smallProjects.json();

    return {
        projects,
        smallProjects,
        meta: {
            title: 'Projects by Jon Jampen',
            description: "Discover my programming projects ranging from Obsidian plugins to health apps, built with frameworks like Svelte, React, and Next.js.",
            keywords: "Jon Jampen, programming, coding, computer science, web development, portfolio, website, personal website, projects, work, learning, education, JavaScript, Svelte, React, NextJs, SvelteKit, frontend frameworks, matura project, Chronic Fatigue Syndrome app, portfolio, university, coding projects",
            canonical: "/projects",
            image: "/avatar/happy.png"
        }

    };
};