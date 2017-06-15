import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddButton extends React.Component {
    render() {
        return (
            <Link className="button tiny" style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
            }} to="/items/new">
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        )
    }
}
export default AddButton