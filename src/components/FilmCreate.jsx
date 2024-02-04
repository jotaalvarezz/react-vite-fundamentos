import { useState } from "react";

const FilmCreate = ({films, setFilm}) => {
    const [film, setFilme] = useState({
        id:null,
        name:"",
        state:false
    }) 

    const handleKeyPress = (event) => {
        /* event.preventDefault(); */
        if(event.key == "Enter"){
            setFilm(
                ...films,

            )
        }
    } 

    return (
        <form className="my-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                name ='name'
                placeholder="Agregar nuevas peliculas..."
                onKeyDown={handleKeyPress}
            />
        </form>
    );
};

export default FilmCreate;
