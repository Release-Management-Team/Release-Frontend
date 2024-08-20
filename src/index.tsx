import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body, button, textarea, input {
    margin: 0;
    font-family: "pretendard", sans-serif;
    font-weight: 600;
    font-style: normal;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
`;

const loadTypekit = () => {
  const config = {
    kitId: "xaz5cai",
    scriptTimeout: 3000,
    async: true,
  };

  const h = document.documentElement;
  const t = setTimeout(() => {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout);

  const tk = document.createElement("script");
  let f = false;
  const s = document.getElementsByTagName("script")[0];
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = function () {
    f = true;
    clearTimeout(t);
    try {
      (window as any).Typekit.load(config);
    } catch (e) {
      console.error(e);
    }
  };
  if (s.parentNode) {
    s.parentNode.insertBefore(tk, s);
  }
};

const Root = () => {
  useEffect(() => {
    loadTypekit();
  }, []);

  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
