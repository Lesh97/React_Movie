import styled from "styled-components";
import BgImage from "../../BackImg/bg.png";

export const LoginWrapper = styled.div`
  background-image: url(${BgImage});
  width: 100vw;
  height: 100vh;
`;

export const LoginBox = styled.div`
  position: relative;
  top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.9;
`;

export const LoginBoxTop = styled.div`
  padding: 20px 0px;
  width: 40vw;
  height: 450px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginH2 = styled.h2`
  color: ${(props) => props.theme.white.lighter};
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 50px;
`;

export const Idbox = styled.div`
  padding: 0px 30px;
  width: 100%;
  height: 70px;
  margin: 10px 0px;
`;
export const LoginInput = styled.input`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.black.lighter};
  outline: none;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  ::placeholder {
    color: ${(props) => props.theme.white.lighter};

    padding-left: 10px;
    font-size: 15px;
  }
`;

export const PasswordBox = styled.div`
  padding: 0px 30px;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  width: 100%;
  height: 70px;
  margin: 25px 0px 10px;
`;
export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.red};
  outline: none;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
`;

export const HelpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Remember = styled.div``;

export const LoginBoxBtm = styled.div`
  padding: 30px 0px;
  height: 200px;
  width: 40vw;
  background-color: #000;
`;

export const Captcha = styled.div`
  padding: 0px 30px;
  font-size: 12px;
`;
