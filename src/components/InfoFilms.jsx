const InfoFilms = ({films}) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
            <button className="text-gray-400">{films.length} Items Left</button>
            <button className="text-gray-400">Clear Complete</button>
        </section>
    );
};

export default InfoFilms;
