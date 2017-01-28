import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine/list/selected-episode";

test((t) => {
    t.is(
        reducer({}, {
            "payload": "foo",
            "type": "magazine.list.show"
        }),
      "foo");
});

test((t) => {
    t.deepEqual(
        reducer({
            "id": 1,
            "title": "episode I"
        }, {
            "payload": [
                {
                    "episodes": [{
                        "id": 2,
                        "title": "other episode"
                    }]
                },
                {
                    "episodes": [{
                        "id": 1,
                        "title": "the episode"
                    }]
                }
            ],
            "type": "magazine.list.fetch"
        }),
        {
            "id": 1,
            "title": "the episode"
        });
});

test((t) => {
    t.deepEqual(
        reducer({
            "id": 1,
            "title": "episode I"
        }, {
            "payload": [],
            "type": "magazine.list.fetch"
        }),
        {});
});
