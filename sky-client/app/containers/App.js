import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Customer from '../components/Customer';
import Products from '../components/Products';
import Basket from '../components/Basket';

import * as customerActions from '../actions/customerActions';
import * as productActions from '../actions/productActions';
import * as basketActions from '../actions/basketActions';

class App extends React.Component {
    render() {
        const { setUser } = this.props.customerActions;

        return (
            <div className="col-md-12 text-center">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                SkyTV Test
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="row text-center">
                    <div className="col-md-4 col-xs-12">
                        <Customer customer={this.props.customer} 
                            getUser={this.props.customerActions.getUser} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Products locationID={this.props.customer.locationID} 
                            products={this.props.products}
                            getProducts={this.props.productActions.getProducts}
                            addItemToBasket={this.props.basketActions.addItemToBasket}/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Basket basket={this.props.basket}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        customer: state.customer,
        products: state.products,
        basket: state.basket,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch),
        productActions: bindActionCreators(productActions, dispatch),
        basketActions: bindActionCreators(basketActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)