const Films = ({films}) => {
    console.log("itemm ",films)
    return (
        <>
            <ul>
                {
                    films.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Films;