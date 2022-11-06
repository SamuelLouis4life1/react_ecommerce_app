import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home = ({ }) => (
  
  <div>
    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> */}
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      Products
      {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export default Home;