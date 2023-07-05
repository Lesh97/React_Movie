import styled from "styled-components";
import { motion } from "framer-motion";

// 화면 전체를 감싸는 div
export const Wrapper = styled.div`
  background: black;
  overflow-x: hidden;
  height: 100vh;
`;
// Loading이 걸릴 시 나오는 div
export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 메인에서 크게 나오는 메인 작품 한 개
export const Banner = styled.div<{ bgphoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;
// 메인 작품 타이틀 제목
export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;
// 메인 작품 작품 간략 소개
export const Overview = styled.p`
  font-size: 25px;
  width: 50%;
`;

/** -----------------슬라이더 관련 css ------------------------ */
//슬라이더
export const Slider = styled.div`
  position: relative;
  margin-bottom: 100px;
  top: -150px;
`;
//슬라이더 제목
export const SliderTitle = styled.p`
  font-size: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0px 30px;
`;
//슬라이더 가로 한 줄 (칸 나누기)
export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding: 0px 40px;
`;
//슬라이더 안에 영상 한 칸
export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  font-size: 50px;
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
// Box :hover시에 보이는 설명
export const Info = styled(motion.div)`
  padding: 10px;
  background-color: #2f2f2f;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 20px;
    color: white;
  }
`;

/** ----------------- Overlay 관련 css ------------------------ */
// Overlay 모션
export const overlayVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  exit: { opacity: 0 },
};
// Modal창 모션
export const modalVar = {
  initial: { opacity: 0 },
  click: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};
// Overlay창
export const DetailOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
// Modal창
export const DetailModal = styled(motion.div)`
  position: fixed;
  width: 55vw;
  height: 90vh;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.darker};
  border-radius: 5px;
  overflow: hidden;
  border-radius: 5px;
  z-index: 999 !important; // 최상위, z-index : 998 - header 영역
`;
// Modal창 영화 이미지
export const DetailPoster = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      to top,
      rgba(24, 24, 24, 1) 2%,
      rgba(0, 0, 0, 0) 60%
    ),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;
// Modal창 영화 타이틀 제목
export const DetailPoster_Title = styled.div`
  letter-spacing: 1px;
  width: 100%;
  height: 70px;
  color: ${(props) => props.theme.white.lighter};
  padding: 0 50px;
  font-size: 45px;
  font-weight: 700;
  position: relative;
  top: -90px;
  text-shadow: 1px 1px 2px #a8a8a8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
// Modal창 영화 정보 상단구역 전체
export const Detail_Info_Top = styled.div`
  top: -55px;
  font-size: 22px;
  padding-left: 50px;
  position: relative;
  font-weight: 500;
  span:first-child {
    color: #46d369;
    border: 1px solid ${(props) => props.theme.white.darker};
    padding: 0.5px 4px;
    border-radius: 3px;
    margin-right: 10px;
  }
  p {
    display: inline;
  }
  span:last-child {
    margin-left: 10px;
  }
`;
// Modal창 영화 정보 하단구역 전체
export const Detail_Info_Bottom = styled.div`
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -20px;
`;
/// Modal창 영화 간략 소개 (하단)
export const DetailPoster_Overview = styled.div`
  width: 60%;
  font-size: 18px;
  line-height: 1.45;
  color: ${(props) => props.theme.white.lighter};
  background-color: ${(props) => props.theme.black.darker};
  padding-right: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
// Modal창 배우,감독 div (하단)
export const DetailPoster_Actor_Director = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  font-size: 18px;
  color: ${(props) => props.theme.white.lighter};
`;
// Modal창 배우 (하단)
export const DetailPoster_Actor = styled.div`
  margin-bottom: 20px;
  div {
    display: inline;
  }
  span {
    color: #777777;
    margin-right: 6px;
  }
`;
// Modal창 감독 (하단)
export const DetailPoster_Director = styled.div`
  span {
    color: #777777;
    margin-right: 6px;
  }
`;
