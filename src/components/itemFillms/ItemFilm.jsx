const ItemFilm = ({film, deleteFilm}) => {
    return (
        <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="flex-grow text-gray-600">
                {film.name}
            </p>
            <img
                className="h-5 flex-none"
                src="src/assets/images/icon-cross.svg"
                onClick={deleteFilm}
            />
        </article>
    );
};

export default ItemFilm;
