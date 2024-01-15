import React,{useState} from "react";

const Cat = () => {
    const [data, setData] = useState({
        name:"gaticoCushs",
        year:2
    })

    const handleSubmit = () => {
        setData({...data, year: data.year + 1})
    }

    return (
        <>
            <h1>{data.name} - {data.year}</h1>
            <button onClick={handleSubmit} className="btn btn-primary">Update</button>
        </>
    )
}

export default Cat;