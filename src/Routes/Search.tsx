import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getSearchMovie, getSearchTv, IGetSearch } from "../api";
import SearchMovieResults from "../Components/Search/SearchMovies";
import SearchSeriesResults from "../Components/Search/SearchSeries";
import { Wrapper } from "../Components/styled-components/MainStyled";
import {
  SearchResults,
  SearchTitle,
  SearchTop,
} from "../Components/styled-components/SearchStyled";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data: movie_Data, refetch: movie_refetch } = useQuery<IGetSearch>(
    ["search", "movie"],
    () => getSearchMovie(keyword!),
    { enabled: !!keyword }
  );

  const { data: tv_Data, refetch: tv_refetch } = useQuery<IGetSearch>(
    ["search", "tv"],
    () => getSearchTv(keyword!),
    {
      enabled: !!keyword,
    }
  );
  //검색할 때만 실행
  useEffect(() => {
    movie_refetch();
    tv_refetch();
  }, [keyword, movie_refetch, tv_refetch]);

  return (
    <>
      <Wrapper>
        <SearchTop>
          <SearchTitle>"{keyword}" 의 검색결과</SearchTitle>
        </SearchTop>

        {keyword === null ? (
          <div>검색어를 입력해주세요.</div>
        ) : (
          <SearchResults>
            <SearchMovieResults
              keyword={keyword}
              movieData={movie_Data!}
            ></SearchMovieResults>
            <SearchSeriesResults
              keyword={keyword}
              seriesData={tv_Data!}
            ></SearchSeriesResults>
          </SearchResults>
        )}
      </Wrapper>
    </>
  );
}

export default Search;
