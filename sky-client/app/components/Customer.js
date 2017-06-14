import React from 'react';
import PropTypes from 'prop-types'

export default class Customer extends React.Component {
    constructor(props) {
        super(props);
        
        this.chooseUser = this.chooseUser.bind(this);
    }

    chooseUser(e) {
        this.props.getUser(e.currentTarget.value);
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>Choose customer</h2>
                </div>
                <div className="radio">
                    <label><input type="radio" name="user" defaultValue="london" onChange={this.chooseUser}/>London</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="user" defaultValue="liverpool" onChange={this.chooseUser}/>Liverpool</label>
                </div>
            </div>
        );
    }
}

Customer.propTypes = {
    customerID: PropTypes.string,
    locationID: PropTypes.string,
    getUser: PropTypes.func.isRequired
};