import { useState } from "react";
import FilmCreate from "./components/FilmCreate";
import FilterFilms from "./components/FilterFilms";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoFilms from "./components/InfoFilms";
import ListFilms from "./components/ListFilms";
import Swal from "sweetalert2";

const api = [
    { id: 1, name: "Moby Dick", state: false },
    { id: 2, name: "El Curiso caso de Benjamin Bootons", state: true },
    { id: 3, name: "Van Hellsing", state: true },
];

const App = () => {
    const [films, setFilm] = useState(api);
    const [filter, setFilter] = useState("all");

    const List = () => {
        switch (filter) {
            case "all":
                return films;
            case "active":
                return films.filter((prev) => prev.state === true);
            case "completed":
                return films.filter((prev) => prev.state !== true);
            default:
                return films;
        }
    };

    return (
        <div
            className="
            dark: 
            min-h-screen
            bg-gray-200
            bg-[url('./assets/images/bg-mobile-light.jpg')]
            bg-contain
            bg-no-repeat
            transition-all
            duration-1000
            dark:bg-gray-900"
        >
            <Header />
            <main className="container mx-auto px-4">
                <FilmCreate films={films} setFilm={setFilm} />
                <ListFilms films={List()} setFilm={setFilm} />
                <InfoFilms films={films} setFilm={setFilm} />
                <FilterFilms filter={filter} setFilter={setFilter} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
