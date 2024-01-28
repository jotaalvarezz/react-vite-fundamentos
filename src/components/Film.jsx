const Film = ({film, deleteFilm}) => {
    return (
        <li className="list-group-item list-group-item-primary" >
            <div className="d-flex justify-content-between align-items-start">
                <div className="">
                    <h6>{film.title}</h6>
                    <p>{film.description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-danger" onClick={deleteFilm(film.id)}>Eliminar</button>
                        <button className="btn btn-outline-warning">Editar</button>
                    </div>
                </div>
                <span className="badge rounded-pill text-bg-info">{film.state}</span>
            </div>
        </li>
    )
}

export default Film;