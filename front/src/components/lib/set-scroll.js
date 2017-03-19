const N = 10;

export default function (element, n) {
    let confirm = 0;
    const t = setInterval(() => {
        const previous = element.scrollLeft;

        element.scrollLeft = n;

        // XXX: check if really scrolled.
        if (element.scrollLeft === previous) {
            confirm += 1;
        }

        if (confirm === N) {
            clearInterval(t);
        }
    }, 200);
}
