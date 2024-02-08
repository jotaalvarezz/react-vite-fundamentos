import { useEffect, useState } from "react";
import FilmCreate from "./components/FilmCreate";
import FilterFilms from "./components/FilterFilms";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoFilms from "./components/InfoFilms";
import ListFilms from "./components/ListFilms";
import { DragDropContext } from "@hello-pangea/dnd";

const api = JSON.parse(localStorage.getItem("films")) || [];

const App = () => {
    const [films, setFilm] = useState(api);
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const destination = result.destination.index;
        const source = result.source.index;
        const copyFilms = [...films];
        const [array] = copyFilms.splice(source, 1);
        copyFilms.splice(destination, 0, array);
        setFilm(copyFilms);
    };

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
            dark:bg-gray-900
            md:bg-[url('./assets/images/bg-desktop-light.jpg')]
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />
            <main className="container mx-auto max-w-lg px-4">
                <FilmCreate films={films} setFilm={setFilm} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <ListFilms films={List()} setFilm={setFilm} />
                </DragDropContext>
                <InfoFilms films={films} setFilm={setFilm} />
                <FilterFilms filter={filter} setFilter={setFilter} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
