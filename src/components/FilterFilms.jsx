const FilterFilms = () => {
    return (
        <section className="container mx-auto mt-8 flex justify-center gap-4 rounded-md bg-white px-4 py-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
        </section>
    );
};

export default FilterFilms;
