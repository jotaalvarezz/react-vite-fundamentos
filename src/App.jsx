import { Fragment, useState} from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [counter, setCounter] = useState(0);

/* useCallback es un hook que nos permite memorizar una función. Esto quiere decir que si la función 
que le pasamos como argumento no ha cambiado, useCallback no la volverá a crear.
Necesitas pasar dos cosas a useCallback:
Una definición de función que desea almacenar en caché entre renderizaciones.
Una lista de dependencias que incluye cada valor dentro de su componente que se usa dentro de su función. 

una alternativa para no usar useCallback es sacar la funcion fuera del componente 
*/

const { api,loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
if(loading) return <p>Cargando...</p>
if(error) return <p>{error}</p>
  
  return (
    <Fragment>
      <h1>Da Un Click si eres una papa bailarina</h1>
      <button onClick={() => setCounter(counter + 2)}>counter:{counter}</button>
      <hr />
      <ul>
        {
            api.map((item, index) => (
                <li key={index} >{item.username}</li>
            ))
        }
      </ul>
    </Fragment>
  );
};

export default App;
