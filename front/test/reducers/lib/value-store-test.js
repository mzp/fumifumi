
import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import valueStore from "reducers/lib/value-store";

const reducer = valueStore("store", 0);

test((t) => {
    t.is(reducer(-1, {"type": "@@INIT"}), -1);
});

test((t) => {
    t.is(
      reducer(-1, {
          "payload": 42,
          "type": "store"
      }),
      42);
});
