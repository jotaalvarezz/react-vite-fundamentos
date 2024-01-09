import { Fragment } from "react";
import PropTypes from 'prop-types'

const StateUser = (props) => {
    return(
        <Fragment>
            <ul>
                {
                    props.users.map((item, index) => (
                        <li key={index}>{item.state ? item.name+' '+'online': item.name+' '+'offline'}</li>
                    ))
                }
            </ul>  
        </Fragment>
    )
}

StateUser.propTypes = {
    users: PropTypes.array.isRequired
}

export default StateUser;