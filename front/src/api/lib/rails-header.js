export default function () {
    const token : string =
      document.head.querySelector("meta[name=\"csrf-token\"]");

    if (token) {
        return {"X-CSRF-Token": token.content};
    }

    return {};
}
