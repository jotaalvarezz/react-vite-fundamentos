import { useEffect, useState } from "react";

const saveDarkMode = localStorage.getItem("theme") == "dark";

const Header = () => {
    const sun = "icon-sun.svg";
    const moon = "icon-moon.svg";
    const [icon, setIcon] = useState(saveDarkMode);

    useEffect(() => {
        if (icon) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [icon]);

    return (
        <header className="container mx-auto px-4 md:max-w-lg">
            <div className="flex justify-between">
                <h1 className="pt-8 text-3xl font-bold uppercase tracking-[0.2em] text-white">
                    CinePlus Word
                </h1>
                <img
                    className="mt-8 h-7 w-7 cursor-pointer"
                    src={`src/assets/images/${icon ? sun : moon}`}
                    onClick={() => setIcon(!icon)}
                />
            </div>
        </header>
    );
};

export default Header;
