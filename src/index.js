import React from "react";
import {createRoot} from "react-dom/client";

function App() {
    return (
        <div className="App">
            <h1>Hello React</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);