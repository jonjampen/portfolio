export function processProjects(snapshot) {
    let projects = [];

    snapshot.forEach((doc) => {
        projects.push({ ...doc.data(), id: doc.id });
    });

    return projects;
}

export function processProject(snapshot) {
    let project;


}

export function processTags(snapshot) {
    let tagNames = [];
    let tagIds = [];

    snapshot.forEach((doc) => {
        tagNames.push(doc.data().name);
        tagIds[doc.data().name] = doc.id;
    });

    return [tagNames, tagIds];
}