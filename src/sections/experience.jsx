import styled from "styled-components";
import { HeadCom } from "../common.com";
import { EachSection } from "../common.styled";
import { MdWork } from "react-icons/md";

export default function Experience() {
  return (
    <EachSection>
      <HeadCom heading="Education"></HeadCom>
      <ExperienceWrap>
        <div className="iconwrap">
          <MdWork className="icon" />
        </div>{" "}
        <ExContentwrap>
          <h1 className="c-name content">Berarkray Studio</h1>
          <h5 className="period content">jan/2021 - current</h5>
          <h1 className="content">Full stack developer</h1>
          <ul>
            <li>Create couple of product websites.</li>
            <li>
              Working in majority features addding in their admin panel product.
            </li>
            <li>
              And also working creating APIS and inserting mongoose schema new
              in their existing project of server side code.
            </li>
            <li>
              And i changed many old library and adding new technologies in
              their product ,example of i add styled components in front-end ,
              mongoose in backend ,next.js for product website front end for
              better seo optimization.
            </li>
            <li>
              I have well knowledge in css so i ownly create design and execute
              in their websites.
            </li>
            <li>
              And worked in promotions which are creating email templates and
              add this feature in both front- end and back-end code.
            </li>
          </ul>
        </ExContentwrap>
      </ExperienceWrap>
    </EachSection>
  );
}

const ExperienceWrap = styled.div`
  width: 100%;
  height: max-content;
  /* background-color: red; */
  display: flex;
  padding: clamp(20px, 4%, 60px);
  .iconwrap {
    width: 15%;
    height: max-content;
    display: flex;
    justify-content: center;
    svg {
      width: 40px;
      height: 40px;
      color: goldenrod;
    }
  }
`;
const ExContentwrap = styled.div`
  width: 85%;
  height: max-content;
  position: relative;
  padding-left: clamp(20px, 4%, 30px);
  color: whitesmoke;
  ::before {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: gray;
  }
  ul {
    list-style-type: "🚀";
    /* list-style-position: inside; */
    li {
      padding: 10px 20px;
    }
  }
  .content {
    padding: 10px 20px;
  }
`;
