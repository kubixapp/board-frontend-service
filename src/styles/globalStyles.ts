import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    // Color setting
    --black: #1b1b1b;

    --purple-100:  #f3e8fe;
    --purple-200:  #e6d1fc;
    --purple-300:  #dabafb;
    --purple-400:  #cda3f9;
    --purple-500:  #b576f6;
    --purple-600:  #9c48f3;
    --purple-main: #831af0;
    --purple-800:  #6915c0;
    --purple-900:  #4f1090;
    --purple-1000: #340a60;
    --purple-1100: #270848;
    --purple-1200: #1a0530;

    --blue-100:  #eeebff;
    --blue-200:  #ddd8ff;
    --blue-300:  #ccc4ff;
    --blue-400:  #bbb0ff;
    --blue-500:  #9a89ff;
    --blue-600:  #7861ff;
    --blue-main: #563aff;
    --blue-800:  #452ecf;
    --blue-900:  #3423a0;
    --blue-1000: #241770;
    --blue-1100: #1b1158;
    --blue-1200: #130c41;

    --cyan-green-100:  #e6fcfd;
    --cyan-green-200:  #ccf8fb;
    --cyan-green-300:  #b3f5f9;
    --cyan-green-400:  #99f1f7;
    --cyan-green-500:  #66eaf2;
    --cyan-green-600:  #33e3ee;
    --cyan-green-main: #00dcea;
    --cyan-green-800:  #00b0bb;
    --cyan-green-900:  #00848c;
    --cyan-green-1000: #00585e;
    --cyan-green-1100: #004246;
    --cyan-green-1200: #002c2f;

    --aquamarine-100:  #e6fcf4;
    --aquamarine-200:  #ccf9e9;
    --aquamarine-300:  #b3f7de;
    --aquamarine-400:  #99f4d3;
    --aquamarine-500:  #66eebe;
    --aquamarine-600:  #33e9a8;
    --aquamarine-main: #00e392;
    --aquamarine-800:  #00b675;
    --aquamarine-900:  #008858;
    --aquamarine-1000: #005b3a;
    --aquamarine-1100: #00442c;
    --aquamarine-1200: #002d1d;

    --gray-100:  #ffffff;
    --gray-200:  #f7f7f7;
    --gray-300:  #f3f3f8;
    --gray-400:  #e9ecef;
    --gray-500:  #dee2e6;
    --gray-600:  #ced4da;
    --gray-main: #adb5bd;
    --gray-800:  #90979d;
    --gray-900:  #74797f;
    --gray-1000: #495057;
    --gray-1100: #343a40;
    --gray-1200: #313437;
    --gray-1300: #2c2d2e;

    --error-100:  #fff4f3;
    --error-200:  #ffd8d6;
    --error-300:  #ffc4c1;
    --error-400:  #ffb1ac;
    --error-500:  #ff8983;
    --error-600:  #ff6259;
    --error-main: #ff3b30;
    --error-800:  #cd2f26;
    --error-900:  #9c231d;
    --error-1000: #6a1813;

    --warning-100:  #fffae5;
    --warning-200:  #fff5cc;
    --warning-300:  #fff0b2;
    --warning-400:  #ffeb99;
    --warning-500:  #ffe066;
    --warning-600:  #ffd633;
    --warning-main: #ffcc00;
    --warning-800:  #cca300;
    --warning-900:  #997a00;
    --warning-1000: #665200;
}

body {
    width: 100%;
    min-height: 100vh;
}

.light {
    font-weight: 300;
}

.regular {
    font-weight: 400;
}

.medium {
    font-weight: 500;
}

.semibold {
    font-weight: 600;
}

.bold {
    font-weight: 700;
}

h1 {
    font-size: 96px;
    line-height: 120px;
}

h2 {
    font-size: 60px;
    line-height: 76px;
}

h3 {
    font-size: 48px;
    line-height: 64px;
}

h4 {
    font-size: 34px;
    line-height: 44px;
}

h5 {
    font-size: 24px;
    line-height: 28px;
}

h6 {
    font-size: 20px;
    line-height: 24px;
}

.md {
    font-size: 16px;
    line-height: 24px;
}

.sm {
    font-size: 14px;
    line-height: 20px;
}

.xm {
    font-size: 12px;
    line-height: 16px;
}

.poppins {
    font-family: "Poppins", sans-serif;
}

.clash {
    font-family: "Clash Display";
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyles;
