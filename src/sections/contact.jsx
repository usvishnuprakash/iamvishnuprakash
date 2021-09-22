import { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import { EachSection } from "../common.styled";
import { send } from "emailjs-com";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements["First Name"].value);
    alert("waiting");
    send(
      "gmailvish",
      "template_waan25h",
      {
        time: new Date(),
        name:
          e.target.elements["First Name"].value +
          e.target.elements["Last Name"].value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
        message: e.target.elements.message.value,
      },
      "user_sNL63Zw8y8KLFxyoj92kN"
    ).then(
      () => alert("success"),
      () => alert("try again with correct Inputs")
    );
  };
  return (
    <EachSection>
      <ContactWholeWrap>
        <WelcomeDiv>
          <h1>Hello Friends !</h1>
        </WelcomeDiv>
        <ContactWrap>
          <form className="wrap" onSubmit={handleSubmit}>
            <h1 className="head">Contact Me</h1>
            <Inputcom
              name1="First Name"
              name2="Last Name"
              type1="text"
              type2="text"
            />
            <Inputcom
              name1="email"
              name2="phone"
              type1="email"
              type2="phone"
              required
            />
            <Inputcom name1="message" type="text" />

            <button type="submit">
              submit <span> &#x2192;</span>
            </button>
          </form>
        </ContactWrap>
      </ContactWholeWrap>
    </EachSection>
  );
}
const Inputcom = (props) => {
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const ref1 = createRef();
  const ref2 = createRef();
  useEffect(() => {
    ref1 && ref1.current.children[1] === document.activeElement
      ? setFocus1(true)
      : setFocus1(false);
    ref2 ?? ref2.current.children[1] === document.activeElement
      ? setFocus2(true)
      : setFocus2(false);
  }, [focus1, focus2]);
  const handleClick = () => {
    ref1.current.children[1].focus();
    setFocus1(true);
  };
  const handleClick1 = () => {
    ref2.current.children[1].focus();
    setFocus2(true);
  };
  return (
    <InputComWrap>
      <InputWrap ref={ref1} onClick={handleClick}>
        <h3>{props.name1}</h3>
        <input required type={props.type1} name={props.name1} />
        <div className="line">
          <div style={focus1 ? { width: "100%" } : {}} className="over"></div>
        </div>
      </InputWrap>
      {props.name2 && (
        <InputWrap ref={ref2} onClick={handleClick1}>
          <h3>{props.name2}</h3>
          <input required type={props.type2} name={props.name2} />
          <div className="line">
            <div style={focus2 ? { width: "100%" } : {}} className="over"></div>
          </div>
        </InputWrap>
      )}
    </InputComWrap>
  );
};
const ContactWholeWrap = styled.div`
  width: 80%;
  height: max-content;
  min-height: 500px;
  border-radius: 10px;
  background-color: #121212;
  box-shadow: 0px 0px 3px 3px black;
  margin: auto;
  color: wheat;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;
`;
const WelcomeDiv = styled.div`
  padding: 70px clamp(40px, 10%, 70px);
  h1 {
    font-size: 2.5rem;
    color: wheat;
  }
`;

const ContactWrap = styled.div`
  background-color: wheat;
  padding: 70px clamp(40px, 10%, 70px);
  border-radius: 5px;
  color: #121212;
  .wrap {
    width: 100%;
    height: max-content;
    .head {
      padding: 0 0 30px 0;
      font-size: 2rem;
    }
    button {
      transition: 0.4s;
      outline: none;
      margin-top: 25px;
      border: none;
      background-color: transparent;
      color: #121212;
      cursor: pointer;
      font-size: 2rem;
      padding: 10px 20px 10px 0;
      span {
        padding: 0 5px;
        width: max-content;
        height: max-content;
      }
      :hover {
        background-color: #121212;
        color: wheat;
        span {
          transform: translateX(50px);
        }
      }
    }
  }
`;

const InputComWrap = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  gap: clamp(20px, 0%, 35px) 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: max-content;
  margin-top: 20px;
  /* background-color: blue; */
`;
const InputWrap = styled.div`
  /* background-color: #999191; */
  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    caret-color: black;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    margin: 4px 0;
    .over {
      transition: 1s;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0px;
      height: 100%;
      background-color: #121212;
    }
  }
`;
