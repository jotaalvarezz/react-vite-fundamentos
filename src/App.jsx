import { Fragment, useState } from "react";
import Controlado from "./components/Controlado";
import Cat from "./components/Cat.jsx";

const App = () => {
    return (
        <div className="container">
            <Controlado/>
            <Cat/>
        </div>
    )
}

export default App;