import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/layout/header";

test((t) => {
    t.is(
        reducer(true, {"type": "layout.header.toggle"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "layout.header.toggle"}),
      true);
});

test((t) => {
    t.is(
        reducer(true, {"type": "layout.header.hide"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "layout.header.hide"}),
      false);
});
