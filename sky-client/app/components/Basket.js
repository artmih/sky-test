import React from 'react';
import axios from 'axios';

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkoutConfirm: false };
        this.checkoutBasket = this.checkoutBasket.bind(this);
        this.renderCheckoutMsg = this.renderCheckoutMsg.bind(this);
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
        

        if (basket.length > 0) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Basket:</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {basket.map(item => (
                                <li key={item} className="list-group-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-success" onClick={this.checkoutBasket}>Checkout</button>&nbsp;{this.renderCheckoutMsg()}
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