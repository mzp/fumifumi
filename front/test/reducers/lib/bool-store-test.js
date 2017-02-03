import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import boolStore from "reducers/lib/bool-store";


test((t) => {
    const reducer = boolStore(["on", "yes"], ["off", "no"], false);

    t.is(reducer(false, {"type": "on"}), true);
    t.is(reducer(false, {"type": "yes"}), true);
    t.is(reducer(true, {"type": "off"}), false);
    t.is(reducer(true, {"type": "no"}), false);
});

test((t) => {
    const reducer = boolStore([], [], false);

    t.is(reducer(true, {"type": "off"}), true);
    t.is(reducer(true, {"type": "no"}), true);
});
