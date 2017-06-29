import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkoutConfirm: false };

        this.removeItemFromBasket = this.removeItemFromBasket.bind(this);
        this.clearBasket = this.clearBasket.bind(this);
        this.checkoutBasket = this.checkoutBasket.bind(this);
        this.renderCheckoutMsg = this.renderCheckoutMsg.bind(this);
    }

    removeItemFromBasket(itemId) {
        this.props.removeItemFromBasket({ id: itemId });
    }

    clearBasket(e) {
        this.props.clearBasket();
    }

    checkoutBasket() {
        axios.post('/service/confirm', {})
            .then((response) => {
                if (response.data === "CONFIRM SUCCESS") {
                    this.setState({checkoutConfirm: true});
                }
            });
    }

    renderCheckoutMsg() {
        const checkoutConfirm = this.state.checkoutConfirm;

        if (checkoutConfirm) {
            return (
                <span className="label label-success">Checkout success!</span>
            );
        }
    }

    renderBasket() {
        const { basket } = this.props;
        
        if (basket.items.length > 0) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Basket:</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {basket.items.map(item => (
                                <li key={item} className="list-group-item">
                                    {item}
                                    <span className="btn btn-xs btn-default pull-right" onClick={() => { this.removeItemFromBasket(item); }}>
                                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-success" onClick={this.clearBasket}>
                                    <span className="glyphicon glyphicon-trash"></span>&nbsp;Clear
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-success" onClick={this.checkoutBasket}>
                                    <span className="glyphicon glyphicon-shopping-cart"></span>&nbsp;Checkout
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {this.renderCheckoutMsg()}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>Choosed products</h2>
                </div>
                {this.renderBasket()}
                
            </div>
        );
    }
}

Basket.propTypes = {
    basket: PropTypes.object,
    removeItemFromBasket: PropTypes.func.isRequired,
    clearBasket: PropTypes.func.isRequired
};