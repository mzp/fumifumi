import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine-files";

const foo = {"name": "foo"};
const bar = {"name": "bar"};

test((t) => {
    t.deepEqual(
        reducer([], {
            "payload": [foo, bar],
            "type": "magazine-files.set"
        }),
        [
            {
                "file": foo,
                "id": 0,
                "name": "foo",
                "status": "prepare"
            },
            {
                "file": bar,
                "id": 1,
                "name": "bar",
                "status": "prepare"
            }
        ]);
});

const state = [
    {
        "file": foo,
        "id": 0,
        "name": "foo",
        "status": "prepare"
    },
    {
        "file": bar,
        "id": 1,
        "name": "bar",
        "status": "prepare"
    }
];

test((t) => {
    const next =
    reducer(state, {
        "payload": foo,
        "type": "magazine-files.start"
    });

    t.is(next[0].status, "start");
    t.is(next[1].status, "prepare");
});

test((t) => {
    const next =
    reducer(state, {
        "payload": foo,
        "type": "magazine-files.success"
    });

    t.is(next[0].status, "success");
    t.is(next[1].status, "prepare");
});

test((t) => {
    const next =
    reducer(state, {
        "payload": {
            "error": "error",
            "file": foo
        },
        "type": "magazine-files.error"
    });

    t.is(next[0].status, "error");
    t.is(next[0].error, "error");
    t.is(next[1].status, "prepare");
});
