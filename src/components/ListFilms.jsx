import ItemFilm from "./itemFillms/ItemFilm";

const ListFilms = ({films}) => {
    console.log("list ", films)

    return (
        <div className="rounded-t-md bg-white">
            {
                films.map((item, index) => (
                    <ItemFilm key={index} film={item}/>
                ))
            }
            {
                films.length === 0 && <p className="text-center py-8 text-gray-400">no hay peliculas en catelera</p>
            }
        </div>
    );
};

export default ListFilms;
