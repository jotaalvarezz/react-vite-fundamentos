import { useRef, useState } from "react";

const NoControlado = () => {
    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("")
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])

        if(!title.trim() || !description.trim() || !state.trim()){
            return setError('*llene todos los campos')
        }

    }

    return (
        <div className="card text-center">
            <div className="card-header">
                Formulario
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} ref={form}>
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
                            defaultValue={4}>
                        <option value={1}>uno</option>
                        <option value={2}>dos</option>
                        <option value={3}>tres</option>
                        <option value={4}>cuatro</option>
                    </select>
                    <button className="btn btn-success mt-2" type="submit">Procesar</button>
                </form>
                <span>{ error != '' && error}</span>
            </div>
        </div>
    )
}

export default NoControlado;