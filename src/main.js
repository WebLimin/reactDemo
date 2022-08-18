import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.js";
import Echartspage from "./pages/echartsPage.js"

// ReactDom.render(<Echartspage />, document.getElementById('app'));
createRoot(document.getElementById('app')).render(<Echartspage />);
