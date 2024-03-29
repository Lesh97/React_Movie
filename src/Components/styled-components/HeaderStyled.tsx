import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  z-index: 99;
  background-color: black;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Search = styled.form`
  color: white;
  display: flex;
  width: 50px;
  align-items: center;
  position: relative;
  right: 150px;
  svg {
    height: 25px;
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

export const Input = styled(motion.input)`
  width: 270px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

export const logoVar = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

export const navVar = {
  top: {
    backgroundColor: "rgba(0,0,0,1)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
  exit: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

export const SignIn = styled.button`
  width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.lighter};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  border: none;
`;
