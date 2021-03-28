import React, { Component } from 'react'
import './Product.css'
import { connect } from "react-redux"
import { addToBasket } from '../store/amazon/actions'

class Product extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="product" id={this.props.id}>
                <div className="product__info">
                    <p>{this.props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(this.props.rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <img
                    src={this.props.image}
                />

                <button onClick={() => this.props.addToBasket({
                    'title': this.props.title,
                    'rating': this.props.rating,
                    'price': this.props.price,
                    'image': this.props.image,
                    'id': this.props.id
                })}>Add to Cart</button>
            </div>
        )
    }
}

export default connect(null, { addToBasket })(Product)