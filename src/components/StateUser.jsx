import { Fragment } from "react";
import PropTypes from 'prop-types'
import MyButton from "./MyButton";

const StateUser = ({users, setUser}) => {
    const setStatus = (item, index) => {
        setUser(prevUserData => {
            const updatedUserData = [...prevUserData];
            // Realiza las modificaciones necesarias en el array
            updatedUserData[index].state = false;
            return updatedUserData;
          })
    }

    return(
        <Fragment>
            <ul>
                {
                    //setTimeout(() => {
                        users.map((item, index) => (
                            <li key={index}>{item.state ? item.name+' '+'online': item.name+' '+'offline'} <MyButton click={() => setStatus(item, index)}/></li>
                        ))
                    //}, 1000)
                }
            </ul>  
        </Fragment>
    )
}

StateUser.propTypes = {
    users: PropTypes.array.isRequired
}

export default StateUser;