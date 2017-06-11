import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class AddButton extends React.Component {
    render() {
        return (<div>
            <Link className="button tiny" style={{
                position: "absolute",
                bottom: 0,
                right: "20px",
            }} to="/items/new">Add</Link>
        </div>)
    }
}
export default AddButton