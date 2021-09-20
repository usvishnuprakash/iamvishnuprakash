import styled from "styled-components";
import { HeadCom } from "../common.com";
import { EachSection } from "../common.styled";
import { BsStarHalf } from "react-icons/bs";

export default function Education() {
  return (
    <EachSection>
      <HeadCom heading="Education"></HeadCom>
      <EdContentWrap>
        <div className="starwrap">
          <BsStarHalf className="star" />
        </div>
        <EductionContent>
          <h1 className="content-head">Collage</h1>
          <h4 className="content">Udaya polytechnic collage</h4>
          <h4 className="content">-kanyakumari</h4>
          <h1 className="content-head">Period</h1>
          <h4 className="content">2017 - 2020</h4>
          <h1 className="content-head">Course</h1>
          <h4 className="content">Electrical and Electronics Enigineering</h4>
        </EductionContent>
      </EdContentWrap>
    </EachSection>
  );
}

const EdContentWrap = styled.div`
  width: 100%;
  height: max-content;
  /* background-color: #666363; */
  padding: clamp(20px, 4%, 60px);
  display: flex;
  .starwrap {
    width: 15%;
    height: max-content;
    display: flex;
    justify-content: center;
    .star {
      color: goldenrod;
      width: 40px;
      height: 40px;
    }
  }
`;
const EductionContent = styled.div`
  width: 85%;
  height: max-content;

  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: gray;
  }
  .content-head {
    padding: 10px 20px;
    color: white;
  }
  .content {
    padding: 20px 40px;
    color: whitesmoke;
  }
`;
