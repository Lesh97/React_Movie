import { useQuery } from "react-query";
import {
  IGetResult,
  IGetDetails,
  IGetCredits,
  getSeriesDetail,
  getSeriesCredit,
} from "../../api";
import {
  modalVar,
  DetailModal,
  DetailOverlay,
  DetailPoster,
  DetailPoster_Actor,
  DetailPoster_Actor_Director,
  DetailPoster_Director,
  DetailPoster_Overview,
  DetailPoster_Title,
  Detail_Info_Bottom,
  Detail_Info_Top,
  overlayVar,
} from "../styled-components/MovieStyled";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { makeImagePath } from "../../utils";
import { useEffect } from "react";

interface IOverlayProps {
  data: IGetResult | undefined;
  category?: string;
  tv_id: string;
}

function TvOverlay({ category, tv_id, data }: IOverlayProps) {
  //영화 api
  const {
    data: detailData,
    isLoading: detailLoading,
    refetch: detailRefetch,
  } = useQuery<IGetDetails>(
    ["series_detail", `${category}_detail`, tv_id],
    () => getSeriesDetail(tv_id)
  );
  //TV api
  const {
    data: creditData,
    isLoading: creditLoading,
    refetch: refetchCredit,
  } = useQuery<IGetCredits>(
    ["series-credit", `${category}_credit`, tv_id],
    () => getSeriesCredit(tv_id)
  );

  const actor = creditData?.cast.slice(0, 5);
  const director = creditData?.crew.find(
    (person) => person.known_for_department === "Directing"
  );
  const releaseDate = detailData?.first_air_date.substring(0, 5);

  const history = useHistory();
  const onBoxClicked = () => {
    history.push(`/tv`);
  };

  useEffect(() => {
    refetchCredit();
    detailRefetch();
  }, [tv_id]);
  return (
    <>
      {detailLoading && creditLoading}
      <>
        <DetailOverlay
          variants={overlayVar}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => onBoxClicked()}
        ></DetailOverlay>
        <DetailModal
          variants={modalVar}
          initial="initial"
          animate="click"
          exit="exit"
        >
          {detailData ? (
            <Helmet>
              <title>
                {detailData.name ? detailData.name : detailData.original_name}
              </title>
            </Helmet>
          ) : (
            "넷플릭스"
          )}
          <DetailPoster
            bgphoto={
              detailData?.backdrop_path
                ? makeImagePath(detailData.backdrop_path + "", "w500")
                : detailData?.backdrop_path
                ? makeImagePath(detailData.poster_path + "", "w500")
                : ""
            }
          ></DetailPoster>
          <DetailPoster_Title>{detailData?.title}</DetailPoster_Title>
          <Detail_Info_Top>
            <span>{releaseDate}</span>
            {detailData?.genres.slice(0, 3).map((genre, index) => (
              <p id="genrs" key={genre.id}>
                {genre.name}
                {index !== detailData.genres.length - 1 && " · "}
              </p>
            ))}
            <span>
              평점 :
              {detailData?.vote_average
                ? (detailData?.vote_average).toFixed(1)
                : "not vote"}
            </span>
          </Detail_Info_Top>
          <Detail_Info_Bottom>
            <DetailPoster_Overview>
              {detailData?.overview
                ? detailData?.overview
                : "요약이 제공되지 않는 작품입니다."}
            </DetailPoster_Overview>
            <DetailPoster_Actor_Director>
              <DetailPoster_Actor>
                {" "}
                <span>출연 :</span>
                {actor?.map((cast, index) => (
                  <div key={cast.id}>{cast.name ? cast.name : "No data"},</div>
                ))}
              </DetailPoster_Actor>
              <DetailPoster_Director>
                {" "}
                <span>감독 :</span>
                {director?.name ? director?.name : "No data"}
              </DetailPoster_Director>
            </DetailPoster_Actor_Director>
          </Detail_Info_Bottom>
        </DetailModal>
      </>
    </>
  );
}

export default TvOverlay;
