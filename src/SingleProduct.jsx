import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';
import { Container } from './App';
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { TbReplaceFilled } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import PageNavigation from './components/PageNavigation';
import FormatPrice from './helper/FormatPrice';



const SingleProduct = () => {

  const Api = 'https://api.pujakaitem.com/api/products';

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams();
  console.log(id, 'idSinglePage');

  console.log(isSingleLoading, 'isSingleLoading');
  console.log(singleProduct, 'singleProduct');

  const { id: sPageId, name, price, reviews, stars, stock, image = [{url:''}], featured, description, company, category, } = singleProduct;

  const [imageName, setImageName] = useState(image[0]);
  console.log(imageName,'imagName');

  useEffect(() => {
    getSingleProduct(`${Api}?id=${id}`)
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
              <div className="smallImages">

                 {image.map((ele,index)=>{
                  {/* console.log(ele,'ele'); */}
                  return(
                  <img src={ele.url} alt={ele.filename} key={index} onClick={()=> setImageName(ele)} />
                  )
                 })}
              </div>
              <div className="bigImage">
                <img src={imageName.url} alt={image[0].filename} />
              </div>
            </div>
            <div className="singleProduct__right">
              <h2>{name}</h2>
              <div className='rating'>
                <div><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                <span>({reviews} customers reviews)</span>
              </div>
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
               {stock > 0 ? <span style={{color : 'green'}}> In stock</span> : <span style={{color : 'red'}}> Not available</span> } </p>
    
              <p className='availavle_stock'>ID: <span>{id}</span></p>
              <p className='availavle_stock'>Brand:  <span>{company}</span></p>
              <hr />

              <div className="colors">
                <p>Colors: <span></span><span></span><span></span></p>
              </div>

              <div className="addProduct">
                <button><AiOutlineMinus /></button>
                <input type="text" value="1" />
                <button><AiOutlinePlus /></button>
              </div>

              <button className='footer__button'>ADD TO CART</button>


            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SingleProduct
