import {PropTypes} from "react";

const page = {"image_url": PropTypes.string};

const episode = {
    "page": PropTypes.shape(page),
    "url": PropTypes.string
};

const magazine = {
    "cover": PropTypes.shape(page),
    "episode": PropTypes.arrayOf(PropTypes.shape(episode)),
    "title": PropTypes.string
};

export default {
    episode,
    magazine,
    page
};
