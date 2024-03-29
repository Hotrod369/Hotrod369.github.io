import { ScrollViewStyleReset } from 'expo-router/html';
import React from 'react';
// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }) {
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" }),
            React.createElement(ScrollViewStyleReset, null),
            React.createElement("style", { dangerouslySetInnerHTML: { __html: responsiveBackground } })),
        React.createElement("body", null, children)));
}
const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
//# sourceMappingURL=+html.js.map