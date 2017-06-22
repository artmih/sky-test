import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        
        this.addItemToBasket = this.addItemToBasket.bind(this);
    }

    componentWillReceiveProps(newProps) {
        const { locationID, products } = this.props;
        if (locationID !== newProps.locationID) {
            this.props.getProducts(newProps.locationID);
        }
    }

    parseProducts() {
        const { products, basket } = this.props;
        console.log('AAA, parseProducts basket', basket);
        //console.log('=== basket.items.findIndex()', basket.indexOf("Liverpool TV"));
        if (products.items.length > 0) {
            let sports = [], 
                news = [];
            
            for (let i = 0; i <= products.items.length - 1; i++) {
                if (products.items[i].category === "Sports") {
                    sports.push({
                        category: products.items[i].category,
                        product: products.items[i].product,
                        locationID: products.items[i].locationID,
                        selected: false
                    });
                }
                else if (products.items[i].category === "News") {
                    news.push({
                        category: products.items[i].category,
                        product: products.items[i].product,
                        locationID: products.items[i].locationID,
                        selected: false
                    });
                }
            }

            return { sports, news };
        }
        else {
            return { sports: [], news: [] };
        }
    }

    addItemToBasket(e) {
        this.props.addItemToBasket({ id: e.currentTarget.value });
    }

    renderSportsItems(items) {
        //checked={sportItem.selected === true}
        if (items.length) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Sports:</div>
                    <div className="panel-body">
                        {items.map(sportItem => (
                            <div className="checkbox" key={sportItem.product}>
                                <label><input type="checkbox" value={sportItem.product} onChange={this.addItemToBasket} />{sportItem.product}</label>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }

    renderNewsItems(items) {
        //checked={newsItem.selected === true} 
        if (items.length) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">News:</div>
                    <div className="panel-body">
                        {items.map(newsItem => (
                            <div className="checkbox" key={newsItem.product}>
                                <label><input type="checkbox" value={newsItem.product} onChange={this.addItemToBasket} />{newsItem.product}</label>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }

    render() {
        const parsedProducts = this.parseProducts();
        return (
            <div>
                <div className="page-header">
                    <h2>Choose products</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {this.renderSportsItems(parsedProducts.sports)}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {this.renderNewsItems(parsedProducts.news)}
                    </div>
                </div>
            </div>
        );
    }
}