import { createGlobalStyle } from "styled-components";

import RedHatTextWoff from "./Red-Hat-Text/red-hat-text-v6-latin-regular.woff";
import RedHatTextWoff2 from "./Red-Hat-Text/red-hat-text-v6-latin-regular.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Red Hat Text';
    src: local('Red Hat Text'), local('Red-Hat-Text'),
    url(${RedHatTextWoff2}) format('woff2'),
    url(${RedHatTextWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
