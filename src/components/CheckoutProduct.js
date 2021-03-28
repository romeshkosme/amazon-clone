import React from 'react';
import { Component } from 'react';
import './CheckoutProduct.css';
import { removeFromBasket } from '../store/amazon/actions'
import { connect } from "react-redux"

class CheckoutProduct extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="checkoutProduct" id={this.props.id}>
                <img className="checkoutProduct__image" alt="" src={this.props.image} />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {this.props.title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(this.props.rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                    <button onClick={() => this.props.removeFromBasket(this.props.id)}>Remove from Basket</button>
                </div>
            </div>
        )
    }
}

// export default CheckoutProduct
export default connect(null, { removeFromBasket })(CheckoutProduct)