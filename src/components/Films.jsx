const Films = ({films}) => {
    console.log("itemm ",films)
    return (
        <>
            <h2 className="text-center mt-4">Peliculas</h2>
            <ul>
                {
                    films.map((item, index) => (
                        <li key={index}>{item.title} - {item.state}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Films;