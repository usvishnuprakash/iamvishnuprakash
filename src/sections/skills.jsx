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
import { HeadCom } from "../common.com";
import { useState } from "react";
import { pulseAnim } from "../animation.styled";

export default function Skills() {
  const skills = [
    { name: "css", icon: <SiCss3 /> },
    { name: "Java Script", icon: <SiJavascript /> },
    { name: "react.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextDotJs /> },
    { name: "gatsby.js", icon: <SiGatsby /> },
    { name: "node.js", icon: <SiNodeDotJs /> },
    { name: "express.js", icon: "Express" },
    { name: "mongodb", icon: <SiMongodb /> },
  ];
  return (
    <EachSection>
      <HeadCom heading="skills" />
      <SkillSecWrap>
        {skills.map((items, idx) => (
          <CardCom key={items.name + idx} name={items.name} icon={items.icon} />
        ))}
      </SkillSecWrap>
    </EachSection>
  );
}

const CardCom = (props) => {
  const [rotate, setRotate] = useState(false);
  // useEffect(() => {
  //   setInterval(() => setRotate(!rotate), Math.random());
  // }, []);
  return (
    <CardWrap>
      <Card
        onClick={() => setRotate(!rotate)}
        style={rotate ? { transform: "rotateY(180deg)" } : {}}
      >
        <div className="face one">
          <div className="click">click me</div>
          {props.icon}
        </div>
        <div className="face two">{props.name}</div>
      </Card>
    </CardWrap>
  );
};

const SkillSecWrap = styled.div`
  width: 100%;
  height: max-content;
  padding: 40px clamp(20px, 5%, 60px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardWrap = styled.div`
  width: 200px;
  height: 250px;
  perspective: 600px;
  margin: clamp(20px, 2%, 40px);
  /* border-radius: 20px; */
  .img {
    width: 70px;
    height: 70px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
  position: relative;
  background-color: #121212;
  box-shadow: 0px 0px 10px 2px black;

  border-radius: 20px;

  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: #121212;
    border-radius: 20px;
    cursor: pointer;
    svg {
      color: wheat;
      width: 80px;
      height: 80px;
    }
  }
  .one {
    position: relative;
    animation: ${pulseAnim} 1s infinite;
    .click {
      position: absolute;
      top: 3%;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      color: #03a9f4;
      font-size: 0.5rem;
      animation: bulk 1s infinite;

      @keyframes bulk {
        0% {
          font-size: 0.2rem;
          opacity: 0;
        }
        100% {
          font-size: 0.7rem;
          opacity: 7;
        }
      }
    }
  }
  .two {
    transform: rotatey(180deg);
  }
`;
