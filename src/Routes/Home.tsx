import { useQuery } from "react-query";
import { getMovies, IGetResult } from "../api";
import { makeImagePath } from "../utils";
import {
  Banner,
  Overview,
  Title,
} from "../Components/styled-components/MovieStyled";
import MovieSlider from "../Components/Sliders/MovieSlider";
import { Helmet } from "react-helmet";
import {
  Footer,
  Loader,
  Wrapper,
} from "../Components/styled-components/MainStyled";

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
          <Helmet>
            <title>넷플릭스</title>
          </Helmet>{" "}
          <Banner
            bgphoto={makeImagePath(now_data?.results[0].backdrop_path || "")}
          >
            <Title>{now_data?.results[0].title}</Title>
            <Overview>{now_data?.results[1].overview}</Overview>
          </Banner>
          <MovieSlider
            category="now_playing"
            title="현재 상영중"
            data={now_data}
          ></MovieSlider>
          <MovieSlider
            category="popular"
            title="가장 인기있는 영화"
            data={popular}
          ></MovieSlider>
          <MovieSlider
            category="top_rated"
            title="평점이 높은 영화"
            data={top_rated}
          ></MovieSlider>
          <MovieSlider
            category="upcoming"
            title="개봉 예정작"
            data={upcoming}
          ></MovieSlider>
        </>
      )}
      <Footer>copyright &copy; by 저작권은 넷플릭스, 데이터는 moviedb</Footer>
    </Wrapper>
  );
}

export default Home;
