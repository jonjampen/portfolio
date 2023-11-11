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
            description: "Explore a collection of programming projects by Jon Jampen, an 18-year-old computer science enthusiast. From foundational web development to advanced frameworks like Svelte, React, and NextJs, discover a diverse range of projects showcasing my passion for technology.",
            keywords: "Jon Jampen, programming, coding, computer science, web development, portfolio, website, personal website, projects, work, learning, education, JavaScript, Svelte, React, NextJs, SvelteKit, frontend frameworks, matura project, Chronic Fatigue Syndrome app, portfolio, university, coding projects",
            canonical: "/projects",
            image: "/avatar/happy.png"
        }

    };
};