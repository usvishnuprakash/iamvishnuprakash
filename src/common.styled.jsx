import styled from "styled-components";

export const EachSection = styled.section`
  width: 100%;
  height: max-content;
  min-height: ${({ minh }) => minh ?? "100vh"};
  background-color: #121212;
  display: flex;
  flex-direction: column;
`;
