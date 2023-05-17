const title = 'Canui + CanAdmin';

export default function getPageTitle(pageTitle: string) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}