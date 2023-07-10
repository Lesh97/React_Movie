import { IGetSearch } from "../../api";
import { makeImagePath } from "../../utils";
import {
  ResultsBox,
  ResultsBox_Info,
  SearchMovieGrid,
  SearchTtile,
} from "../styled-components/SearchStyled";

interface IMovieprops {
  keyword: string;
  movieData: IGetSearch;
}

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

function SearchMovieResults({ keyword, movieData }: IMovieprops) {
  return (
    <>
      <SearchTtile>영화</SearchTtile>
      <SearchMovieGrid>
        {movieData?.results.map((data) => (
          <ResultsBox
            variants={boxVar}
            initial="initial"
            whileHover="hover"
            transition={{ type: "tween" }}
            bgPhoto={makeImagePath(
              data.backdrop_path || data.poster_path,
              "w500"
            )}
            key={`movie-${data.id}`}
          >
            <ResultsBox_Info variants={infoVar}>
              <h4>{data.title ? data.title : data.name}</h4>
            </ResultsBox_Info>
          </ResultsBox>
        ))}
      </SearchMovieGrid>
    </>
  );
}

export default SearchMovieResults;
