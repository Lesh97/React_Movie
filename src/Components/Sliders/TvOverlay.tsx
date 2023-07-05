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
  id: string;
}

function TvOverlay({ category, id, data }: IOverlayProps) {
  //영화 api
  const {
    data: detailData,
    isLoading: detailLoading,
    refetch: detailRefetch,
  } = useQuery<IGetDetails>(["series", `${category}_detail`, id], () =>
    getSeriesDetail(id)
  );
  //TV api
  const {
    data: creditData,
    isLoading: creditLoading,
    refetch: refetchCredit,
  } = useQuery<IGetCredits>(["series", `${category}_credit`, id], () =>
    getSeriesCredit(id)
  );

  const actor = creditData?.cast.slice(0, 5);
  const director = creditData?.crew.find(
    (person) => person.known_for_department === "Directing"
  );
  const releaseDate = detailData?.release_date.substring(0, 4);

  const history = useHistory();
  const onBoxClicked = () => {
    history.push(`/`);
  };

  useEffect(() => {
    refetchCredit();
    detailRefetch();
  }, [id]);
  return (
    <>
      {detailLoading && creditLoading} ? ("") : (
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
                {detailData.title
                  ? detailData.title
                  : detailData.original_title}
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
              {detailData?.overview}
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
      )
    </>
  );
}

export default TvOverlay;