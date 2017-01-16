import test from "ava";
import action from "actions/magazine/list";

test((t) => {
    t.deepEqual(
        action.start(),
        {"type": "magazine.list.start"});
});

test((t) => {
    t.deepEqual(
        action.fetch(["foo", "bar"]),
        {
            "payload": ["foo", "bar"],
            "type": "magazine.list.fetch"
        });
});
