import test from "ava";
import action from "actions/magazine-files";

test((t) => {
    t.deepEqual(
        action.set(["foo", "bar"]),
        {
            "payload": ["foo", "bar"],
            "type": "magazine-files.set"
        });
});

test((t) => {
    t.deepEqual(
        action.start("foo"),
        {
            "payload": "foo",
            "type": "magazine-files.start"
        });
});

test((t) => {
    t.deepEqual(
        action.success("foo"),
        {
            "payload": "foo",
            "type": "magazine-files.success"
        });
});

test((t) => {
    t.deepEqual(
        action.error("foo", "error"),
        {
            "payload": {
                "error": "error",
                "file": "foo"
            },
            "type": "magazine-files.error"
        });
});
