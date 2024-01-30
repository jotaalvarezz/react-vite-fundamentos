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
        const index = films.findIndex(prev => prev.id == item.id)
        const array = [...films]
        array[index] = {
            ...item,
            state: item.state === 'Disponible' ? 'No Disponible': 'Disponible'
        }
        setFilm(
            array
        )
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