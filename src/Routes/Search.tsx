import { useLocation } from "react-router-dom";
import { Wrapper } from "../Components/styled-components/MainStyled";
import { Title } from "../Components/styled-components/MovieStyled";
import { SearchResults } from "../Components/styled-components/SearchStyled";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
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
