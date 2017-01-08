/* @flow */
import foo from "foo";
import test from "ava";

test(t => {
  t.is(foo(), 42);
});
