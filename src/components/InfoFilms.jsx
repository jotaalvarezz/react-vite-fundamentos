import Swal from "sweetalert2";

const InfoFilms = ({ films, setFilm }) => {
    const clearAll = () => {
        const array = films.filter((prev) => prev.state != true);

        if (array.length === films.length) {
            Swal.fire({
                title: "Error!",
                text: "No hay peliculas selecionadas!",
                icon: "error",
                confirmButtonColor: "#1b955c99",
            });

            return;
        }
        setFilm(array);
    };

    return (
        <section className="flex justify-between rounded-b-md bg-gray-50 px-4 px-4 py-4 dark:bg-gray-800">
            <button className="text-gray-400 dark:text-gray-300">
                {films.length} Items Left
            </button>
            <button
                className="text-gray-400 hover:text-blue-600 dark:text-gray-300"
                onClick={clearAll}
            >
                Clear Complete
            </button>
        </section>
    );
};

export default InfoFilms;
