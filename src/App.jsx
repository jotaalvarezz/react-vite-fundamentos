import { Fragment, useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [api, setApi] = useState([]);

  const peticion = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });
      const data = await res.json();
      console.log("data ", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticion();
  });
  return (
    <Fragment>
      <h1>Use Effect</h1>
      <button onClick={() => setCounter(counter + 1)}>counter:{counter}</button>
    </Fragment>
  );
};

export default App;
