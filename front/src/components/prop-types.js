import PropTypes from "prop-types";

const page = {"image_url": PropTypes.string};

const episode = {
    "author": PropTypes.string,
    "page": PropTypes.shape(page),
    "pages": PropTypes.arrayOf(PropTypes.shape(page)),
    "title": PropTypes.string,
    "url": PropTypes.string
};

const magazine = {
    "cover": PropTypes.shape(page),
    "episode": PropTypes.arrayOf(PropTypes.shape(episode)),
    "title": PropTypes.string
};

const series = {
    "magazines": PropTypes.arrayOf(PropTypes.shape(magazine)),
    "title": PropTypes.string,
    "url": PropTypes.string
};

export default {
    episode,
    magazine,
    page,
    series
};
