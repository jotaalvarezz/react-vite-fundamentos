import { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Films from "./components/Films";

const registers = JSON.parse(localStorage.getItem('peliculas')) || [
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

    useEffect(() => {
        localStorage.setItem('peliculas',JSON.stringify(films))
    },[films])

    return (
        <div className="container">
            <Formulario films={films} setFilm={setFilm}/>
            <Films films={films} setFilm={setFilm}/>
        </div>
    )
}

export default App;