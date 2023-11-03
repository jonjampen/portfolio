export async function load({ params }) {
    const project = await import(`../${params.slug}.svx`);
    const { title, date } = project.metadata;
    const content = project.default;

    return {
        content,
        title,
        date
    };
}