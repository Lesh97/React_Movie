import { useState } from "react";
import { IGetResult } from "../../api";
import { AnimatePresence } from "framer-motion";
import { useHistory, useRouteMatch } from "react-router-dom";
import { makeImagePath } from "../../utils";
import {
  Box,
  SliderTitle,
  Info,
  Row,
  Slider,
} from "../styled-components/MovieStyled";
import MovieOverlay from "./MovieOverlay";

const infoVar = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const boxVar = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.5,
    y: -50,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const rowVar = {
  hidden: {
    x: window.outerWidth - 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth + 10,
  },
};
interface IBannerProps {
  data: IGetResult | undefined;
  title: string;
  category: string;
}
const offset = 6;

const MovieSlider = (props: IBannerProps) => {
  const history = useHistory();

  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (props.data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = props.data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");

  return (
    <>
      <Slider>
        <SliderTitle>{props.title}</SliderTitle>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={props.category + index}
            transition={{ type: "tween", duration: 1 }}
          >
            {props.data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  layoutId={movie.id + ""}
                  key={props.category + movie.id}
                  variants={boxVar}
                  onClick={() => onBoxClicked(movie.id)}
                  whileHover="hover"
                  initial="normal"
                  transition={{ type: "tween" }}
                  bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                >
                  <Info variants={infoVar}>
                    <h4>{movie.title}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
      {bigMovieMatch ? (
        <>
          <MovieOverlay
            id={bigMovieMatch.params.movieId}
            category={props.category}
            data={props.data}
          ></MovieOverlay>
        </>
      ) : null}
    </>
  );
};

export default MovieSlider;
