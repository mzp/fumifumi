export default function (element, n) {
    const t = setInterval(() => {
        const previous = element.scrollLeft;

        element.scrollLeft = n;

        // XXX: check if really scrolled.
        if (element.scrollLeft === previous) {
            clearInterval(t);
        }
    }, 100);
}
