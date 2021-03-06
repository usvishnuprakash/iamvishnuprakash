import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeadCom } from "../common.com";

export default function Links() {
  return (
    <LinksSec>
      <HeadCom heading="Contact"></HeadCom>

      <IconsWrap>
        <a href="https://github.com/usvishnuprakash">
          <Icons>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Icons>
        </a>
        <a href="https://www.linkedin.com/in/usvishnuprakash">
          <Icons>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Icons>
        </a>
        <a href="mailto:usvishnuprakash@gmail.com">
          <Icons>
            <img src="https://img.icons8.com/color/70/000000/gmail-new.png" />
          </Icons>
        </a>
        <a href="https://wa.me/+918778741766">
          <Icons>
            <img src="https://img.icons8.com/fluency/70/000000/whatsapp.png" />
          </Icons>
        </a>
        <a href="tel:8778741766">
          <Icons>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
            </svg>
          </Icons>
        </a>
      </IconsWrap>
      <ContactRouter>
        <Link to="/contact">
          <div className="button">Contact</div>
        </Link>
      </ContactRouter>
    </LinksSec>
  );
}

const LinksSec = styled.div`
  width: 100%;
  height: max-content;
  min-height: 400px;
  background-color: #121212;
`;
const IconsWrap = styled.div`
  width: 100%;
  height: max-content;
  padding: 35px clamp(20px, 2%, 40px);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Icons = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  svg {
    width: 100%;
    height: 100%;
    color: white;
    fill: white;
  }
  :hover {
    transform: scale(1.3);
    position: relative;
  }
  .logo {
    width: max-content;
    height: max-content;
    position: absolute;
  }
`;

const ContactRouter = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    width: max-content;
    height: max-content;
    padding: 20px 30px;
    color: #121212;
    font-size: 2rem;
    background-color: #eeb76b;
  }
`;
