const Film = ({film, deleteFilm, updateFilm}) => {
    return (
        <li className="list-group-item list-group-item-primary" >
            <div className="d-flex justify-content-between align-items-start">
                <div className="">
                    <h6>{film.title}</h6>
                    <p>{film.description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-danger" onClick={deleteFilm}>Eliminar</button>
                        <button className="btn btn-outline-warning" onClick={updateFilm}>Editar</button>
                    </div>
                </div>
                <span className={film.state == 'Disponible' ? "badge rounded-pill text-bg-success":"badge rounded-pill text-bg-danger"}>{film.state}</span>
            </div>
        </li>
    )
}

export default Film;