import React from 'react';
import "./Home.css"
import Product from './Product';

function Home(){
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg" alt=""/>
            <div className="home__row">
                <Product
                    id="B00CYS9DQ8"
                    title="Folgers Caramel Drizzle Flavored Coffee, 72 Keurig K-Cup Pods"
                    price={38.82}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UzwvtZfAL._SL1500_.jpg"
                />
                <Product
                    id="B07K1CLKK7"
                    title="
                    AUTOart Diecast Car & LED Display Case Package - 2015 Lamborghini Huracan Super Trofeo, Orange 81558 - 1/18 Scale Diecast Model Toy Car w/LED Display Case"
                    price={188.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/617-zDDbePL._AC_SL1000_.jpg"
                />
            </div> 
            <div className="home__row">
                <Product
                    id="265198691001"
                    title="Maisto 2020 Ford Shelby GT 500 Mustang 1:18 Diecast Model Car Blue"
                    price={23.77}
                    rating={5}
                    image="https://i.ebayimg.com/images/g/BaMAAOSwZVFgyquD/s-l1600.jpg"
                />
                <Product
                    id="B00CYS9DQ8"
                    title="Folgers Caramel Drizzle Flavored Coffee, 72 Keurig K-Cup Pods"
                    price={38.82}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UzwvtZfAL._SL1500_.jpg"
                />
                <Product
                    id="B00CYS9DQ8"
                    title="Folgers Caramel Drizzle Flavored Coffee, 72 Keurig K-Cup Pods"
                    price={38.82}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UzwvtZfAL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="B00CYS9DQ8"
                    title="Folgers Caramel Drizzle Flavored Coffee, 72 Keurig K-Cup Pods"
                    price={38.82}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UzwvtZfAL._SL1500_.jpg"
                />
            </div> 
        </div>
    )
}


export default Home;