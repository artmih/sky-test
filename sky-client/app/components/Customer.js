import React from 'react';
import PropTypes from 'prop-types';

export default class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customerSelected: ''};
        this.chooseUser = this.chooseUser.bind(this);
    }

    chooseUser(e) {
        this.setState({ customerSelected: e.currentTarget.value});
        this.props.clearBasket(); // Clear basket because per user is unical products set which not accesable to other users from different locations
        this.props.getUser(e.currentTarget.value);
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>Choose customer</h2>
                </div>
                <div className="radio">
                    <label><input type="radio" name="user" 
                                defaultValue="london" 
                                checked={this.state.customerSelected === 'london'}
                                onChange={this.chooseUser}/>London</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="user" 
                                defaultValue="liverpool" 
                                checked={this.state.customerSelected === 'liverpool'}
                                onChange={this.chooseUser}/>Liverpool</label>
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