import test from "ava";
import action from "actions/magazine/import";

test((t) => {
    t.deepEqual(
        action.set(["foo", "bar"]),
        {
            "payload": ["foo", "bar"],
            "type": "magazine.import.set"
        });
});

test((t) => {
    t.deepEqual(
        action.start("foo"),
        {
            "payload": "foo",
            "type": "magazine.import.start"
        });
});

test((t) => {
    t.deepEqual(
        action.success("foo"),
        {
            "payload": "foo",
            "type": "magazine.import.success"
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
            "type": "magazine.import.error"
        });
});
