import {default as React} from "react";

import {default as ReactRoot} from "./components/ReactRoot";

require("./styles/index.scss");

React.render(<ReactRoot />, document.getElementById("react-container"));