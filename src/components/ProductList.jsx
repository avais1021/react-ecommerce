import React from 'react'
import { useFilterContext } from '../context/Filter_Context'
import GridView from './GridView';
import ListView from './ListView';
// import { useProductContext } from '../context/ProductContext'
// import { Container } from '../App'
// import FormatPrice from '../helper/FormatPrice'

const ProductList = () => {

    const {filter_products,grid_view} = useFilterContext();

    if(grid_view === true){
        return <GridView products={filter_products} />
    }

    if(grid_view === false){
        return <ListView products = {filter_products} />
    }
}
    



// const ProductList = () => {

//     const { products, isLoading } = useProductContext()

//     // console.log(products,'productsList product');

//     if (isLoading) {
//         return (
//             <>
//                 <div className="section featureProducts">
//                     <Container>
//                         <img className='loading_image' src="loading_image.png" alt="loading_image" />
//                     </Container>
//                 </div>
//             </>
//         )
//     }


//     return (
        // <div className='CardList_parent'>

        //     {products.map((ele , idx) => {
        //         const { id, category, name, image, price } = ele;
        //         return (
        //             <div className="AllProducts__Card" key={idx}>
        //                 <div className="imageWrapper">
        //                     <img src={image} alt="card_image" />
        //                     <h3>{category}</h3>
        //                 </div>
        //                 <div className="name_price">
        //                     <p>{name}</p>
        //                     <span><FormatPrice price={price}/></span>
        //                 </div>
        //             </div>

        //         )
        //     })}

        // </div>
//     )
// }

export default ProductList
