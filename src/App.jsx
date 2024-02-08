import { useEffect, useState } from "react";
import FilmCreate from "./components/FilmCreate";
import FilterFilms from "./components/FilterFilms";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoFilms from "./components/InfoFilms";
import ListFilms from "./components/ListFilms";
import Swal from "sweetalert2";

const api = JSON.parse(localStorage.getItem('films')) || [] ;

const App = () => {
    const [films, setFilm] = useState(api);
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        localStorage.setItem('films', JSON.stringify(films))
    },[films])
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
            md:bg-[url('./assets/images/bg-desktop-light.jpg')]
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
            bg-contain
            bg-no-repeat
            transition-all
            duration-1000
            dark:bg-gray-900"
        >
            <Header/>
            <main className="container mx-auto px-4 max-w-lg">
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
