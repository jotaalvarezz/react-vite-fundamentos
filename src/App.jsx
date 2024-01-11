import { Fragment, useState } from "react";
import StateUser from "./components/StateUser";
import imgUno from './assets/react.svg'

/* const MyButton = () => {
    return (
        <button className="btn btn-success">New Button</button>
    )
} */

const App = () => {

    const title = "Hola soy React" /* iterpolacion */
    const classTitle = 'text-center'
    const widthImg = 'ancho'
    const [users, setUser] = useState([
        {name:'Jesus Alvarez', state:true},
        {name: 'Gerson Calvo', state:false},
        {name: 'Lisandro Pacheco', state: true}
    ])
    /* const pathImg = "src/assets/react.svg" */

    return (
        <Fragment>
            <h1 className={classTitle}>{title.toLocaleUpperCase()}</h1>
            <img src={imgUno} className={widthImg} alt={`imagen-${title}`}/>
            <StateUser users={users} setUser={setUser}/>
        </Fragment>
    )
}

export default App;