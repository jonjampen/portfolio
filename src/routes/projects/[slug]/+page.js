export async function load({ params }) {
    const project = await import(`../content/${params.slug}.svx`);
    const content = project.default;

    return {
        content,
    };
}