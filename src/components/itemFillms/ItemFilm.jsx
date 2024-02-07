const ItemFilm = ({ film, deleteFilm, updateFilm }) => {
    const check = `inline-block h-5 w-5 flex-none rounded-full border-2
                    bg-gradient-to-r 
                    from-sky-500 from-10% 
                    via-indigo-500 via-75% 
                    to-purple-500 to-10%`;

    const nocheck = `inline-block h-5 w-5 flex-none rounded-full border-2`;

    return (
        <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4 dark:bg-gray-800">
            <button
                className={`${film.state ? check : nocheck}`}
                onClick={updateFilm}
            >
                {film.state && (
                    <img
                        className="px-1"
                        src="src/assets/images/icon-check.svg"
                    />
                )}
            </button>
            <p className="flex-grow text-gray-600 dark:text-gray-300">
                {film.name}
            </p>
            <img
                className="h-5 flex-none cursor-pointer"
                src="src/assets/images/icon-cross.svg"
                onClick={deleteFilm}
            />
        </article>
    );
};

export default ItemFilm;
