import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { connect } from "react-redux"
import { getBasketTotal } from '../store/amazon/reducer'

class Subtotal extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                {/* Part of the homework */}
                                Subtotal ({this.props.basket?.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(this.props.basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button>Proceed to Checkout</button>
            </div>
        )
    }
}

// export default Subtotal
const mapStateToProps = state => {
    const { basket } = state.Reducer;
    return { basket };
}

export default connect(mapStateToProps, null)(Subtotal)