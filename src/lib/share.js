export default async function sharePage(url, title, description) {
    await navigator.share({
        title: title,
        text: description,
        url: url
    });
}