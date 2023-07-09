import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getSearchMovie, getSearchTv, IGetSearch } from "../api";
import { Wrapper } from "../Components/styled-components/MainStyled";
import { Title } from "../Components/styled-components/MovieStyled";
import { SearchResults } from "../Components/styled-components/SearchStyled";

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
        <SearchResults>
          <Title>"{keyword}" 의 검색결과</Title>
        </SearchResults>
      </Wrapper>
    </>
  );
}

export default Search;
