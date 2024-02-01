const App = () => {
    return (
        <div
            className="min-h-screen
            bg-gray-200 
            bg-[url('./assets/images/bg-mobile-light.jpg')]
            bg-contain
            bg-no-repeat"
        >
            <header className="container mx-auto px-4 ">
                <div className="flex justify-between">
                    <h1 className="pt-8 text-3xl font-bold uppercase tracking-[0.2em] text-white">
                        CinePlus Word
                    </h1>
                    <button>Luna</button>
                </div>
                <form className="my-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Agregar nuevas peliculas..."
                    />
                </form>
            </header>

            <main className="container mx-auto px-4">
                <article>
                    <button>circulo</button>
                    <p>Cpmplete online curse in bluuweb</p>
                    <button>equis</button>
                </article>
                <article>
                    <button>circulo</button>
                    <p>Cpmplete online curse in bluuweb</p>
                    <button>equis</button>
                </article>
                <article>
                    <button>circulo</button>
                    <p>Cpmplete online curse in bluuweb</p>
                    <button>equis</button>
                </article>
                <article>
                    <button>circulo</button>
                    <p>Cpmplete online curse in bluuweb</p>
                    <button>equis</button>
                </article>

                <section>
                    <span>5 items left</span>
                    <button>Clear Completed</button>
                </section>
            </main>

            <section className="container mx-auto px-4">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </section>

            <p className="text-center">Drag and Drop</p>
        </div>
    );
};

export default App;
