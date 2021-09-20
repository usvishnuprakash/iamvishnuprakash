import styled from "styled-components";
import { EachSection } from "../common.styled";
import {
  SiCss3,
  SiGatsby,
  SiJavascript,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "css", icon: <SiCss3 /> },
    { name: "Java Script", icon: <SiJavascript /> },
    { name: "react.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextDotJs /> },
    { name: "gatsby.js", icons: <SiGatsby /> },
    { name: "node.js", icons: <SiNodeDotJs /> },
    { name: "express.js", icons: "Express" },
    { name: "mongodb", icons: <SiMongodb /> },
  ];
  return (
    <EachSection>
      <SkillSecWrap></SkillSecWrap>
    </EachSection>
  );
}

const CardCom = () => {
  return <CardWrap></CardWrap>;
};

const SkillSecWrap = styled.div`
  width: 100%;
  height: max-content;
  padding: 40px clamp(20px, 5%, 60px);
  display: flex;
  flex-wrap: wrap;
`;

const CardWrap = styled.div`
  width: 200px;
  height: 250px;
  background-color: #121212;
  box-shadow: 0px 0px 10px 2px black;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  .img {
    width: 70px;
    height: 70px;
  }
`;
