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

const TvSlider = (props: IBannerProps) => {
  const history = useHistory();

  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (props.data) {
      if (leaving) return;
      toggleLeaving();
      const totalSeries = props.data.results.length - 1;
      const maxIndex = Math.floor(totalSeries / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (seriesId: number) => {
    history.push(`/movies/${seriesId}`);
  };
  const bigMovieMatch = useRouteMatch<{ seriesId: string }>(
    "/movies/:seriesId"
  );

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
              .map((series) => (
                <Box
                  layoutId={series.id + ""}
                  key={props.category + series.id}
                  variants={boxVar}
                  onClick={() => onBoxClicked(series.id)}
                  whileHover="hover"
                  initial="normal"
                  transition={{ type: "tween" }}
                  bgPhoto={makeImagePath(series.backdrop_path, "w500")}
                >
                  <Info variants={infoVar}>
                    <h4>{series.title}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
      {bigMovieMatch ? (
        <>
          <MovieOverlay
            id={bigMovieMatch.params.seriesId}
            category={props.category}
            data={props.data}
          ></MovieOverlay>
        </>
      ) : null}
    </>
  );
};

export default TvSlider;