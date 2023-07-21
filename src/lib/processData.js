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
    let tags = [];

    snapshot.forEach((doc) => {
        tagNames.push(doc.data().name);
        tagIds[doc.data().name] = doc.id;
        tags[doc.id] = doc.data().name;
    });

    return [tagNames, tagIds, tags];
}

export function processTags2(snapshot) {
    let tags = [];

    snapshot.forEach((doc) => {
        tags[doc.id] = doc.data().name;
    });

    return tags;
}