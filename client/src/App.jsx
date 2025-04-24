import Register from "../pages/Register/Register";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";

// Global Style
function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        body {
          font-family: "Host Grotesk", sans-serif;
          line-height: 180%;
        }

        ul,
        ol {
          list-style: none;
        }

        button,
        input {
          font-family: inherit;
        }
      `}
    />
  );
}

// App Component
function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
