export default async function sharePage(url, title, description) {
    await navigator.share({
        title: title,
        description: description,
        url: url
    });
}