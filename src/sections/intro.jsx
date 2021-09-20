import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { textAnim } from "../animation.styled";
import { EachSection } from "../common.styled";
import { smallDevice } from "../style.styled";

export default function Intro() {
  return (
    <EachSection
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?size=626&ext=jpg)",
      }}
    >
      <IntroWrap>
        <WordSec word1="Hey!" word2=" There !" delay1={200} delay2={400} />
        <WordSec
          word1="I am"
          word2="vishnu prakash"
          delay1={1600}
          delay2={1800}
        />
        <WordSec
          word1="I am a"
          word2=" full stack web developer"
          delay1={2900}
          delay2={3200}
        />
      </IntroWrap>
    </EachSection>
  );
}
const WordSec = (props) => {
  const [word1, setWord1] = useState(false);
  const [word2, setWord2] = useState(false);
  useEffect(() => setTimeout(() => setWord1(true), props.delay1), []);
  useEffect(() => setTimeout(() => setWord2(true), props.delay2), []);
  return (
    <Line>
      <Word time={word1}>{props.word1}</Word>
      <Word time={word2} margin="20px">
        {props.word2}
      </Word>
    </Line>
  );
};

const IntroWrap = styled.div`
  width: 90%;
  height: max-content;
  /* background-color: seagreen; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: relative;
`;
const Line = styled.div`
  width: 100%;
  /* background-color: orange; */
  height: max-content;
  display: flex;
  margin: 20px 0 20px 0;
  justify-content: center;
  align-items: center;
  ${smallDevice} {
    flex-direction: column;
  }
`;

const Word = styled.h1`
  width: max-content;
  max-width: 100%;
  text-align: center;
  height: max-content;
  font-size: 3rem;

  background-clip: text;
  -webkit-background-clip: text;
  margin: 10px 0;

  background-image: linear-gradient(to right, transparent 50%, white 100%);
  color: transparent;
  background-size: 300% 100%;
  background-position: ${({ time }) => (time ? "100%" : "0%")};
  transition: background-position 3s;
  // animation: ${textAnim} 2s;
  ${({ margin }) =>
    margin &&
    css`
      margin-left: ${margin};
    `};
  ${smallDevice} {
    margin-left: 0;
  }
`;
