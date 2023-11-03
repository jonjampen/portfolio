export const fetchMarkdownProjects = async () => {
    const allProjectFiles = import.meta.glob('/src/routes/projects/content/*.svx');
    const iterableProjectFiles = Object.entries(allProjectFiles);

    const allProjects = await Promise.all(
        iterableProjectFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const ProjectPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: ProjectPath
            };
        })
    );

    return allProjects;
};