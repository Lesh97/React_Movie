import { useQuery } from "react-query";
import { getSeries, IGetResult } from "../api";
import { makeImagePath } from "../utils";
import MovieSlider from "../Components/Sliders/MovieSlider";
import {
  Banner,
  Loader,
  Overview,
  Title,
  Wrapper,
} from "../Components/styled-components/MovieStyled";
import TvSlider from "../Components/Sliders/TvSlider";
import { Helmet } from "react-helmet";

function Tv() {
  const { data: airing_data, isLoading: airing_loading } = useQuery<IGetResult>(
    ["series", "airing"],
    () => getSeries("airing_today")
  );
  const { data: on_data, isLoading: on_loading } = useQuery<IGetResult>(
    ["series", "on"],
    () => getSeries("on_the_air")
  );
  const { data: popular, isLoading: popular_loading } = useQuery<IGetResult>(
    ["series", "popular"],
    () => getSeries("popular")
  );
  const { data: top_rated, isLoading: top_loading } = useQuery<IGetResult>(
    ["series", "top"],
    () => getSeries("top_rated")
  );
  return (
    <Wrapper>
      {airing_loading && on_loading && popular_loading && top_loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Helmet>
            <title>넷플릭스</title>
          </Helmet>{" "}
          <Banner
            bgphoto={makeImagePath(on_data?.results[0].backdrop_path || "")}
          >
            <Title>{on_data?.results[0].name}</Title>
            <Overview>
              {on_data?.results[0].overview
                ? on_data?.results[0].overview
                : "요약이 제공되지 않는 작품입니다."}
            </Overview>
          </Banner>
          <TvSlider
            category="airing_today"
            title="오늘 방영하는 시리즈"
            data={airing_data}
          ></TvSlider>
          <TvSlider
            category="on_the_air"
            title="현재 방영중인 시리즈"
            data={on_data}
          ></TvSlider>
          <TvSlider
            category="popular"
            title="가장 인기있는 시리즈"
            data={popular}
          ></TvSlider>
          <TvSlider
            category="top_rated"
            title="평점이 높은 시리즈"
            data={top_rated}
          ></TvSlider>
        </>
      )}
    </Wrapper>
  );
}

export default Tv;
