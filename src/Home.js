import React from 'react'
import "./home.css";
import Product from "./product.js";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ZZZ/1500x600_Hero-Tall_ft._CB414368567_.jpg"/>

                <div className="home__row">
                    <Product 
                    title="Acer Helios 300 Core i7 10th Gen (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/
                        6 GB Graphics/NVIDIA Geforce RTX 2060/144 Hz) "
                    price={85999}
                    rating={5}
                    image="https://5.imimg.com/data5/IOS/Default/2020/9/RI/RE/UL/48820468/product-jpeg-500x500.png"/>
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={90900}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    </div>

                <div className="home__row">
                    <Product 
                    title="Tinted Men's Cotton Sinker Hooded Waterfall Full Sleeve Cardigan"
                    price={999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91VhTgOp4BL._UY550_.jpg"/>
                    
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={7499}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                    title="New Apple iPhone 12 (64GB) - (Product) RED"
                    price={79999}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601830933000"/>
                
                    
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={120089}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
