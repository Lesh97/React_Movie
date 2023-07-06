import styled from "styled-components";

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

// 하단 Footer
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  overflow-x: hidden;
  height: 50px;
`;
