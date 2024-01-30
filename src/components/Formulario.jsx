import { useState } from "react";
import Swal from "sweetalert2";


const Formulario = ({films, setFilm}) => {
    const [test, setTest] = useState({
        title: "",
        description: "",
        state: "",
        testing: true
    })

    const {title, description, state, testing} = test
    const handleSubmit = (event) => {
        event.preventDefault();

        if(!title.trim() || !description.trim() || !state.trim()){
            Swal.fire({
                title: "Error!",
                text: "Título y descripción son obligatorios",
                icon: "error",
                confirmButtonColor: "#1b955c99",
            });
            return;
        }

        setFilm(
            [...films,
                {   
                    id: Date.now(),
                    ...test,
                    state: test.state == 1 ? 'Disponible':'No Disponible'
                }
            ]
        )

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Pelicula agregada!",
            showConfirmButton: false,
            timer: 1500
        });
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
                            Cartelera
                        </label>
                    </div>
                    <select className="form-select"
                        onChange={handleChange}
                        name="state"
                        aria-label="Seleccione una opcion"
                    >
                        <option selected>Seleccione una opcion</option>
                        <option value={1}>Disponible</option>
                        <option value={2}>No Disponible</option>
                    </select>
                    <button className="btn btn-success mt-2" type="submit">Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario;