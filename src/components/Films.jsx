import Film from "./Film";

const Films = ({films, setFilm}) => {
    const DeleteFilm = (id) => {
        let index = films.findIndex(prev => prev.id  === id)
        const array = [...films]
        array.splice(index,1)

        setFilm(
            array
        )
    }

    const UpdateFilm = (item) => {
        console.log("item ", item)
        const film = films.find(prev => prev.id == item.id)
        
    }

    return (
        <>
            <h2 className="text-center mt-4">Peliculas</h2>
            <ul className="list-group">
            {
                films.map((item, index) => (
                    <Film key={index} 
                        film={item} 
                        deleteFilm={() => DeleteFilm(item.id)}
                        updateFilm={() => UpdateFilm(item)}    
                    />
                ))
            }
            </ul>
        </>
    )
}

export default Films;