import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


import "./index.css";
import App from "./App";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();

ReactDOM.render(
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</BaseProvider>
	</StyletronProvider>,
	document.getElementById("root")
);
