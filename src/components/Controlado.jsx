const Controlado = () => {
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();


    }

    return (
        <div className="card text-center">
            <div className="card-header">
                Formulario
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                            placeholder="Ingrese todo" 
                            className="form-control mb-2" 
                            name="title"
                            />
                    <textarea className="form-control mb-2" 
                                placeholder="Ingrese Descripcion"
                                name="description"></textarea>
                    <select className="form-select" 
                            name="state" 
                            aria-label="Seleccione algo"
                            >
                        <option value={1}>uno</option>
                        <option value={2}>dos</option>
                        <option value={3}>tres</option>
                        <option value={4}>cuatro</option>
                    </select>
                    <button className="btn btn-success mt-2" type="submit">Procesar</button>
                </form>
            </div>
        </div>
    )
}

export default Controlado;