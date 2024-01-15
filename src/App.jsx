import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Films from "./components/Films";

const registers = [
    {
        title: "Moby Dick",
        description: "Ballena",
        state: "Disponible",
        testing: true
    },
    {
        title: "Benjamin Buttom",
        description: "Niño Viejo",
        state: "No Disponible",
        testing: true
    },
    {
        title: "Avengers",
        description: "Iniciativa Vengadores",
        state: "Disponible",
        testing: false
    }
]

const App = () => {

    const [films, setFilm] = useState(registers)

    return (
        <div className="container">
            <Formulario/>
            <Films films={films}/>
        </div>
    )
}

export default App;