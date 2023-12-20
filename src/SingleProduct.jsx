import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';
import { Container } from './App';
import { FaTruckFast } from "react-icons/fa6";
import { TbReplaceFilled } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import PageNavigation from './components/PageNavigation';
import FormatPrice from './helper/FormatPrice';
import MySingleProImages from './components/MySingleProImages';
import Rating from './components/Rating';
import AddToCart from './components/AddToCart';



// const SingleProduct = (prop) => {
const SingleProduct = () => {

  // const Api = 'https://api.pujakaitem.com/api/products';
  //const Api = 'http://localhost:3000/api/products';
  const Api = 'https://ecomm-api-dydp.onrender.com/api/products';
  
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams();
  console.log(id, 'idSinglePage');

  console.log(isSingleLoading, 'isSingleLoading');
  console.log(singleProduct, 'singleProduct');

  const { name, price, reviews, stars, stock, image,  description, company,  } = singleProduct;

  // console.log(imageName,'imagName');

  useEffect(() => {
    // getSingleProduct(`${Api}?id=${id}`)
    getSingleProduct(`${Api}/${id}`)
  }, [])

  if (isSingleLoading) {
    console.log(isSingleLoading, 'isSingleLoading');
    return (
      <>
        <div className="section featureProducts">
          <Container>
            <img className='loading_image' src="loading_image.png" alt="loading_image" />
          </Container>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="section singleProduct">
        <Container>

          <PageNavigation title={name} />

          <div className="singleProduct__row">

            <div className="singleProduct__left">
              <MySingleProImages image={image} />
            </div>

            <div className="singleProduct__right">
              <h2>{name}</h2>
              <Rating stars={stars} reviews={reviews} />
              <p className='mrp'>MRP: <del><FormatPrice price={price + 250000} /></del> </p>
              <h3>Deal of the Day: <FormatPrice price={price} /></h3>
              <p className='description'>{description}</p>
              <div className="convenience">
                <div>
                  <FaTruckFast />
                  <p>Free Delivery</p>
                </div>
                <div>
                  <TbReplaceFilled />
                  <p>30 Days Replacement</p>
                </div>
                <div>
                  <FaTruckFast />
                  <p>Owes Deliveredt</p>
                </div>
                <div>
                  <MdSecurity />
                  <p>2 years Warranty</p>
                </div>
              </div>

              <p className='availavle_stock'>Available:
                {stock > 0 ? <span style={{ color: 'green' }}> In stock</span> : <span style={{ color: 'red' }}> Not available</span>} </p>

              <p className='availavle_stock'>ID: <span>{id}</span></p>
              <p className='availavle_stock'>Brand:  <span>{company}</span></p>
              <hr />

              <AddToCart product={singleProduct} />


            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SingleProduct
