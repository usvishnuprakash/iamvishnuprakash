import styled from "styled-components";
import { AttiAnim, poppingAnim } from "../animation.styled";
import { HeadCom } from "../common.com";
import { EachSection } from "../common.styled";
export default function AboutMe() {
  const text =
    "I am a MERN stack web developer, strengths in node.js and react.js and also intermediate in next.js And I am so curious about how the core concept works in Javascript,engineering and absolutely in all thing around me";
  return (
    <EachSection>
      <HeadCom heading={"about me"} />
      <Atti>
        <h1>Actually...</h1>
      </Atti>
      <About>
        {text.split("").map((text, i) => (
          <span
            className="poping"
            style={{ animationDelay: 0.5 + i / 12 + "s" }}
            key={text + i}
          >
            {text}
          </span>
        ))}
      </About>
    </EachSection>
  );
}

const Atti = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    color: white;
    animation: ${AttiAnim} 4s 4s;
    ::first-letter {
      color: red;
    }
  }
`;
const About = styled.div`
  padding: clamp(35px, 5%, 70px);
  height: max-content;
  /* background-color: blue; */
  .poping {
    font-size: 2rem;
    color: white;
    position: relative;
    animation: ${poppingAnim} 0.5s forwards;
    opacity: 0;
  }
`;
