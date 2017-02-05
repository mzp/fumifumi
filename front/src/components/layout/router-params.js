// Pass-through route parameter
export default function (props) {
    const {params, "location": {query}} = props;

    return {
        "params": {
            ...params,
            ...query
        }
    };
}
