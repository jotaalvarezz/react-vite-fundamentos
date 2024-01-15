import { useState } from "react";

const Controlado = () => {
    // declaracion de useState por separado

    /* const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [state, setState] = useState(""); */

    //declaracion de useState  como objeto para no declarar muchas variables
    const [test, setTest] = useState({
        title: "",
        description: "",
        state: "",
        testing: true
    })

    const {title, description, state, testing} = test

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, description, state, testing)
    }

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target

        setTest({
            ...test,
            [name]: type === "checkbox" ? 
                                checked : value
        })
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
                        onChange={handleChange}
                        name="title"
                    />
                    <textarea className="form-control mb-2"
                        placeholder="Ingrese Descripcion"
                        onChange={handleChange}
                        name="description"></textarea>
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox"
                            name="testing"
                            checked={test.testing}
                            onChange={handleChange}
                            id="flexCheckDefault" />
                        <label className="form-check-label">
                            Morning
                        </label>
                    </div>
                    <select className="form-select"
                        onChange={handleChange}
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