// Fork from https://github.com/component/scroll-to
/**
 * Module dependencies.
 */

const TWEEN = require("tween.js");

/**
 * Expose `scrollTo`.
 */

module.exports = scrollTo;

/**
 * Scroll `element` to `(x, y)`.
 *
 * @param {Object} element
 * @param {Number} x
 * @param {Number} y
 * @api public
 */
function scrollTo (element, x, y, options) {
    options = options || {};

    // Start position
    const position = scroll(element);

    // Setup tween
    const tween = new TWEEN.Tween(position).
    easing(options.ease || TWEEN.Easing.Quartic.Out).
    to({
        "top": y,
        "left": x
    }, options.delay || 1000);

    // Scroll
    tween.onUpdate(function () {
        element.scrollLeft = position.left || 0;
        element.scrollTop = position.top || 0;
    });

    var rid = null;

    // Handle end
    tween.onStop(function () {
        window.cancelAnimationFrame(rid);
    });

    // Animate
    function animate (time) {
        rid = window.requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    animate();

    tween.start();
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */
function scroll (element) {
    const y = element.scrollTop;
    const x = element.scrollLeft;

    return {
        "top": y,
        "left": x
    };
}
