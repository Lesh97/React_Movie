import {
  LoginBox,
  Idbox,
  PasswordBox,
  LoginBtn,
  HelpBox,
  Remember,
  LoginBoxBtm,
  LoginBoxTop,
  LoginWrapper,
  LoginH2,
  LoginInput,
  BtnBox,
  Captcha,
} from "../Components/styled-components/LoginStyled";

function Login() {
  return (
    <>
      <LoginWrapper>
        <LoginBox>
          <LoginBoxTop>
            <LoginH2>로그인</LoginH2>
            <Idbox>
              <LoginInput
                type="text"
                placeholder="E-mail 또는 휴대폰 번호를 입력하세요"
              ></LoginInput>
            </Idbox>

            <PasswordBox>
              <LoginInput type="password" placeholder="비밀번호"></LoginInput>
            </PasswordBox>
            <BtnBox>
              <LoginBtn>로그인 하기</LoginBtn>
            </BtnBox>

            <Remember>
              <input type="Checkbox"></input>
              <label>계정 기억하기</label>
            </Remember>
          </LoginBoxTop>
          <LoginBoxBtm>
            <HelpBox>
              계정이 없으신가요? <a href="#">계정 만들기</a>
            </HelpBox>
            <Captcha>
              현재 페이지는 구글의 reCAPTCHA에 로봇인지 아닌지 판별되고
              있습니다.
              <a href="#">더 알아보기</a>
            </Captcha>
          </LoginBoxBtm>
        </LoginBox>
      </LoginWrapper>
    </>
  );
}

export default Login;
