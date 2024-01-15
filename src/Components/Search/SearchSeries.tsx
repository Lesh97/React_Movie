import { IGetSearch } from "../../api";
import { makeImagePath } from "../../utils";
import {
  ResultsBox,
  ResultsBox_Info,
  SearchSeriesGrid,
  SearchTtile,
} from "../styled-components/SearchStyled";

interface ISeriesprops {
  keyword: string;
  seriesData: IGetSearch;
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

function SearchSeriesResults({ seriesData }: ISeriesprops) {
  return (
    <>
      <SearchTtile>시리즈</SearchTtile>
      <SearchSeriesGrid>
        {seriesData?.results.map((data) => (
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
      </SearchSeriesGrid>
    </>
  );
}

export default SearchSeriesResults;
