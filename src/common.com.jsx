import styled from "styled-components";
import { HeadAnim } from "./animation.styled";

export const HeadCom = (props) => {
  return (
    <HeadWrap>
      <h1 className="head one">{props.heading}</h1>
      <h1 className="head two">{props.heading}</h1>
    </HeadWrap>
  );
};

const HeadWrap = styled.div`
  height: max-content;
  position: relative;
  padding: 20px 20px;

  .head {
    font-size: 4rem;
    height: 100px;
  }
  .one {
    color: transparent;
    -webkit-text-stroke: #03a9f4 2px;
  }
  .two {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #03a9f4;
    animation: ${HeadAnim} 5s infinite;
  }
`;
