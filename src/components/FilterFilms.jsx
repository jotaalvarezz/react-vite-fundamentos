const FilterFilms = ({ filter, setFilter }) => {
    const handleChange = (filter) => {
        setFilter(filter);
    };

    return (
        <section
            className="container mx-auto mt-8 flex 
        justify-center gap-4 rounded-md bg-gray-50 px-4 
        py-4
        dark:bg-gray-800 dark:text-gray-300"
        >
            <button
                className={`hover:text-blue-600 ${filter === "all" && "text-blue-600"}`}
                onClick={() => handleChange("all")}
            >
                All
            </button>
            <button
                className={`hover:text-blue-600 ${filter === "active" && "text-blue-600"}`}
                onClick={() => handleChange("active")}
            >
                Active
            </button>
            <button
                className={`hover:text-blue-600 ${filter === "completed" && "text-blue-600"}`}
                onClick={() => handleChange("completed")}
            >
                Completed
            </button>
        </section>
    );
};

export default FilterFilms;
