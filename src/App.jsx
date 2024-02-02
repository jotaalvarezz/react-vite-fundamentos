import Header from "./components/Header";

const App = () => {
    return (
        <div
            className="min-h-screen
            bg-gray-200 
            bg-[url('./assets/images/bg-mobile-light.jpg')]
            bg-contain
            bg-no-repeat"
        >
            <Header />
            <main className="container mx-auto px-4">
                <form className="my-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Agregar nuevas peliculas..."
                    />
                </form>
                <div className="rounded-t-md bg-white">
                    <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online curse in bluuweb
                        </p>
                        <img
                            className="h-5 flex-none"
                            src="src/assets/images/icon-cross.svg"
                        />
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online curse in bluuweb
                        </p>
                        <img
                            className="h-5 flex-none"
                            src="src/assets/images/icon-cross.svg"
                        />
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online curse in bluuweb
                        </p>
                        <img
                            className="h-5 flex-none"
                            src="src/assets/images/icon-cross.svg"
                        />
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-300 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow text-gray-600">
                            Complete online curse in bluuweb
                        </p>
                        <img
                            className="h-5 flex-none"
                            src="src/assets/images/icon-cross.svg"
                        />
                    </article>
                </div>

                <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
                    <button className="text-gray-400">5 Items Left</button>
                    <button className="text-gray-400">Clear Complete</button>
                </section>

                <section className="container mx-auto mt-8 px-4">
                    <div className="flex justify-center gap-4 rounded-md bg-white py-4">
                        <button className="text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Completed
                        </button>
                    </div>
                </section>
            </main>

            <p className="mt-14 text-center">Drag and Drop to reorder list</p>
        </div>
    );
};

export default App;
