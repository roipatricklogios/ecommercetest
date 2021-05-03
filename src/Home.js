import React from "react";
import mpic from './elders.jpeg';
import movie1 from './Products/movie1.jpeg'
import movie2 from './Products/movie2.jpeg'
import movie3 from './Products/movie3.jpeg'
import movie4 from './Products/movie4.jpeg'
import movie5 from './Products/movie5.jpeg'
import hp1 from './Products/hp1.jpg'
import hp2 from './Products/hp2.jpeg'
import hp3 from './Products/hp3.jpg'
import hp4 from './Products/hp4.jpeg'
import hp5 from './Products/hp5.jpg'
import hp6 from './Products/hp6.jpg'
import hp7 from './Products/hp7.jpg'
import hp8 from './Products/hp8.jpeg'
import './Home.css'
import Product from './Product'

function Home() {
    return(
        <div className="home">
            <img src={mpic}
            alt="header_image" className="home__image"/>

            <h3 className="home__product__title">Underworld Saga</h3> 
            <div className="home__row">
                <Product
                    id="00001"
                    title="Underworld"
                    price={100.00}
                    rating={1}
                    image={movie1}
                />
                <Product
                    id="00001"
                    title="Underworld: Evolution"
                    price={150.00}
                    rating={3}
                    image={movie2}
                />
                <Product
                    id="00001"
                    title="Underworld: Rise of the Lycans"
                    price={175.00}
                    rating={9.2}
                    image={movie3}
                />
                <Product
                    id="00001"
                    title="Underworld: Awakening"
                    price={200.00}
                    rating={9.2}
                    image={movie4}
                />
                <Product
                    id="00001"
                    title="Underworld: Blood Wars"
                    price={500.00}
                    rating={9.2}
                    image={movie5}
                />
            </div>
            {/* Harry Potter */}
            <h3 className="home__product__title">Harry Potter Collection</h3>
            <div className="home__row">
                <Product
                    id="00001"
                    title="Harry Potter: Philisophers Stone"
                    price={100.00}
                    rating={1}
                    image={hp1}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Chamber of Secrets"
                    price={150.00}
                    rating={3}
                    image={hp2}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Prisoner of Azkaban"
                    price={175.00}
                    rating={9.2}
                    image={hp3}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Goblet of Fire"
                    price={200.00}
                    rating={9.2}
                    image={hp4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="00001"
                    title="Harry Potter: Order of the Phoenix"
                    price={100.00}
                    rating={1}
                    image={hp5}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Half Blood Prince"
                    price={150.00}
                    rating={3}
                    image={hp6}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Deathly Hallows 1"
                    price={175.00}
                    rating={9.2}
                    image={hp7}
                />
                <Product
                    id="00001"
                    title="Harry Potter: Deathly Hallows 2"
                    price={200.00}
                    rating={9.2}
                    image={hp8}
                />
            </div>
        </div>
    )
}

export default Home;