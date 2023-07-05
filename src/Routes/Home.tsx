import { useQuery } from "react-query";
import { getMovies, IGetResult } from "../api";
import { makeImagePath } from "../utils";
import {
  Banner,
  Loader,
  Overview,
  Title,
  Wrapper,
} from "../Components/styled-components/MovieStyled";
import TvSlider from "../Components/Sliders/TvSlider";

function Home() {
  const { data: now_data, isLoading: now_loading } = useQuery<IGetResult>(
    ["movies", "now"],
    () => getMovies("now_playing")
  );
  const { data: popular, isLoading: popular_loading } = useQuery<IGetResult>(
    ["movies", "popular"],
    () => getMovies("popular")
  );
  const { data: top_rated, isLoading: top_loading } = useQuery<IGetResult>(
    ["movies", "top"],
    () => getMovies("top_rated")
  );
  const { data: upcoming, isLoading: up_loading } = useQuery<IGetResult>(
    ["movies", "upcoming"],
    () => getMovies("upcoming")
  );

  return (
    <Wrapper>
      {now_loading && popular_loading && top_loading && up_loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {" "}
          <Banner
            bgphoto={makeImagePath(now_data?.results[0].backdrop_path || "")}
          >
            <Title>{now_data?.results[0].title}</Title>
            <Overview>{now_data?.results[1].overview}</Overview>
          </Banner>
          <TvSlider
            category="now_playing"
            title="현재 상영중"
            data={now_data}
          ></TvSlider>
          <TvSlider
            category="popular"
            title="가장 인기있는 영화"
            data={popular}
          ></TvSlider>
          <TvSlider
            category="top_rated"
            title="평점이 높은 영화"
            data={top_rated}
          ></TvSlider>
          <TvSlider
            category="upcoming"
            title="개봉 예정작"
            data={upcoming}
          ></TvSlider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
