import ItemFilm from "./itemFillms/ItemFilm";
import { Droppable, Draggable } from "@hello-pangea/dnd";

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
        <Droppable droppableId={"x"}>
            {(provided) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                className="overflow-hidden rounded-t-md bg-white">
                    {films.map((item, index) => (
                        <ItemFilm
                            index={index}
                            key={index}
                            film={item}
                            deleteFilm={() => handleDelete(item)}
                            updateFilm={() => handleCheck(item)}
                        />
                    ))}
                    {provided.placeholder}
                    {films.length === 0 && (
                        <p className="py-8 text-center text-gray-400 dark:bg-gray-800">
                            no hay peliculas en catelera
                        </p>
                    )}
                </div>
            )}
        </Droppable>
    );
};

export default ListFilms;
