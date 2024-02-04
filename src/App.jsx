import { useState } from "react";
import FilmCreate from "./components/FilmCreate";
import FilterFilms from "./components/FilterFilms";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoFilms from "./components/InfoFilms";
import ListFilms from "./components/ListFilms";

const api = [
    {id:1, name:'Moby Dick', state: false},
    {id:2, name:'El Curiso caso de Benjamin Bootons', state: true},
    {id:3, name:'Van Hellsing', state: true}
]

const App = () => {
    const [films, setFilm] = useState(api)

    return (
        <div
            className="min-h-screen
            bg-gray-200 
            bg-[url('./assets/images/bg-mobile-light.jpg')]
            bg-contain
            bg-no-repeat"
        >
            <Header />
            <main className="container mx-auto px-4">
                <FilmCreate films={films} setFilm={setFilm}/>
                <ListFilms films={films}/>
                <InfoFilms />
                <FilterFilms />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default App;
