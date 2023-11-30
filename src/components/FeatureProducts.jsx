import React from 'react'
import { Container } from '../App'
import { useProductContext } from '../context/ProductContext';
import Product from '../components/Product';

const FeatureProducts = () => {

    const { isLoading, featureProducts } = useProductContext();

    console.log(featureProducts, 'featureProducts');


    if (isLoading) {
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
            <div className="section">
                <Container>
                    <div className="featureProducts">
                        <h3>CHECK NOW</h3>
                        <h2>Our Feature Service</h2>
                        <div className="product_row">

                            {featureProducts.map((currEle) => {
                                console.log(currEle, 'currEle');
                                return (
                                    
                                        <Product key={currEle.id} {...currEle} />
                                    
                                )
                            })}
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )

}

export default FeatureProducts
