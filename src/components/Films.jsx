import Film from "./Film";

const Films = ({films, setFilm}) => {
    /* console.log("itemm ",films) */

    const DeleteFilm = (id) => {
        let item = films.find((prev) => {
            prev.id === id
        })

        console.log(id)
    }

    return (
        <>
            <h2 className="text-center mt-4">Peliculas</h2>
            <ul className="list-group">
            {
                films.map((item, index) => (
                    <Film key={index} film={item} deleteFilm={DeleteFilm(item.id)}/>
                ))
            }
            </ul>
        </>
    )
}

export default Films;