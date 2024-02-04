import { useState } from "react";

const FilmCreate = ({ films, setFilm }) => {
    const [film, setFilme] = useState({
        id: null,
        name: "",
        state: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFilme({
            [name]: value,
        });
    };

    const handleKeyPress = (event) => {
        event.preventDefault();
        console.log("film ", film);
        setFilm([
            ...films,
            {
                id: Date.now(),
                ...film,
                state: true,
            },
        ]);
    };

    return (
        <form
            onSubmit={handleKeyPress}
            className="my-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                name="name"
                placeholder="Agregar nuevas peliculas..."
                onChange={handleChange}
            />
        </form>
    );
};

export default FilmCreate;
