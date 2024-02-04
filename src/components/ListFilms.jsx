import ItemFilm from "./itemFillms/ItemFilm";

const ListFilms = ({films, setFilm}) => {
    const handleDelete = (item) => {
        const array = films.filter(prev => (prev.id != item.id))
        
        setFilm([
            ...array
        ])
    }

    return (
        <div className="rounded-t-md bg-white">
            {
                films.map((item, index) => (
                    <ItemFilm key={index} film={item} deleteFilm={() => handleDelete(item)}/>
                ))
            }
            {
                films.length === 0 && <p className="text-center py-8 text-gray-400">no hay peliculas en catelera</p>
            }
        </div>
    );
};

export default ListFilms;
