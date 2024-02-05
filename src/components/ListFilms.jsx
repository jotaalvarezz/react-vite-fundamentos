import ItemFilm from "./itemFillms/ItemFilm";

const ListFilms = ({ films, setFilm }) => {
    const handleDelete = (item) => {
        const array = films.filter((prev) => prev.id != item.id);

        setFilm([...array]);
    };

    const handleCheck = (item) => {
        const index = films.findIndex((prev) => prev.id === item.id);
        const array = [...films];
        array[index] = {
            ...item,
            state: item.state ? false : true,
        };
        setFilm(array);
    };

    return (
        <div className="rounded-t-md bg-white">
            {films.map((item, index) => (
                <ItemFilm
                    key={index}
                    film={item}
                    deleteFilm={() => handleDelete(item)}
                    updateFilm={() => handleCheck(item)}
                />
            ))}
            {films.length === 0 && (
                <p className="py-8 text-center text-gray-400">
                    no hay peliculas en catelera
                </p>
            )}
        </div>
    );
};

export default ListFilms;
