import React, { Component } from 'react'
import './Home.css'
import Product from './Product'

class Home extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter20/GW/bau_1500x600._CB417285408_.jpg"
                    />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="Diwali Celebration - Cadburry"
                            price={29.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/71htgwDng3L._SL1500_.jpg"
                            rating={4}
                        />
                        <Product
                            id="2"
                            title="FujiFilm X-T100"
                            price={99.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/81K5z3F-vQL._SL1500_.jpg"
                            rating={3}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="3"
                            title="Converse Canvas Shoes - Dark Blue"
                            price={149.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/81BXvsaMgyL._UL1500_.jpg"
                            rating={2}
                        />
                        <Product
                            id="4"
                            title="Lenovo Legion 5i"
                            price={20.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
                            rating={5}
                        />
                        <Product
                            id="5"
                            title="Google Home"
                            price={199.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/31qHkHUb1VL.jpg"
                            rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="6"
                            title="Apple Iphone"
                            price={500.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/419smKsnVyL._SY550_.jpg"
                            rating={4}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;