import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Films from "./components/Films";

const registers = [
    {
        id:1,
        title: "Moby Dick",
        description: "Ballena",
        state: "Disponible",
        testing: true
    },
    {
        id:2,
        title: "Benjamin Buttom",
        description: "Niño Viejo",
        state: "No Disponible",
        testing: true
    },
    {
        id:3,
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
            <Formulario films={films} setFilm={setFilm}/>
            <Films films={films}/>
        </div>
    )
}

export default App;