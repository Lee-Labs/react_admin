import React from "react";
import {createRoot} from "react-dom/client";
import ReactDOM from 'react-dom'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from "./components/layout/Layout";

document.title = 'Lee CMS'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
);