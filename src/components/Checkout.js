import React, { Component } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { connect } from "react-redux"

class Checkout extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Cart {this.props.basket?.length}
                        </h2>
                        {
                            this.props.basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="checkout__right">
                    <h2 className="checkout_rightTitle">
                        <Subtotal />
                    </h2>
                </div>
            </div>
        )
    }
}

// export default Checkout
const mapStateToProps = state => {
    const { basket } = state.Reducer;
    console.log("this.propd :: ", basket)
    return { basket };
}

export default connect(mapStateToProps, null)(Checkout)