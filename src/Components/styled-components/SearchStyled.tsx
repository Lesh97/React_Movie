import { motion } from "framer-motion";
import styled from "styled-components";

//Search페이지 상단
export const SearchTop = styled.div`
  position: relative;
  background-color: black;
  width: 100vw;
  top: 300px;
  height: 40%;
  padding: 0px 30px;
`;
//검색한 검색어
export const SearchTitle = styled.h2`
  font-size: 60px;
  color: white;
`;

//검색결과 css
export const SearchResults = styled.div`
  position: relative;
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 0px 30px;
`;

export const SearchTtile = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

export const SearchMovieGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 80px;
`;

export const SearchSeriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 80px;
`;
export const ResultsBox = styled(motion.div)<{ bgPhoto: string }>`
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
export const ResultsBox_Info = styled(motion.div)`
  padding: 10px;
  background-color: rgba(75, 75, 75, 0.7);
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: left;
    font-size: 18px;
    color: white;
  }
`;
