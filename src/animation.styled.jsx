import { keyframes } from "styled-components";

export const textAnim = keyframes`
0% {
background-position:0%;
}
100%{
    background-position:100%;
}
`;
export const HeadAnim = keyframes`
0%,100% {
      clip-path: polygon(
        0% 05%, 
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        00% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
`;
export const poppingAnim = keyframes`
0%{
  bottom:-10px;
  opacity:0;
}50%{
  bottom:10px;
  opacity:1;
}100%{
  opacity: 1;
  bottom:0;
}
`;
export const AttiAnim = keyframes`
0%{
    letter-spacing:-0.5rem;
    filter:blur(0.5rem)
}
100% {
    
    filter: blur(0rem);
  }`;

export const pulseAnim = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }`;
