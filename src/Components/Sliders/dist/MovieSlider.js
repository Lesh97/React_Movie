"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_router_dom_1 = require("react-router-dom");
var utils_1 = require("../../utils");
var MovieStyled_1 = require("../styled-components/MovieStyled");
var MovieOverlay_1 = require("./MovieOverlay");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var infoVar = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type: "tween"
        }
    }
};
var boxVar = {
    normal: {
        scale: 1
    },
    hover: {
        scale: 1.5,
        y: -50,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type: "tween"
        }
    }
};
var rowVar = {
    hidden: {
        x: window.outerWidth - 10
    },
    visible: {
        x: 0
    },
    exit: {
        x: -window.outerWidth + 10
    }
};
var offset = 6;
var MovieSlider = function (props) {
    var _a;
    var history = react_router_dom_1.useHistory();
    var _b = react_1.useState(0), index = _b[0], setIndex = _b[1];
    var increaseIndex = function () {
        if (props.data) {
            if (leaving)
                return;
            toggleLeaving();
            var totalMovies = props.data.results.length - 1;
            var maxIndex_1 = Math.floor(totalMovies / offset) - 1;
            setIndex(function (prev) { return (prev === maxIndex_1 ? 0 : prev + 1); });
        }
    };
    var decreaseIndex = function () {
        if (props.data) {
            if (leaving)
                return;
            toggleLeaving();
            var totalMovies = props.data.results.length - 1;
            var maxIndex_2 = Math.floor(totalMovies / offset) - 1;
            setIndex(function (prev) { return (prev === maxIndex_2 ? -1 : prev - 1); });
        }
    };
    var _c = react_1.useState(false), leaving = _c[0], setLeaving = _c[1];
    var toggleLeaving = function () { return setLeaving(function (prev) { return !prev; }); };
    var onBoxClicked = function (movieId) {
        history.push("/movies/" + movieId);
    };
    var bigMovieMatch = react_router_dom_1.useRouteMatch("/movies/:movieId");
    return (React.createElement(React.Fragment, null,
        React.createElement(MovieStyled_1.Slider, null,
            React.createElement(MovieStyled_1.SliderTitle, null, props.title),
            React.createElement(MovieStyled_1.SliderContainer, null,
                React.createElement(MovieStyled_1.SliderPrevBtn, { onClick: decreaseIndex },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faAngleLeft })),
                React.createElement(framer_motion_1.AnimatePresence, { initial: false, onExitComplete: toggleLeaving },
                    React.createElement(MovieStyled_1.Row, { variants: rowVar, initial: "hidden", animate: "visible", exit: "exit", key: props.category + index, transition: { type: "tween", duration: 1 } }, (_a = props.data) === null || _a === void 0 ? void 0 : _a.results.slice(1).slice(offset * index, offset * index + offset).map(function (movie) { return (React.createElement(MovieStyled_1.Box, { layoutId: movie.id + "", key: props.category + movie.id, variants: boxVar, onClick: function () { return onBoxClicked(movie.id); }, whileHover: "hover", initial: "normal", transition: { type: "tween" }, bgPhoto: utils_1.makeImagePath(movie.backdrop_path, "w500") },
                        React.createElement(MovieStyled_1.Info, { variants: infoVar },
                            React.createElement("h4", null, movie.title)))); }))),
                React.createElement(MovieStyled_1.SliderNextBtn, { onClick: increaseIndex },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faAngleRight })))),
        bigMovieMatch ? (React.createElement(React.Fragment, null,
            React.createElement(MovieOverlay_1["default"], { id: bigMovieMatch.params.movieId, category: props.category, data: props.data }))) : null));
};
exports["default"] = MovieSlider;
