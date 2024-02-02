const Header = () => {
    return (
        <header className="container mx-auto px-4 ">
            <div className="flex justify-between">
                <h1 className="pt-8 text-3xl font-bold uppercase tracking-[0.2em] text-white">
                    CinePlus Word
                </h1>
                <img
                    className="mt-8 h-7 w-7"
                    src="src/assets/images/icon-moon.svg"
                />
            </div>
        </header>
    );
};

export default Header;
