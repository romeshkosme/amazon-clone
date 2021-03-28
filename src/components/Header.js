import React, { Component } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
// import { addToBasket } from '../store/amazon/actions'

class Header extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </Link>

                <div className="header__search">
                    <input
                        className="header__searchInput"
                        type="text"
                    />
                    <SearchIcon
                        className="header__searchIcon"
                    />
                </div>

                <div className="header__nav">
                    <Link to="/login">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Hello Guest
                        </span>
                            <span className="header__optionLineTwo">
                                Sign In
                        </span>
                        </div>
                    </Link>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon
                            className=""
                        />
                        <span className="header__optionLineTwo header__basketCount">
                            {this.props.basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { basket } = state.Reducer;
    return { basket };
}

export default connect(mapStateToProps, null)(Header)