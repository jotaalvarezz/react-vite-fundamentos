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

        if (film.name.trim()) {
            setFilm([
                ...films,
                {
                    id: Date.now(),
                    ...film,
                    state: true,
                },
            ]);

            setFilme({ name: "" });
        }

        setFilme({ name: "" });
    };

    return (
        <form
            onSubmit={handleKeyPress}
            className="my-8 flex items-center gap-4 overflow-hidden 
            rounded-md 
            bg-gray-50 px-4
            py-3
            dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                type="text"
                name="name"
                placeholder="Agregar nuevas peliculas..."
                value={film.name}
                onChange={handleChange}
            />
        </form>
    );
};

export default FilmCreate;
