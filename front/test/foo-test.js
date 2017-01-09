/* @flow */
import test from "ava";
import foo from "foo";

test((t) => {
    t.is(foo(), 42);
});
